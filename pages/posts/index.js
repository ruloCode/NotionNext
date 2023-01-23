import React from 'react'
import { getAllPublished } from '../../lib/notion';
import PostCard from '../../components/ui/postCard/PostCard.jsx'

export default function Posts({posts}) {

  return (
    <div >
    {posts.map((post, index) => (
      <div key={index}>
       <PostCard post={post} />
      </div>
    ))}
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