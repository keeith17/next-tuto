import Image from 'next/image'
import styles from './page.module.css'
import mainImage from 'public/main.jpeg'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button url="/portfolio" text="See our works"/>
      </div>
      <div className={styles.item}>
        <Image src={mainImage} alt="mainImage" className={styles.img}/>
      </div>
    </div>
  )
}
