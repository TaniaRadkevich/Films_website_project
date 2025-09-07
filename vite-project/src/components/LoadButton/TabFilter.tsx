import React from "react";
import styles from "./TabFilter.module.scss";

interface TabFilterProps {
    activeType: string;
    onChange: (type: string) => void;
}

const types = ["All", "Movie", "Series", "Episode"];

const TabFilter: React.FC<TabFilterProps> = ({ activeType, onChange }) => {
    return (
        <div className={styles.tabFilterContainer}>
            {types.map((type) => (
                <button
                    key={type}
                    className={`${styles.tabButton} ${activeType === type ? styles.active : ""}`}
                    onClick={() => onChange(type)}
                >
                    {type}
                </button>
            ))}
        </div>
    );
};

export default TabFilter;