import React, {useState} from 'react'
import PatientForm from './PatientForm';
import PatientList from './PatientList';
import uuidv4 from 'uuid/v4';
import "../styles/PatientDashboard.css";

const PatientDashboard = () => {
    // array of objects, each object is one patient
    const [patients, setPatients] = useState([]);
    const onSubmit = (data) => {
        console.log('in onsubmithandler uuid', data.uuid);
        if (data.uuid) return onSubmitEdit(data, data.uuid);
        else {
            const newPatient = {...data, uuid: uuidv4()}
            setPatients(prev => [...prev, newPatient]);
        }
    }
    const onSubmitEdit = (data, uuid) => {
        console.log({data, uuid})
        setPatients(prev=> {
            console.log(prev);
            const prevIndex = prev.findIndex(patient => patient.uuid === uuid);
            console.log(prevIndex);
            const edit = {uuid: prev[prevIndex].uuid, ...data}
            const newPatients = prev.slice(0, prevIndex).concat(prev.slice(prevIndex+1));
            newPatients.push(edit);
            return newPatients;
        })
    }
    const removePatient = (uuid) => {
        setPatients(prev => {
            const index = prev.findIndex(patient => patient.uuid = uuid);
            return prev.slice(0, index).concat(prev.slice(index+1));
        })
    }
    return (
        <div className="PatientDashboard">
            <PatientForm
                submitHandler = {onSubmit}
            ></PatientForm>
            <PatientList
                patients = {patients}
                onSubmitEdit = {onSubmit}
                removePatient = {removePatient}
            ></PatientList>
        </div>

    )
}

export default PatientDashboard
