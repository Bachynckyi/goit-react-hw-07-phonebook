import axios from "axios";

axios.defaults.baseURL = "https://635d0435fc2595be2650f072.mockapi.io";

export const fetchContacts = async() => {
    const response = await axios.get("/contacts/contacts");
    return response.data;
};

export const addContact = async newState => {
    const response = await axios.post("contacts/contacts", newState);
    return response.data;
  };

  export const deleteContact = async id => {
    const response = await axios.delete(`contacts/contacts/${id}`);
    return response.data;
  };
