import React from "react";
import styles from "./page.module.css";

const Layout = ({ children }) => {
    return (
        <div>
            <h1 className={styles.mainTitle}>
                <span className={styles.strong}>W</span>orks
            </h1>
            {children}
        </div>
    );
};

export default Layout;
