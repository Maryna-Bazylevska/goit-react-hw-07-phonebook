import { getVisibleContacts } from "./redux/phonebook/phonebook-selectors";
import { fetchContacts } from "./redux/phonebook/phonebook-operations";
import { Wrapper } from "./App.styled";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

export default function App() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <Wrapper>
      <Toaster />

      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      <Filter />
      {contacts.length > 0 ? (
        <ContactList contacts={contacts} />
      ) : (
        <p>Your phonebook is empty.</p>
      )}
    </Wrapper>
  );
}
