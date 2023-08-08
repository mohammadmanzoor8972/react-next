import Link from 'next/link';
import React from 'react'
import styles from './page.module.css';

const PostURl = "https://jsonplaceholder.typicode.com/posts"


export const getData = async ()=>{
  const res = await fetch(PostURl,{
    //next: {revalidate:10}
    cache: 'no-cache'
  });

  if(!res.ok){
    throw new Error("Faild to load data")
  }
  return res.json();
}

const Blog = async ()=>{
const data = await getData();

return(
  <>
  <h1>Blog</h1>
  <ul>
    {data && data.map(item=>(<li className={styles.link} key={item.id}><Link href={`/blog/${item.id}`}>{item?.title}</Link></li>))}
  </ul>
  </>
)
}

export default Blog;