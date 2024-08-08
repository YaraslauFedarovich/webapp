import React from "react";
import styles from "../styles.module.scss";
import { ButtonLoader } from "../../loader/ButtonLoader";
import { Link } from "react-router-dom";

export function StepButton({ isLoading, path, text, onClick }) {

  return <button className={styles.stepButton} onClick={onClick}>{
    isLoading
      ? <ButtonLoader loading={isLoading}/>
      : <Link to={path}>{text}</Link>}
  </button>}