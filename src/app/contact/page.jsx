import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

function Contact() {
  return (
    <div className={styles.container}>
      <h1 >Contact</h1>
      <div className={styles.imgContainer}>
        <Image src="/next.svg" width={400} height={30} alt="Image"></Image>
      </div>
      </div>
  )
}

export default Contact