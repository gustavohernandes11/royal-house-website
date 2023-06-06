import styles from "./styles.module.scss";

import React from "react";

export const GridView = ({ children }) => {
  return <section className={styles.grid}>{children}</section>;
};
