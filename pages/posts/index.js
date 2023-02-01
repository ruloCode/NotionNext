import React from 'react'
import { getAllPublished } from '../../lib/notion';
import PostCard from '../../components/ui/postCard/PostCard.jsx'
import styles from './posts.module.scss'
export default function Posts({posts}) {

  return (
    <div className='wrapper' >
    <div className={styles.post}>
    <h1 className={styles.title}>Blog</h1>

     <div className={styles["post-container"]}>
       {posts.map((post, index) => (
         <div key={index}>
          <PostCard post={post} />
         </div>
       ))}
     </div>
    </div>
    </div>
  )
}


export const getStaticProps = async () => {
    
    const data = await getAllPublished()
    return {
      props: {
        posts: data,
      },
      revalidate: 60
    };
  };