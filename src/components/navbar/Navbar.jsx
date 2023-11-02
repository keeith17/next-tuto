"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
    {
        id: 1,
        title: "홈",
        url: "/",
    },
    {
        id: 2,
        title: "포트폴리오",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "방명록",
        url: "/blog",
    },
    // {
    //   id: 4,
    //   title: "About",
    //   url: "/about",
    // },
    // {
    //   id: 5,
    //   title: "Contact",
    //   url: "/contact",
    // },
    {
        id: 6,
        title: "내가 쓴 글",
        url: "/dashboard",
    },
];

const Navbar = () => {
    const session = useSession();
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                gabin portfolio
            </Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map((link) => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                {session.status === "authenticated" && (
                    <button className={styles.logout} onClick={signOut}>
                        Logout
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
