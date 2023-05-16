import styles from "./Search.module.css";
import { SearchInn } from "../../UI/SearchInn";
import { ReactComponent as Document } from "../../assets/images/document.svg";
import { ReactComponent as Folders } from "../../assets/images/folders.svg";
import { ReactComponent as ManWithRocket } from "../../assets/images/manwithrocket.svg";

export const Search = () => {
  return (
    <div className="container">
      <div className={styles.search__row}>
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
      </div>
    </div>
  );
};
