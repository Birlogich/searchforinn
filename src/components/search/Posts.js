import { Button } from "../../UI/Button";
import { useEffect, useState } from "react";
import styles from "./Posts.module.css";
import { Post } from "./Post";
import { Link } from "react-router-dom";

export const Posts = ({ posts }) => {
  const [count, setCount] = useState(0);
  const [postsFromServer, setPostsFromServer] = useState(null);
  const [changedPosts, setChangedPosts] = useState(null);

  useEffect(() => {
    setPostsFromServer(posts);
  }, [posts]);

  const getNextPosts = (initialState, startPoint, count) => {
    const addTenPosts = [...initialState].slice(0, startPoint + count);
    setChangedPosts(addTenPosts);
    setCount(count);
  };

  console.log(postsFromServer);
  console.log(changedPosts);

  return (
    <div className={styles.posts__wrapper}>
      <p className={styles.posts__title}>Список Документов</p>
      <div className={styles.posts__row}>
        {postsFromServer?.length === undefined && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "left",
            }}
          >
            <p className={styles.posts__title}>
              По вашему запросу не найдено постов
            </p>
            <Link to="/" className={styles.btn}>
              вернуться на главную
            </Link>
          </div>
        )}
        {!changedPosts &&
          postsFromServer?.length > 0 &&
          postsFromServer
            ?.slice(0, 10)
            .map((post) => <Post post={post} key={post.id} />)}
        {changedPosts &&
          changedPosts?.map((post) => <Post post={post} key={post.id} />)}
        {/*         {!changedPosts
          ? postsFromServer
              ?.slice(0, 10)
              .map((post) => <Post post={post} key={post.id} />)
          : changedPosts?.map((post) => <Post post={post} key={post.id} />)} */}
      </div>
      <div className={styles.posts__footer}>
        {changedPosts?.length !== postsFromServer?.length ? (
          <Button
            title="Показать больше"
            className={styles.posts__btn}
            onClick={() => getNextPosts(postsFromServer, 9, count + 10)}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
