"use client";
import React from "react";
import styles from "./page.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
    const session = useSession();
    const router = useRouter();
    if (session.status === "loading") {
        return <p>Loading...</p>;
    }

    if (session.status === "authenticated") {
        router?.push("/dashboard");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

        signIn("credentials", { email, password });
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="email"
                    className={styles.input}
                    required
                />
                <input
                    type="password"
                    placeholder="password"
                    className={styles.input}
                    required
                />
                <button className={styles.button}>로그인</button>
            </form>
            <button className={styles.google} onClick={() => signIn("google")}>
                Google로 로그인하기
            </button>
            <Link href={`/dashboard/register`} className={styles.register}>
                회원가입하기
            </Link>
        </div>
    );
};

export default Login;
