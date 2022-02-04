import React, { useState, useEffect } from 'react';
import styles from "./Contact.module.css";
import { v4 as uuidv4 } from 'uuid';

const Contact = () => {
  
  // state for contacts
  const [customers, setCustomers] = useState(getInitialCustomers());

  // state for form add data
  const [addFormData, setAddFormData] = useState({
    id: '',
    fname: '',
    email: '',
    comment: '',
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
      const newCustomer = {
        id: uuidv4(),
        fname: addFormData.fname,
        email: addFormData.email,
        phone: addFormData.comment,
      };
      const newCustomers = [...customers, newCustomer];
      setCustomers(newCustomers);
    };
  
    //getting stored contacts
    function getInitialCustomers() {
      const temp = localStorage.getItem('customers');
      const savedCustomers = JSON.parse(temp);
      return savedCustomers || [];
    }
  
    // storing contacts
    useEffect(() => {
      const temp = JSON.stringify(customers);
      localStorage.setItem('customers', temp);
    }, [customers]);

    const style={
    height:'100px',
    
    }
  
  return (
    <div className={styles.Contact}>
      
      <form
          onSubmit={handleAddFormSubmit}
          className={styles.EntryForm}
        >
         
          <h5 className={styles.Header}>Kontaktirajte nas</h5>

     
          <div >
            <input
            required
              type="text"
              
              name="fname"
              placeholder="Ime"
              className={styles.InputText}
              onChange={(e) => {
                handleAddFormChange(e);
              }}
             
            />
           
            <input
            required
              type="email"
              name="email"
              
              placeholder="Email"
              className={styles.InputText}
              onChange={(e) => {
                handleAddFormChange(e);
              }}
            />

            <textarea
            required
              type="text"
              name="comment"
              placeholder="Poruka"
              className={styles.InputText}
              style={style}
              onChange={(e) => {
                handleAddFormChange(e);
              }}
            ></textarea>

            <button type="submit" className={styles.EntryButton}>
              Pošalji
            </button>
          </div>
        </form>
      
    </div>
  );
};
export default Contact;