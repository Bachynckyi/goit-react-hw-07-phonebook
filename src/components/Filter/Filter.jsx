import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/userSlice';


export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.addContact.filter);
    return (
      <div className={css.SearchBox}>
            <span className={css.SearchBox_label}>Find contacts by name</span>
            <input
              className={css.SearchBox_input}
              type="text"
              placeholder="Please enter name"
              value={filter}
              onChange={e => dispatch(filterContacts(e.currentTarget.value))}
            >
            </input>
      </div>
    );
  };
