import React from "react";
import styles from "./Card.module.css";
export interface CardProps {
  children: React.ReactNode;
  title?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  padding?: "sm" | "md" | "lg";
}

export const Card: React.FC<CardProps> = ({
  children,
  title,
  shadow = "md",
  padding = "md",
}) => {
  return (
    <div className={`${styles.card} ${styles[shadow]} ${styles[padding]}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
};
