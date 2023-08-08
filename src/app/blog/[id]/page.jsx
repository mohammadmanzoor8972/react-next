
import React from 'react'

import styles from './page.module.css'
import Link from 'next/link';

const PostURl = "https://jsonplaceholder.typicode.com/posts"


export const getData = async (id)=>{
  const res = await fetch(PostURl+'/'+id,{
    next: {revalidate:10}
   // cache: 'no-cache'
  });

  if(!res.ok){
    throw new Error("Faild to load data")
  }
  return res.json();
}

const BlogDetails= async ({params, searchParams})=> {
  const {id}= params;
  const {body, title} = await getData(id);

  return (
    <div>
      <h1>Blog Details&nbsp;</h1><Link href="/blog"> Back</Link>
      <div className={styles.container}>
        <h3>{title}</h3>
        <hr/>
        <p>
          {body}
        </p>
      </div>
    </div>
  )
}

export default BlogDetails;