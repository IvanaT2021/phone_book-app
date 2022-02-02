import React, { useState, useEffect } from 'react';
import styles from './Main.module.css';
import Phonebook from './PhonebookComponent/Phonebook';
import EntryForm from './EntryForm';
import { v4 as uuidv4 } from 'uuid';
import { Container, Row, Col } from 'react-bootstrap';
import data from './../../data-file.json';

const Main = () => {
  // state for contacts

  const [contacts, setContacts] = useState(getInitialContacts());

  // seting edit/add view
  const [useEditForm, setEditForm] = useState(false);
  // manipulate with show/hide form

  const [viewForm, setViewForm] = useState(false);
  const handleFormAdd = () => {
    setViewForm(true);
  };

  // state for form data
  const [addFormData, setAddFormData] = useState({
    id: '',
    fname: '',
    lname: '',
    email: '',
    phone: '',
  });
  // adding values to form fields
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
  };

  // adding  values from form to table
  const handleAddFormSubmit = () => {
    //event.preventDefault();
    const newContact = {
      id: uuidv4(),
      fname: addFormData.fname,
      lname: addFormData.lname,
      email: addFormData.email,
      phone: addFormData.phone,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  // filling fields in form when edit
  const [editcontact, setEditContact] = useState('');

  //update sa input fields in row
  const setUpdateID = (param) => {
    setEditForm(true);
    setViewForm(true);
    console.log(param);
    contacts.map((contact) => {
      if (contact.id === param) {
        return setEditContact(contact);
      }
    });
  };
 
  // get edited data
  const setUpdate = (event) => {
    
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const editFormData = { ...editcontact };
    editFormData[fieldName] = fieldValue;
    setEditContact(editFormData);
    console.log(editFormData);
  };

  //update contact
  const updateContact = (e) => {
    e.preventDefault();
    console.log(editcontact);

    setContacts(
      contacts.map((contact) => {
        if (contact.id === editcontact.id) {
          contact.fname = editcontact.fname;
          contact.lname = editcontact.lname;
          contact.email = editcontact.email;
          contact.phone = editcontact.phone;
        }
        return contact;
      })
    );
  };

  // handle delete
  const handleDelete = (id) => {
    setContacts([
      ...contacts.filter((contact) => {
        return contact.id !== id;
      }),
    ]);
  };

  //getting stored contacts
  function getInitialContacts() {
    const temp = localStorage.getItem('contacts');
    const savedContacts = JSON.parse(temp);
    return savedContacts || [];
  }

  // storing contacts
  useEffect(() => {
    const temp = JSON.stringify(contacts);
    localStorage.setItem('contacts', temp);
  }, [contacts]);

  return (
    <div>
      <button
        className={styles.AddButton}
        onClick={() => {
          handleFormAdd(true);
          setEditForm(false);
        }}
      >
        Novi Kontakt
      </button>
      <div className={styles.Main}>
        <Phonebook
          setUpdateFromMain={setUpdateID}
          setEditForm={setEditForm}
          contactPropsFromMain={contacts}
          handleDeleteFromMain={handleDelete}
        />
        {viewForm ? (
          <EntryForm
            updateContact={updateContact}
            useEditForm={useEditForm}
            editcontact={editcontact}
            setUpdateFromMain={setUpdate}
            handleAddFormChangeFromMain={handleAddFormChange}
            handleAddFormSubmitFromMain={handleAddFormSubmit}
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default Main;
