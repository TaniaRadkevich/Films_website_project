import React from "react";
import styles from "./TabFilter.module.scss";

interface TabFilterProps {
    activeType: string;
    onChange: (type: string) => void;
}
const types = ["All", "Movie", "Series", "Episode"];
