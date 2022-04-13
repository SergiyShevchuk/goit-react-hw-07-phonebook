import React from "react";
import PropTypes from "prop-types";
import ContactListItem from "components/ContactListItem";
import s from './ContactList.module.css'

function ContactList({ contacts, onDeleteContact }) {
    return(
        <ul className={s.list}>
            {contacts.map(({ id, name, number }) => (
                <li className={s.contact} key={id}>
                    <ContactListItem
                    id={id}
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
                    />
                </li>
            ))}
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
  ),
    onDeleteContact: PropTypes.func,
};

export default ContactList;
