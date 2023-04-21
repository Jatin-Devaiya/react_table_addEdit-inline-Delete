const ReadonlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{contact.fullname}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
                <button type="button" onClick={(event) => handleEditClick(event, contact)}>Edit</button>
                <button type="button" onClick={() => handleDeleteClick(contact.id)}>Delete</button>
            </td>
        </tr>
    )
}
export default ReadonlyRow;