import React from 'react';
import styles from './ContactItem.module.css';
import { useDeleteContactMutation } from '../../redux/slice';

function ContactItem({ contact }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <li key={contact.name} className={styles.item}>
      <p className={styles.contact}>
        {contact.name}: {contact.phone}
      </p>
      <button
        disabled={isLoading}
        onClick={() => deleteContact(contact.id)}
        className={styles.button}
      >
        Delete
      </button>
    </li>
  );
}

export default ContactItem;
