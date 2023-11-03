import Image from "next/image";
import styles from "./page.module.css";
import mainImage from "public/main.jpeg";
import Button from "@/components/Button/Button";

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div>
                    <ul className={styles.title}>
                        <li className={styles.greet}>안녕하세요!</li>
                        <li className={styles.intro}>열려 있는 마음으로</li>
                        <li className={styles.intro}>
                            유연하게 사고하는 개발자
                        </li>
                    </ul>
                    <div className={styles.intro}>
                        <span className={styles.myName}>염가빈</span>입니다.
                    </div>
                </div>
                <Button url="/portfolio" text="작업물 보러 가기" />
            </div>
            <div className={styles.itemRight}>
                <div className={styles.itemBox}>
                    <div className={styles.sTitle}>기술 스택</div>
                    <div className={styles.content}>
                        <p>HTML5&nbsp;&nbsp;CSS3&nbsp;&nbsp;jQuery</p>
                        <p>
                            javaScript&nbsp;&nbsp;typeScript&nbsp;&nbsp;PHP&nbsp;&nbsp;Firebase
                        </p>
                        <p>React.js&nbsp;&nbsp;Next.js</p>
                    </div>
                </div>
                <div className={styles.itemBox}>
                    <div className={styles.sTitle}>자격증</div>
                    <div className={styles.content}>
                        <p>
                            웹디자인 기능사
                            <span className={styles.date}>2022-09</span>
                        </p>
                        <p>
                            정보처리기사
                            <span className={styles.date}>2023-09</span>
                        </p>
                    </div>
                </div>
                <div className={styles.contactBox}>
                    <p className={styles.contact}>
                        github:{" "}
                        <a href="https://github.com/keeith17">
                            https://github.com/keeith17
                        </a>
                    </p>
                    <p className={styles.contact}>
                        Email: paranoiaque17@gmail.com
                    </p>
                    <p className={styles.contact}>Phone: 010-9130-7141</p>
                </div>
                {/* <Image src={mainImage} alt="mainImage" className={styles.img} /> */}
            </div>
        </div>
    );
}
