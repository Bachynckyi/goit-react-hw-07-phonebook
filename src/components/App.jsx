import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/Contactlist'; 
import { Filter } from "./Filter/Filter";

export const App = () => {
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
            <ContactList/>
          </div>
        </div>
        )
};




