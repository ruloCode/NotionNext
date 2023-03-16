import React from "react";
import Link from "next/link";
import styles from './postCard.module.scss'

const PostCard = ({  post }) => {
  return (
    <section className={styles.postCard} >
      <div>
        <h2>
          <Link href={`/blog/${post.slug}`}>
            <a className={styles["postCard-title"]}>{post.title}</a>
          </Link>
        </h2>
        <div className={styles["postCard-date"]}>{post.date}</div>
      </div>
      <p>{post.description}</p>
    </section>
  );
};

export default PostCard;
