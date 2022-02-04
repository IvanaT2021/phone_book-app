import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.About}>
      <h1 className={styles.Header}>O aplikaciji</h1>
      <div className={styles.Text}>
        <p>Aplikacija je kreirana pomoću React-a.</p>
        <p>Sastoji se od Početne strane, Dokumentacije i Kontakt forme</p>
        <p>
          Na Početnoj strani se nalazi:
          </p>
          <ul>
            <li>Dugme za Novi kontakt</li>
            <li>Tabela sa već postojećim kontaktima</li>
            <li>Forma za novi unos i izmjene</li>
          </ul>
          <p>Klikom na Novi kontak otvara se Forma za unos novih podataka</p>
          <p>
          Tabela sadrži polja za unos slijedećih podataka:Ime, Prezime, Email,
          Telefon i opcija za brisanje i editovanje podataka
        </p>
        <p>Klikom na opciju za editovanje otvara se Forma za editovanje podataka</p>
        <p>Klikom na opciju za brisanje brišemo podatke</p>
        <p>
          Forma je vidljiva samo kada se klikne da dugme Novi kontakt ili na
          dugme u koloni Izmjene koje se nalazi u tabeli
        </p>
        <p>Forma se sastoji od input polja za unos podataka o Kontaktu i dugmeta koje vrši submit forme</p>
      
      </div>
    </div>
  );
};
export default About;
