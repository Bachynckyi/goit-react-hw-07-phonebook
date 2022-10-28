import { ContactItem } from "./ContactItem/ContactItem"
import css from './ContactList.module.css';
import { useSelector } from "react-redux";
  
export const ContactList = () => {

  const data = useSelector(state => state.addContact.items);
  const filterContacts = useSelector(state => state.addContact.filter);
  const filteredList = data.filter(contact => contact.name.toLowerCase().includes(filterContacts.toLowerCase()));

  return (
    <ul className={css.contactList}>
        {filteredList.length !== 0 ? (
          filteredList.map(dataItem => {
          return (
          <ContactItem
              key={dataItem.id}
              id={dataItem.id}
              name={dataItem.name}
              number={dataItem.number}  
          />
          )}))
          : (<li>There is no one contact</li>)}
    </ul>
  );
};


