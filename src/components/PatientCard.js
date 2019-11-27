import React, {useState} from 'react'
import EditModal from './EditModal';
const PatientCard = (props) => {
    const {
        uuid, 
        fname, 
        lname,
        phoneNumber,
        dob,
        email,
        removePatient,
        onSubmitEdit
    } = props;
    const [open, setOpen] = useState(false);
    const closeHandler = () => {
        setOpen(prev => !prev);
    }
    return (
        <div className="PatientCard">
            <h3>{`${fname} ${lname}`}</h3>
            <p>{phoneNumber}</p>
            <p>{dob}</p>
            <p>{email}</p>
            <button onClick = {removePatient}>Delete</button>
            <button onClick = {closeHandler}>Edit</button>
            <EditModal 
            open = {open} 
            onClose = {closeHandler}
            {...props}
            ></EditModal>
        </div>
    )
}

export default PatientCard
