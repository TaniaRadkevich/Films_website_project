import React from "react";
import styles from "./ListTitle.module.scss";

interface ListTitleProps {
    title: string;
}

const ListTitle: React.FC<ListTitleProps> = ({ title }) => {
    return (
        <div className={styles.list_title_container}>
            <h2 className={styles.list_title}>{title}</h2>
        </div>
    );
}

export default ListTitle;