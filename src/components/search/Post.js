import { Link } from "react-router-dom";
import { transformData } from "../../utils";
import styles from "./Posts.module.css";
import { parseXML, getImgFromXML } from "../../utils";

export const Post = ({ post }) => {
  return (
    <div className={styles.post__body}>
      <div className={styles.post__header}>
        <div className={styles.post__header_info}>
          <span className={styles.post__header_text}>
            {transformData(post.ok.issueDate)}
          </span>
          <span className={styles.post__header_text}>
            {post.ok.source.name}
          </span>
        </div>
        <p className={styles.post__header_title}>{post.ok.title.text}</p>
        {post.ok.attributes.isTechNews ||
        post.ok.attributes.isAnnouncement ||
        post.ok.attributes.isDigest ? (
          <p className={styles.post__header_section}>
            {post.ok.attributes.isTechNews && "технические новости"}
            {post.ok.attributes.isAnnouncement && "анонсы и события"}
            {post.ok.attributes.isDigest && "сводки новостей"}
          </p>
        ) : (
          ""
        )}
      </div>
      <div className={styles.post__main}>
        {getImgFromXML(post.ok.content.markup)?.length > 0 ? (
          <img
            src={getImgFromXML(post.ok.content.markup)}
            alt="man"
            className={styles.post__body_picture}
          />
        ) : (
          <p className={styles.post__body_nophoto}>НЕТ ИЗОБРАЖЕНИЯ</p>
        )}
        <p className={styles.post__body_text}>
          {parseXML(post.ok.content.markup)}
        </p>
      </div>
      <div className={styles.post__footer}>
        <Link to={post.ok.url} className={styles.post__footer_link}>
          Читать в источнике
        </Link>
        <span className={styles.post__footer_amount}>
          {post.ok.attributes.wordCount} слов(а)
        </span>
      </div>
    </div>
  );
};
