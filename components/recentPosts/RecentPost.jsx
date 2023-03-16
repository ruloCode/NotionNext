import React from 'react'
import Link from 'next/link'
import styles from './recentPost.module.scss'
import PostCard from '../ui/postCard/PostCard'

export default function RecentPosts({posts}) {
    if(!posts) return <h1>No posts</h1>
    return (
      <div className={styles.recentPosts} >
       <div className='wrapper'>
        <div className={styles["recentPosts-header"]}>
           <h2 className={styles["recentPosts-title"]}>Recent Posts</h2>
          <p>
         <div className={styles["recentPosts-viewAll"]}>
           <Link href={`/blog`}>
               <a >View all</a>
             </Link>
         </div>
          </p>
        </div>
         <div className={styles["recentPosts-container"]} >
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


  