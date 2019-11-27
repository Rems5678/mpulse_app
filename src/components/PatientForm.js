import React from 'react';
import useForm from 'react-hook-form';
import "../styles/PatientForm.css";

const PatientForm = (props) => {
    const {
        uuid,
        submitHandler, 
        fnameDefault,
        lnameDefault,
        phoneNumberDefault,
        dobDefault,
        emailDefault
    } = props;
    const {register, errors, handleSubmit} = useForm();
    return (
        <form className = "PatientForm" onSubmit = {handleSubmit(submitHandler)}>
            <div>
                <label 
                htmlFor="fname">First Name*</label>
                <input 
                    type="text"
                    name = "fname"
                    placeholder = "Spongebob"
                    defaultValue = {fnameDefault}
                    ref = {register({required: true})}
                />
                {errors.fname && <p className='error'>Please provide your first name</p>}
            </div>
            <div>
                <label htmlFor="lname">
                    Last Name*
                </label>
                <input 
                    type="text"
                    name="lname"
                    placeholder = "Squarepants"
                    defaultValue = {lnameDefault}
                    ref={register({required: true})}
                />
                {errors.lname && <p className='error'>Please provide your last name</p>}
            </div>
            <div>
                <label htmlFor="phoneNumber">
                    Phone Number*
                </label>
                <input 
                    type="text"
                    name="phoneNumber"
                    placeholder = "(310)123-456"
                    defaultValue = {phoneNumberDefault}
                    ref = {register({
                        required: true, 
                        maxLength: 11, 
                        minLength: 10})
                        }
                />
                {errors.phoneNumber && <p className='error'>Please enter a valid phoneNumber</p>}
                </div>
            <div>
                <label htmlFor="dob">Date of Birth</label>
                <input 
                    type="date"
                    name="dob"
                    defaultValue = {dobDefault}
                    ref = {register}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    name="email"
                    placeholder = 'spongeGriller01@bikinibottom.com'
                    defaultValue = {emailDefault}
                    ref = {register({
                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi
                    })}
                />
                {errors.email && <p className='error'>Please enter a valid email</p>}
                {uuid && <input ref = {register} name = "uuid" defaultValue = {uuid} disabled hidden />}
            </div>
            <button type = "submit">Submit</button>
        </form>
    )
}

export default PatientForm
