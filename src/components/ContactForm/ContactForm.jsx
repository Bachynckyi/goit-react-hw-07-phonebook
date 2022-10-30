import css from './ContactForm.module.css';
import { useState } from 'react';
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from 'react-redux';
import * as operations from 'redux/operations';

export const ContactForm = () => {

    const dispath = useDispatch();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const contacts = useSelector(state => state.addContact.items);
    const checkName = contacts.map(contact => contact.name);

    const handleChange = event => {
        const {name, value} = event.currentTarget;
        switch(name){
            case 'name': setName(value);
              break;
            case 'phone': setPhone(value);
              break;
            default:
              return;
        };
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        const checkingName = checkName.some(contact => contact.toLowerCase() === name.toLowerCase());
        if (checkingName) {
            return alert(`${name} is already in contacts`);
        };      
        const newState = { id: nanoid(), name, phone};
        dispath(operations.addContact(newState));
        reset();
    };

    const reset = () => {
        setName("");
        setPhone("");
    }

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <div>
                <label className={css.label}>Name
                    <input
                        value={name}
                        onChange={handleChange}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder='Please enter name'
                        className={css.addInput}
                    />
                </label>
            </div>
            <div>
                <label className={css.label}>Number
                    <input
                        value={phone}
                        onChange={handleChange}
                        type="tel"
                        name="phone"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder='Please enter number'
                        className={css.addInput}
                        />
                </label>
            </div>
            <button type='submit' className={css.button_submit}>Add Contact</button>
        </form>
    )
};


