import axios from "axios";

axios.defaults.baseURL = "https://626a953f9e16d37855d6d918.mockapi.io/api/v1/";

export async function fetchContacts() {
  const { data } = await axios.get(`/contacts`);
  return data;
}

export async function deleteContact(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post(`/contacts`, contact);
  return data;
}
