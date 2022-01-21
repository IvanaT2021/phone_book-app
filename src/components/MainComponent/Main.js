import React from "react";
import styles from "./Main.module.css";
import AddButton from "./AddButtonComponent/AddButton";
import Phonebook from "./PhonebookComponent/Phonebook"

const Main = () => {
  return (
    <div className={styles.klasa}>
      <h5>hello from Main</h5>
      <AddButton />
      <Phonebook />
      
    </div>
  );
};
export default Main;
