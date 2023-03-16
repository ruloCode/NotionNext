import React from 'react'
import { getAllPublished } from '../../lib/notion';
import PostCard from '../../components/ui/postCard/PostCard.jsx'

export default function Blog({posts}) {

  return (
    <div  class=" wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
    {posts.map((post, index) => (
       <div key={index} class="bg-white shadow-md rounded-md overflow-hidden">
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