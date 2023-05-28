import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.li}>
      <p className={css.p}>
        {name}: {number}
      </p>
      <button className={css.btn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
