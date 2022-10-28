import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/userSlice';

export const ContactItem = ({ name, number, id }) => {

  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <span>{name}:</span>
      <span className={css.number}>{number}</span>
      <button className={css.butonDelete} type='button' onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};


