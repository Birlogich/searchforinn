import { Button } from "./Button";
import styles from "./SearchInn.module.css";

export const SearchInn = () => {
  return (
    <form className={styles.innForm}>
      <div className={styles.innForm__row}>
        <div className={styles.innForm__column}>
          <label className={styles.innForm__label}>
            ИНН компании*
            <input
              className={styles.innForm__input}
              type="text"
              placeholder="10 цифр"
            ></input>
          </label>
          <label className={styles.innForm__label}>
            Тональность
            <select
              className={`${styles.innForm__input} ${styles.innForm__input_tone}`}
            >
              <option value="any" className={styles.innForm__option}>
                Любая
              </option>
            </select>
          </label>
          <label className={styles.innForm__label}>
            Количество документов в выдаче*
            <input
              className={styles.innForm__input}
              type="number"
              placeholder="От 1 до 1000"
            ></input>
          </label>
        </div>
        <div className={styles.innForm__column}>
          <label className={styles.innForm__label_check}>
            <input type="checkbox" className={styles.innForm__checkbox}></input>
            Признак максимальной полноты
          </label>
          <label className={styles.innForm__label_check}>
            <input type="checkbox" className={styles.innForm__checkbox}></input>
            Упоминания в бизнес-контексте
          </label>
          <label className={styles.innForm__label_check}>
            <input type="checkbox" className={styles.innForm__checkbox}></input>
            Главная роль в публикации
          </label>
          <label className={styles.innForm__label_check}>
            <input type="checkbox" className={styles.innForm__checkbox}></input>
            Публикации только с риск-факторами
          </label>
          <label className={styles.innForm__label_check}>
            <input type="checkbox" className={styles.innForm__checkbox}></input>
            Включать технические новости рынков
          </label>
          <label className={styles.innForm__label_check}>
            <input type="checkbox" className={styles.innForm__checkbox}></input>
            Включать анонсы и календари
          </label>
          <label className={styles.innForm__label_check}>
            <input type="checkbox" className={styles.innForm__checkbox}></input>
            Включать сводки новостей
          </label>
        </div>
      </div>
      <div className={styles.innForm__footer}>
        <label className={styles.innForm__label}>Диапазон поиска*</label>
        <div className={`${styles.innForm__row} ${styles.innForm__row_footer}`}>
          <div className={styles.innForm__range}>
            <input
              type="number"
              style={{ marginTop: 0 }}
              className={`${styles.innForm__input} ${styles.innForm__input_range}`}
              min="1900"
              max="2099"
              step="1"
              placeholder="Дата начала"
            ></input>
            <input
              type="number"
              style={{ marginTop: 0 }}
              className={`${styles.innForm__input} ${styles.innForm__input_range}`}
              min="1900"
              max="2099"
              step="1"
              placeholder="Дата конца"
            ></input>
          </div>
          <div className={styles.innForm__btn_wrapper}>
            <Button title={"Поиск"} className={styles.innForm__btn} />
            <span className={styles.innForm__require}>
              * Обязательные к заполнению поля
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};
