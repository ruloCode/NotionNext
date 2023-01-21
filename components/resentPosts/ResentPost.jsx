import React from 'react'
import Link from 'next/link'
import styles from './resentPost.module.scss'
import PostCard from '../ui/postCard/PostCard'

export default function ResentPosts({posts}) {
    if(!posts) return <h1>No posts</h1>
    return (
      <div className={styles.recentPosts} >
       <div className='wrapper'>
         <h2 className={styles["recentPosts-title"]}>Recent Posts</h2>
        
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


  