import React from "react";
import styles from "./HoverCard.module.css";

function HoverCard() {
  return (
    <div className={styles.Container}>
      <div className={styles.HoverIcon}>Card</div>
      <div className={styles.Box}>Hover box</div>
    </div>
  );
}

export default HoverCard;
