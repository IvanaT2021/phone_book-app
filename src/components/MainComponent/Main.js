import React from "react";
import styles from "./Main.module.css";
import AddButton from "./AddButtonComponent/AddButton";
import Phonebook from "./PhonebookComponent/Phonebook"

const Main = () => {
  return (
    <div className={styles.Main}>
      <AddButton />
      <Phonebook />
      
    </div>
  );
};
export default Main;
