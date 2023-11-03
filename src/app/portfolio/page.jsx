import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>작업물을 선택해 주세요.</h1>
            <div className={styles.items}>
                <Link href="/portfolio/pofohome" className={styles.item}>
                    <span className={styles.title}>포트폴리오 홈</span>
                </Link>
                <Link href="/portfolio/boysplanet" className={styles.item}>
                    <span className={styles.title}>모의 투표 서비스</span>
                </Link>
                <Link href="/portfolio/applications" className={styles.item}>
                    <span className={styles.title}>Applications</span>
                </Link>
            </div>
        </div>
    );
};

export default Portfolio;
