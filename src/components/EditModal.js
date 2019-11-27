import React from 'react'
import ReactDOM from 'react-dom';
import PatientForm from './PatientForm';
import "../styles/EditModal.css";
const EditModal = (props) => {
    const {
        open, 
        onClose,
        uuid, 
        fname, 
        lname,
        phoneNumber,
        dob,
        email,
        onSubmitEdit
    } = props;
    
    const PatientFormProps = {
        uuid, 
        fnameDefault: fname, 
        lnameDefault: lname,
        phoneNumberDefault: phoneNumber,
        dobDefault: dob,
        emailDefault: email,
        submitHandler: onSubmitEdit
    }
    return (
        <>
        {open 
            ? ReactDOM.createPortal(
                <div className = "EditModal" style = {{top: window.innerHeight/2, left: window.innerWidth/2, marginTop: '-250px', marginLeft: '-250px'}}>
                    <PatientForm
                        {...PatientFormProps}
                    ></PatientForm>
                    <button onClick = {onClose}>X</button>
                </div>,
                document.body)
            : null}
        </>
    )
}

export default EditModal
