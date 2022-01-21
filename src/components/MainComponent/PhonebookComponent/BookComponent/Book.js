import React from "react";
import styles from "./Book.module.css";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const Book = () => {
  return (
    <div>
      <table className={styles.BookTable}>
        <thead>
          <tr>
            <th>Ime</th>
            <th>Prezime</th>
            <th>Email</th>
            <th>Broj Telefona</th>
            <th>Izmjene</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.BookCell}></td>
            <td className={styles.BookCell}></td>
            <td className={styles.BookCell}></td>
            <td className={styles.BookCell}></td>
            <td className={styles.BookCell}>
              <EditButton />
              <DeleteButton />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Book;
