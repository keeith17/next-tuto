import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>@2023 gabin. All rights reserved.</div>
      {/* <div>
        <Image src="" alt="gabin portfolio"/>
      </div> */}
    </div>
  )
}

export default Footer