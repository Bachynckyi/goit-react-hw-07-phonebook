import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import * as operations from 'redux/operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.item}>
      <div>
        <span className={css.id}>{id}.</span>
        <b><span>{name}:</span></b>
        <span className={css.number}>{number}</span>
      </div>
      <button className={css.butonDelete} type='button' onClick={() => dispatch(operations.deleteContact(id))}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};


