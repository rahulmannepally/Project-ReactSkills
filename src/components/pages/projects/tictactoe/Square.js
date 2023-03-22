import React from "react";
import styles from "./Square.module.css"
export default function Square({ value, onSquareClick }) {
    
    return (
        <button className={styles.square} onClick={onSquareClick}>
          {value}
        </button>
      );
  }