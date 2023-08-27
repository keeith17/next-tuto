import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
 title: "Gabin Portfolio Contact Information",
 description: "This is Contact page"
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's keep in Touch</h1>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/7784599/pexels-photo-7784599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.image}
        />
      </div>
      <form className={styles.form}>
        <input type="text" placeholder='name' className={styles.input} />
        <input type="text" placeholder='email' className={styles.input} />
        <textarea className={styles.textArea} placeholder='message' cols="30" rows="10"></textarea>
        <Button url="#" text="send"/>
      </form>
      </div>
    </div>
  )
}

export default Contact