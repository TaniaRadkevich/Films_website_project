import React from "react";
import styles from "./ListTitle.module.scss";

interface ListTitleProps {
    title: string;
    count?: number;
}

const ListTitle: React.FC<ListTitleProps> = ({ title, count }) => {
    return (
        <div className={styles.list_title_container}>
            <h2 className={styles.list_title}>{title} {count !== undefined && `(${count})`}</h2>
        </div>
    );
}

export default ListTitle;