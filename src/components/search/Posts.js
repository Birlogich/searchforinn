import { Button } from "../../UI/Button";
import { useEffect, useState } from "react";
import styles from "./Posts.module.css";
import { Post } from "./Post";

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

  return (
    <div className={styles.posts__wrapper}>
      <p className={styles.posts__title}>Список Документов</p>
      <div className={styles.posts__row}>
        {!changedPosts
          ? postsFromServer
              ?.slice(0, 10)
              .map((post) => <Post post={post} key={post.id} />)
          : changedPosts?.map((post) => <Post post={post} key={post.id} />)}
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
