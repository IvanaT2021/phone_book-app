import React from "react";
import styles from "./Phonebook.module.css";
import Book from "./BookComponent/Book";
import EntryForm from "./EntryFormComponent/EntryForm";

const Phonebook = () => {
  return (
    <div className={styles.PhoneBook}>
      <Book/>
      <EntryForm />
    </div>
  );
};
export default Phonebook;