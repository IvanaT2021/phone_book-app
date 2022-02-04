import { React, useState } from 'react';
import styles from './EntryForm.module.css';

const EntryForm = (props) => {
  /*const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose({
      close: true,
    });
    
  };
   
  const style = {
    display: '',
  };
*/
  // if (close) {
  //   style.display = 'none';
  // } else {
  //   style.display = '';
  // }
  
 

  return (
    <div className={styles.Container} >
      <button
        type="button"
        className={styles.UpperButton}
        onClick={props.handleClose}
      >
        X
      </button>
      {props.useEditForm ? (
        <form onSubmit={props.updateContact} className={styles.EntryForm}>
          <h5 className={styles.Header}>Izmjeni kontakt</h5>

          <div id={props.editcontact.id}>
            <input
              type="text"
              value={props.editcontact.fname}
              name="fname"
              placeholder="Ime"
              className={styles.InputText}
              onChange={(e) => {
                props.setUpdateFromMain(e);
              }}
              required
            />
            <input
              type="text"
              name="lname"
              value={props.editcontact.lname}
              placeholder="Prezime"
              className={styles.InputText}
              onChange={(e) => {
                props.setUpdateFromMain(e);
              }}
              required
            />
            <input
              type="email"
              name="email"
              value={props.editcontact.email}
              placeholder="Email"
              className={styles.InputText}
              onChange={(e) => {
                props.setUpdateFromMain(e);
              }}
              required
            />

            <input
              type="text"
              name="phone"
              value={props.editcontact.phone}
              placeholder="Broj Telefona"
              className={styles.InputText}
              onChange={(e) => {
                props.setUpdateFromMain(e);
              }}
              required
            />

            <button type="submit" className={styles.EntryButton}>
              Sačuvaj izmjene
            </button>
          </div>
        </form>
      ) : (
        <form
          onSubmit={props.handleAddFormSubmitFromMain}
          className={styles.EntryForm}
        >
          <h5 className={styles.Header}>Novi kontakt</h5>
          <div>
            <input
              type="text"
            
              name="fname"
              placeholder="Ime"
              className={styles.InputText}
              onChange={(e) => {
                props.handleAddFormChangeFromMain(e);
              }}
              required
            />
            <input
              type="text"
              name="lname"
           
              placeholder="Prezime"
              className={styles.InputText}
              onChange={(e) => {
                props.handleAddFormChangeFromMain(e);
              }}
              required
            />
            <input
              type="email"
              name="email"
           
              placeholder="Email"
              className={styles.InputText}
              onChange={(e) => {
                props.handleAddFormChangeFromMain(e);
              }}
              required
            />

            <input
              type="text"
              name="phone"
       
              placeholder="Broj Telefona"
              className={styles.InputText}
              onChange={(e) => {
                props.handleAddFormChangeFromMain(e);
              }}
              required
            />

            <button type="submit" className={styles.EntryButton}>
              Sačuvaj izmjene
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
export default EntryForm;
