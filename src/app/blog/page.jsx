import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
    // const res = await fetch("https://next-tuto-one.vercel.app/api/posts", {
    //     next: { revalidate: 5 },
    //     // cache: "no-store",
    // });
    // if (!res.ok) {
    //     throw new Error("Failed to fetch data");
    // }
    // return res.json();
}

const Blog = async () => {
    // const data = await getData();
    return (
        <div className={styles.mainContainer}>
            {/* {data.map((item) => (
                <Link
                    href={`blog/${item._id}`}
                    className={styles.container}
                    key={item.id}
                >
                    <div className={styles.imageContainer}>
                        <Image
                            src={
                                item.img === ""
                                    ? "https://images.pexels.com/photos/4031043/pexels-photo-4031043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    : item.img
                            }
                            alt=""
                            width={200}
                            height={125}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.content}</p>
                    </div>
                </Link>
            ))} */}
        </div>
    );
};

export default Blog;
