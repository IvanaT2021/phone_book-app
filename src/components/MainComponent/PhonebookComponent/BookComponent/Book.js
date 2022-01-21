import React from "react";
import styles from "./Book.module.css";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const Book = () => {
  return (
    <div className={styles.klasa_dva}>
      <h5>hello from book</h5>
      <EditButton />
      <DeleteButton />
    </div>
  );
};
export default Book;
