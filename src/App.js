import { useState } from 'react';
import './App.css';
import data from "./mock-data.json";
import { nanoid } from 'nanoid';
import ReadonlyRow from './components/ReadonlyRow';
import EditRow from './components/EditRow';

function App() {

  const [contacts, setcontacts] = useState(data)

  const [addformdata, setaddformdata] = useState({
    fullname: '',
    address: "",
    phoneNumber: '',
    email: ''
  })

  const [editFormData, setEditFormData] = useState({
    fullname: '',
    address: "",
    phoneNumber: '',
    email: ''
  })
  const [editContactId, setEditContactId] = useState(null)


  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value;

    const newFormData = { ...addformdata }
    newFormData[fieldName] = fieldValue;

    setaddformdata(newFormData);
  }

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullname: addformdata.fullname,
      address: addformdata.address,
      phoneNumber: addformdata.phoneNumber,
      email: addformdata.email
    };
    const newContacts = [...contacts, newContact]
    setcontacts(newContacts);
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullname: editFormData.fullname,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    }
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact;

    setcontacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValue = {
      fullname: contact.fullname,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email
    }

    setEditFormData(formValue);
  }

  const handleCancelClick = () => {
    setEditContactId(null)
  }


  const handleDeleteClick = (contactID) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactID);
    newContacts.splice(index, 1)
    setcontacts(newContacts);
  }

  return (
    <>
      <div className='app-container'>
        <form onSubmit={handleEditFormSubmit}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            
              {contacts.map((contact) => (
                <>
                  {editContactId === contact.id ? (
                    <EditRow
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) :
                    (<ReadonlyRow contact={contact}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                    )}
                </>
              ))}

            </tbody>
          </table>
        </form>

        <h2>Add New Contact</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input type="text"
            placeholder="Enter Your Name"
            name='fullname'
            onChange={handleAddFormChange}
          />
          <input type="text"
            placeholder="Enter Your Address"
            name='address'
            onChange={handleAddFormChange}

          />
          <input type="text"
            placeholder="Enter Your Phone Number"
            name='phoneNumber'
            onChange={handleAddFormChange}

          />
          <input type="email"
            placeholder="Enter Your Email"
            name='email'
            onChange={handleAddFormChange}

          />

          <button type='submit'>Add</button>
        </form>
      </div>
    </>
  );
}

export default App;
