const EditRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    placeholder="Enter your name"
                    name="fullname"
                    value={editFormData.fullname}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    placeholder="Enter your Phone Number"
                    name="phoneNumber"
                    value={editFormData.phoneNumber}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                />
            </td>
            <td>
                <button type="submit">Save</button>
                <button type="submit" onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    )
}
export default EditRow;