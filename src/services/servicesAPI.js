import axios from "axios";

axios.defaults.baseURL = "https://635d0435fc2595be2650f072.mockapi.io";

export const fetchContacts = async() => {
    const response = await axios.get(`/contacts/contacts`);
    return response.data;
};