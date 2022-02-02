import React, { useState } from 'react';
import styles from './Phonebook.module.css';
import Book from './BookComponent/Book'

const Phonebook = (props) => {
  return (
    <div className={styles.PhoneBook}>
      
      <table>
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
          {props.contactPropsFromMain.map((contact) => (
            <Book
            contact={contact}
            key={contact.id}
           
            setEditForm={props.setEditForm}
            //handleFormFromPBook={props.handleFormFromMain}
            setUpdate={props.setUpdateFromMain}
            handleDeleteFromPBook={props.handleDeleteFromMain}
            />
          ))}
          
        </tbody>
      </table>
     
    </div>
  );
};
export default Phonebook;
