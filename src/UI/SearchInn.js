import { useState } from "react";
import { useDispatch } from "react-redux";
import { regexInn, handleMatch } from "../utils";
import { getHistogtams } from "../store/companies/companiesActions";
import { getObjectSearch } from "../store/posts/postsActions";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import styles from "./SearchInn.module.css";

export const SearchInn = () => {
  const currentDate = new Date().toLocaleDateString("en-ca");
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();

  const [isType, setType] = useState(true);

  const handleChangeType = () => {
    setType(false);
  };

  const [isMatch, setIsMatch] = useState({
    startDate: undefined,
    endDate: undefined,
    inn: undefined,
    limit: undefined,
  });

  const [isSearch, setIsSearch] = useState({
    issueDateInterval: {
      startDate: "2019-01-01T00:00:00+03:00",
      endDate: "2022-08-31T23:59:59+03:00",
    },
    searchContext: {
      targetSearchEntitiesContext: {
        targetSearchEntities: [
          {
            type: "company",
            sparkId: null,
            entityId: null,
            inn: 7710137066,
            maxFullness: false,
            inBusinessNews: false,
          },
        ],
        onlyMainRole: false,
        tonality: "any",
        onlyWithRiskFactors: false,
        riskFactors: {
          and: [],
          or: [],
          not: [],
        },
        themes: {
          and: [],
          or: [],
          not: [],
        },
      },
      themesFilter: {
        and: [],
        or: [],
        not: [],
      },
    },
    searchArea: {
      includedSources: [],
      excludedSources: [],
      includedSourceGroups: [],
      excludedSourceGroups: [],
    },
    attributeFilters: {
      excludeTechNews: false,
      excludeAnnouncements: false,
      excludeDigests: false,
    },
    similarMode: "duplicates",
    limit: 1000,
    sortType: "sourceInfluence",
    sortDirectionType: "desc",
    intervalType: "month",
    histogramTypes: ["totalDocuments", "riskFactors"],
  });

  const handleChange = (e) => {
    if (e.target.name === "inn") {
      const newValue = {
        ...isSearch,
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                ...isSearch.searchContext.targetSearchEntitiesContext
                  .targetSearchEntities[0],
                [e.target.name]: e.target.value.trim(),
              },
            ],
          },
        },
      };
      handleMatch(e.target.value, regexInn, e, isMatch, setIsMatch);
      setIsSearch(newValue);
    }
    if (e.target.name === "tonality") {
      const newValue = {
        ...isSearch,
        searchContext: {
          targetSearchEntitiesContext: {
            ...isSearch.searchContext.targetSearchEntitiesContext,
            [e.target.name]: e.target.value,
          },
        },
      };
      setIsSearch(newValue);
    }
    if (e.target.name === "limit") {
      const newValue = {
        ...isSearch,
        [e.target.name]: e.target.value.trim(),
      };
      if (Number(e.target.value) <= 0 || Number(e.target.value) > 1000) {
        const uncorrectLimit = { ...isMatch, [e.target.name]: false };
        setIsMatch(uncorrectLimit);
      } else {
        const correctLimit = { ...isMatch, [e.target.name]: true };
        setIsMatch(correctLimit);
      }
      setIsSearch(newValue);
    }
    if (e.target.name === "startDate") {
      const enteredStartDate = e.target.value;
      const IsoDate = new Date(enteredStartDate).toISOString();
      if (enteredStartDate > currentDate) {
        const uncorrectStartDate = { ...isMatch, [e.target.name]: false };
        setIsMatch(uncorrectStartDate);
      } else {
        const newValue = {
          ...isSearch,
          issueDateInterval: {
            ...isSearch.issueDateInterval,
            [e.target.name]: IsoDate,
          },
        };
        const correctStartDate = { ...isMatch, [e.target.name]: true };
        setIsMatch(correctStartDate);
        setIsSearch(newValue);
      }
    }
    if (e.target.name === "endDate") {
      const enteredEndDate = e.target.value;
      const IsoDate = new Date(enteredEndDate).toISOString();
      if (enteredEndDate > currentDate) {
        const uncorrectEndDate = { ...isMatch, [e.target.name]: false };
        setIsMatch(uncorrectEndDate);
      } else {
        const newValue = {
          ...isSearch,
          issueDateInterval: {
            ...isSearch.issueDateInterval,
            [e.target.name]: IsoDate,
          },
        };
        const correctEndDate = { ...isMatch, [e.target.name]: true };
        setIsMatch(correctEndDate);
        setIsSearch(newValue);
      }
    }
  };

  //Почему-то "maxFullness" || "inBusinessNews" не срабаотывают верно

  const handleClick = (name, value) => {
    if (name === "maxFullness" || "inBusinessNews") {
      const newValueOfCheckbox = {
        ...isSearch,
        searchContext: {
          targetSearchEntitiesContext: {
            targetSearchEntities: [
              {
                ...isSearch.searchContext.targetSearchEntitiesContext
                  .targetSearchEntities[0],
                [name]: !value,
              },
            ],
          },
        },
      };
      setIsSearch(newValueOfCheckbox);
    }
    if (
      name === "excludeAnnouncements" ||
      "excludeDigests" ||
      "excludeTechNews"
    ) {
      const newValueOfCheckbox = {
        ...isSearch,
        attributeFilters: { ...isSearch.attributeFilters, [name]: !value },
      };
      setIsSearch(newValueOfCheckbox);
    }
    if (name === "onlyMainRole" || "onlyWithRiskFactors") {
      const newValueOfCheckbox = {
        ...isSearch,
        searchContext: {
          targetSearchEntitiesContext: {
            ...isSearch.searchContext.targetSearchEntitiesContext,
            [name]: !value,
          },
        },
      };
      setIsSearch(newValueOfCheckbox);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getHistogtams(isSearch, accessToken));
    dispatch(getObjectSearch(isSearch, accessToken));
  };

  return (
    <form className={styles.innForm} onSubmit={handleSubmit}>
      <div className={styles.innForm__row}>
        <div className={styles.innForm__column}>
          <label className={styles.innForm__label}>
            ИНН компании*
            <input
              className={
                isMatch.inn !== false
                  ? `${styles.innForm__input}`
                  : `${styles.innForm__input} ${styles.innForm__input_false}`
              }
              type="text"
              placeholder="10 цифр"
              name="inn"
              onChange={handleChange}
            ></input>
            {isMatch.inn === false ? (
              <p className={styles.searchinn__error}>
                Введите корректные данные
              </p>
            ) : null}
          </label>
          <label className={styles.innForm__label}>
            Тональность
            <select
              onChange={handleChange}
              name="tonality"
              className={`${styles.innForm__input} ${styles.innForm__input_tone}`}
            >
              <option value="any" className={styles.innForm__option}>
                Любая
              </option>
              <option value="positive" className={styles.innForm__option}>
                Позитивная
              </option>
              <option value="negative" className={styles.innForm__option}>
                Негативная
              </option>
            </select>
          </label>
          <label className={styles.innForm__label}>
            Количество документов в выдаче*
            <input
              className={
                isMatch.limit !== false
                  ? `${styles.innForm__input}`
                  : `${styles.innForm__input} ${styles.innForm__input_false}`
              }
              type="number"
              placeholder="От 1 до 1000"
              name="limit"
              onChange={handleChange}
            ></input>
            {isMatch.limit === false ? (
              <p className={styles.searchinn__error}>
                Введите корректные данные
              </p>
            ) : null}
          </label>
        </div>
        <div className={styles.innForm__column}>
          <label className={styles.innForm__label_check}>
            <Checkbox name="maxFullness" handleClick={handleClick} />
            Признак максимальной полноты
          </label>
          <label className={styles.innForm__label_check}>
            <Checkbox name="inBusinessNews" handleClick={handleClick} />
            Упоминания в бизнес-контексте
          </label>
          <label className={styles.innForm__label_check}>
            <Checkbox name="onlyMainRole" handleClick={handleClick} />
            Главная роль в публикации
          </label>
          <label className={styles.innForm__label_check}>
            <Checkbox name="onlyWithRiskFactors" handleClick={handleClick} />
            Публикации только с риск-факторами
          </label>
          <label className={styles.innForm__label_check}>
            <Checkbox name="excludeTechNews" handleClick={handleClick} />
            Включать технические новости рынков
          </label>
          <label className={styles.innForm__label_check}>
            <Checkbox name="excludeAnnouncements" handleClick={handleClick} />
            Включать анонсы и календари
          </label>
          <label className={styles.innForm__label_check}>
            <Checkbox name="excludeDigests" handleClick={handleClick} />
            Включать сводки новостей
          </label>
        </div>
      </div>
      <div className={styles.innForm__footer}>
        <label className={styles.innForm__label}>Диапазон поиска*</label>
        <div className={`${styles.innForm__row} ${styles.innForm__row_footer}`}>
          <div className={styles.innForm__range}>
            <div className={styles.innForm__rangerow}>
              <input
                onChange={handleChange}
                type={isType ? "text" : "date"}
                onFocus={handleChangeType}
                style={{ marginTop: 0 }}
                className={
                  isMatch.endDate || isMatch.startDate !== false
                    ? `${styles.innForm__input} ${styles.innForm__input_range}`
                    : `${styles.innForm__input} ${styles.innForm__input_range} ${styles.innForm__input_false}`
                }
                placeholder="Дата начала"
                name="startDate"
              ></input>
              <input
                onChange={handleChange}
                type={isType ? "text" : "date"}
                onFocus={handleChangeType}
                style={{ marginTop: 0 }}
                className={
                  isMatch.endDate || isMatch.startDate !== false
                    ? `${styles.innForm__input} ${styles.innForm__input_range}`
                    : `${styles.innForm__input} ${styles.innForm__input_range} ${styles.innForm__input_false}`
                }
                placeholder="Дата конца"
                name="endDate"
              ></input>
            </div>
            {isMatch.endDate === false || isMatch.startDate === false ? (
              <p className={styles.searchinn__error}>
                Введите корректные данные
              </p>
            ) : null}
          </div>
          <div className={styles.innForm__btn_wrapper}>
            <Button
              title="Поиск"
              className={styles.innForm__btn}
              autoFocus={true}
              disabled={
                isMatch.endDate === true &&
                isMatch.startDate === true &&
                isMatch.inn === true &&
                isMatch.limit === true
                  ? false
                  : true
              }
            />
            <span className={styles.innForm__require}>
              * Обязательные к заполнению поля
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};
