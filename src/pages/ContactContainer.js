import React from "react";
import styles from "./ContactContainer.module.css";
import Navbar from "../components/NavbarComponent/Navbar";
import Contact from "./Contact";
const ContactContainer = () => {
  return (
    <div className={styles.ContactContainer}>
      <Navbar />
      <Contact/>
      
    </div>
  );
};
export default ContactContainer;