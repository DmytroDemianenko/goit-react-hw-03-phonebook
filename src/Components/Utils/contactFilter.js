function filterContacts(contacts, filter) {
  const normalizedFilter = filter.toLowerCase().trim();
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
}
export default filterContacts;
