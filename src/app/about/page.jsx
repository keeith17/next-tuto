import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3233019/pexels-photo-3233019.jpeg?auto=compress&cs=tinysrgb&w=1600"
          //src="https://images.pexels.com/photos/6479551/pexels-photo-6479551.jpeg?auto=compress&cs=tinysrgb&w=1600"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Am I?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex expedita nisi autem amet ea, saepe beatae obcaecati tenetur, consequatur, repellat explicabo. Quam, harum blanditiis. Tenetur explicabo tempore alias praesentium fuga? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora, dolorum porro, voluptatum placeat sequi dolores deleniti nemo nisi illum at, repudiandae quisquam unde. Eaque atque repudiandae similique nisi hic!
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe architecto, ut voluptatibus eveniet quod aut deleniti porro quidem. Explicabo ipsa asperiores dolores repellendus aspernatur rerum culpa modi sunt fugiat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corporis laudantium qui quod ad incidunt ab laboriosam. Officia sapiente similique quibusdam odit. Debitis totam provident molestiae exercitationem non tempora vel?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What I do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facilis neque soluta doloribus corrupti voluptatum eligendi impedit esse quaerat sapiente ab tempore laboriosam ipsum, voluptatibus saepe. Omnis excepturi voluptate eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae officiis, odio cumque asperiores voluptatem aperiam ipsam rerum dolorum vel dolorem eius praesentium molestias perspiciatis magni fugiat voluptatum commodi, illum quis?
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ratione magni nam doloribus dolor dolore eaque nihil autem similique. Ad, molestiae tenetur nam velit officiis sint quod sapiente eveniet ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod ipsum corporis accusamus dolores voluptas, illo enim modi magni repellat perferendis quia tempora obcaecati aut, unde dolor! Inventore, sit accusantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatibus rem, illum aperiam maiores ipsam nisi architecto aliquam illo, quis libero laborum vitae nam? Eveniet mollitia cupiditate eaque itaque culpa?
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  )
}

export default About