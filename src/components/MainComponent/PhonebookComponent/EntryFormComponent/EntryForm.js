import React from "react";
import styles from "./EntryForm.module.css";
import EntryButton from "./EntryButton";

const EntryForm = () => {
  return (
    <div>
      <form className={styles.EntryForm}>
        <h5>Dodaj/izmjeni (novi) kontakt</h5>
        <input
          type="text"
          placeholder="Ime"
          // value={fname}
          name="fname"
          className={styles.InputText}
        />
        <input
          type="text"
          placeholder="Prezime"
          // value={lname}
          name="lname"
          className={styles.InputText}
        />
        <input
          type="text"
          placeholder="Email"
          // value={email}
          name="email"
          className={styles.InputText}
        />

        <input
          type="text"
          placeholder="Broj Telefona"
          // value={phone}
          name="fname"
          className={styles.InputText}
        />

        <EntryButton />
      </form>
    </div>
  );
};
export default EntryForm;
