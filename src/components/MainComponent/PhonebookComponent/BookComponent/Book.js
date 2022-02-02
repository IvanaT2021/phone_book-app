import React from 'react';
import styles from './Book.module.css';
import * as Icon from 'react-bootstrap-icons';
const Book = (props) => {
  return (
    <tr key={props.contact.id}>
            <td>{props.contact.fname}</td>
            <td>{props.contact.lname}</td>
            <td>{props.contact.email}</td>
            <td>{props.contact.phone}</td>
            <td>
              <button
                onClick={() => {props.setUpdate(props.contact.id);props.setEditForm(true)}}
                className={styles.EditButton}
              >
                <Icon.PencilFill  color="black" size={16}/>
              </button>
      
              <button
                onClick={() => props.handleDeleteFromPBook(props.contact.id)}
                className={styles.DeleteButton}
              >
                <Icon.TrashFill  color="black" size={16}/>
              </button>
            </td>
          </tr>
  );
};
export default Book;
