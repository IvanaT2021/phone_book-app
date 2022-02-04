import React from "react";
import styles from "./Navbar.module.css";
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Početna",
    },

    {
      id: 2,
      path: "/about",
      text: "Dokumentacija",
    },
    
    {
      id: 3,
      path: "/contact",
      text: "Kontakt",
    },
   
  
  ];
  return (
    <div className={styles.Navlink}>
      <ul className={styles.ulList}>
        {links.map((link) => {
          return <li key={link.id}>
            <NavLink to={link.path}  exact>{link.text}</NavLink></li>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
