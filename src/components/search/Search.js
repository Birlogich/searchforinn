import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../store/posts/postsActions";
import { histogramsData } from "../../store/companies/companiesSelector";
import { objectSearchDataSelector } from "../../store/posts/postsSelector";
import styles from "./Search.module.css";
import { SearchInn } from "../../UI/SearchInn";
import { Preloader } from "konsta/react";
import { Histograms } from "../../UI/Histograms";
import { ReactComponent as Document } from "../../assets/images/document.svg";
import { ReactComponent as Folders } from "../../assets/images/folders.svg";
import { ReactComponent as ManWithRocket } from "../../assets/images/manwithrocket.svg";
import { ReactComponent as Woman } from "../../assets/images/woman.svg";
import { useEffect } from "react";
import { Posts } from "./Posts";

export const Search = () => {
  const accessToken = localStorage.getItem("accessToken");
  const dispatch = useDispatch();

  const histogramsAllData = useSelector(histogramsData);
  const histogramsDataStatus = histogramsAllData.status;
  const histogramsDataFromServer = histogramsAllData.data;

  const objectSearchData = useSelector(objectSearchDataSelector);
  const objectSearch = objectSearchData.objectSearch;
  const objectSearchStatus = objectSearchData.status;
  const posts = objectSearchData.posts;

  useEffect(() => {
    if (objectSearch.ids?.length > 0) {
      dispatch(getPosts(objectSearch, accessToken));
    } else return undefined;
  }, [objectSearch, accessToken, dispatch]);

  return (
    <div className="container">
      <div className={styles.search__row}>
        {!histogramsDataStatus && (
          <>
            <div className={styles.search__column}>
              <div className={styles.search__texts}>
                <p className={styles.search__title}>
                  Найдите необходимые данные в пару кликов.
                </p>
                <p className={styles.search__subtitle}>
                  Задайте параметры поиска.
                  <br /> Чем больше заполните, тем точнее поиск
                </p>
                <Document className={styles.search__document} />
              </div>
              <SearchInn />
            </div>
            <div className={styles.search__column}>
              <Folders className={styles.search__folders} />
              <ManWithRocket className={styles.search__manWith} />
            </div>
          </>
        )}
        {histogramsDataStatus === "loading" && (
          <div className={styles.search__column}>
            <div className={styles.search__texts_loaded}>
              <p className={styles.search__title}>
                Ищем. Скоро будут результаты
              </p>
              <p className={styles.search__subtitle}>
                Поиск может занять некоторое время,
                <br /> просим сохранять терпение.
              </p>
              <Woman className={styles.search__woman} />
            </div>
            <Histograms
              histogramsDataStatus={histogramsDataStatus}
              histogramsDataFromServer={histogramsDataFromServer}
            />
          </div>
        )}
        {histogramsDataStatus === "fullfiled" && (
          <Histograms
            histogramsDataStatus={histogramsDataStatus}
            histogramsDataFromServer={histogramsDataFromServer}
          />
        )}
      </div>
      {objectSearchStatus === "loading" && (
        <div
          style={{
            display: "flex",
            marginBottom: "50px",
            justifyContent: "center",
          }}
        >
          <Preloader size="w-20 h-20" className="k-color-brand-grey" />
        </div>
      )}
      {objectSearchStatus === "fullfiled" && <Posts posts={posts} />}
    </div>
  );
};
