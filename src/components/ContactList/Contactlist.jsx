import { ContactItem } from "./ContactItem/ContactItem"
import css from './ContactList.module.css';
import theme from './ContactItem/ContactItem.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "redux/operations";
import { Loader } from "components/Loader/Loader";
import { isLoading } from "redux/userSlice";
  
export const ContactList = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.addContact.items);
  const filterContacts = useSelector(state => state.addContact.filter);
  const filteredList = data.filter(contact => contact.name.toLowerCase().includes(filterContacts.toLowerCase()));
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div>
    {loading ? (<Loader/>):(
        <ol className={css.contactList}>
            {filteredList.length !== 0 ? (
              filteredList.map(dataItem => {
              return (
              <ContactItem
                  key={dataItem.id}
                  id={dataItem.id}
                  name={dataItem.name}
                  number={dataItem.phone}  
              />
              )}))
              : (<li className={theme.item}>There is no one contact</li>)}
        </ol>)}
    </div>
  );
};


