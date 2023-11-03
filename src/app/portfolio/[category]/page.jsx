import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (item) => {
    const data = items[item];
    if (data) {
        return data;
    }
    return notFound();
};

const Category = ({ params }) => {
    const data = getData(params.category);
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            {data.map((item) => (
                <div className={styles.item} key={item.id}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                        <div className={styles.skill}>
                            <p className={styles.desc}>
                                <span className={styles.name}>FRONT:</span>
                                {item.front}
                            </p>
                            <p className={styles.desc}>
                                <span className={styles.name}>BACK:</span>
                                {item.back}
                            </p>
                            <p className={styles.desc}>
                                <span className={styles.name}>DEPLOY:</span>
                                {item.deploy}
                            </p>
                        </div>
                        <p className={styles.desc}>
                            <span className={styles.name}>
                                배운 / 아쉬운 점
                            </span>
                            {item.learn}
                        </p>
                        <Button text="See More" url={item.url} />
                    </div>
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.img}
                            fill={true}
                            src={item.image}
                            alt=""
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Category;
