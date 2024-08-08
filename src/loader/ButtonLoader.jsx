import React from "react";
import styles from "./styles.module.scss"

export function ButtonLoader({ loading }) {

  return loading ? <div className={styles.buttonLoader}>
  </div> : ""
}