import React from 'react'
import PatientCard from './PatientCard';
import "../styles/PatientList.css";

const PatientList = ({onSubmitEdit, patients, removePatient}) => {
    return (
        <div className="PatientList">
            {patients.map(patient => 
                <PatientCard
                key = {patient.uuid}
                {...patient}
                removePatient = {removePatient}
                onSubmitEdit = {onSubmitEdit}
                />
            )}
        </div>
    )
}

export default PatientList
