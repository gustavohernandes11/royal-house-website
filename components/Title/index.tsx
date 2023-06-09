import styles from "./styles.module.scss";

import React from "react";

export const Title = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};
