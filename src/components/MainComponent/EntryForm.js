import { React, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import styles from './EntryForm.module.css';

const EntryForm = (props) => {
  return (
    <div className={styles.Container}>
      {props.useEditForm ? (
        <form onSubmit={props.updateContact} className={styles.EntryForm}>
          <button type="button" className={styles.UpperButton}>
            X
          </button>
          <h5 className={styles.Header}>Dodaj/izmjeni kontakt</h5>

          {/* {props.editcontact.id ? <div>da</div> : <div>ne</div>} */}
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
          <button type="button" className={styles.UpperButton}>
            X
          </button>
          <h5 className={styles.Header}>Dodaj/izmjeni kontakt</h5>

          {/* {props.editcontact.id ? <div>da</div> : <div>ne</div>} */}
          <div id={props.editcontact.id}>
            <input
              type="text"
              value={props.editcontact.fname}
              name="fname"
              placeholder="Ime"
              className={styles.InputText}
              onChange={(e) => {
                props.handleAddFormChangeFromMain(e);
              }}
              //onChange={(e)=>props.setUpdateFromMain(e.target.value,props.editcontact.id)}
            />
            <input
              type="text"
              name="lname"
              value={props.editcontact.lname}
              placeholder="Prezime"
              className={styles.InputText}
              onChange={(e) => {
                props.handleAddFormChangeFromMain(e);
              }}
            />
            <input
              type="email"
              name="email"
              value={props.editcontact.email}
              placeholder="Email"
              className={styles.InputText}
              onChange={(e) => {
                props.handleAddFormChangeFromMain(e);
              }}
            />

            <input
              type="text"
              name="phone"
              value={props.editcontact.phone}
              placeholder="Broj Telefona"
              className={styles.InputText}
              onChange={(e) => {
                props.handleAddFormChangeFromMain(e);
              }}
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
