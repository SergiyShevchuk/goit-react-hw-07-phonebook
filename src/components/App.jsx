import PropTypes from 'prop-types';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.shape),
};

export default App;
