"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import withProduct from '../hoc/withProduct'

function About({product}) {
  return (
    <main>
    <h1>About Page</h1>
    <pre>
      {product && product.map(item=><p>{item.title}</p>)}
    </pre>
    <Link href={"/"}>About Us</Link>
    </main>
  )
}

export default withProduct(About);


