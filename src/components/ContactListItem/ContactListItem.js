import React from "react";
import PropTypes from "prop-types";
import s from './ContactListItem.module.css'

function ContactListItem({id, name, number, onDeleteContact}) {
    return (
        <div className={s.item}>
            {name} : {number}
            <button className={s.button} onClick={() => onDeleteContact(id)}>
                Delete
            </button>
        </div>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func,
};

export default ContactListItem;
