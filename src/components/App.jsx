import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/Contactlist'; 
import { Filter } from "./Filter/Filter";
import { Loader } from "./Loader/Loader";
import { isLoading } from "redux/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts } from 'redux/operations';

export const App = () => {
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <h1 style={{marginTop: '20px', marginBottom: '20px'}}>Phonebook</h1>
                <ContactForm/>
                <h2 style={{marginTop: '20px', marginBottom: '20px'}}>Contacts</h2>
                <Filter/>
                {loading ? <Loader/> : "No loading"}
                <ContactList/>
          </div>
        </div>
        )
};




