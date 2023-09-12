import React, { formik,useState } from 'react';
import '../Style/SignUpForm.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { observer } from 'mobx-react';

import signupStore from '../Stores/SignupStore';

const SignupForm = observer(() => {
  const store = signupStore;


  
  async function handleSubmit(e) {
    e.preventDefault();
    // console.log( SignupForm.formData)
    await signupStore.submitFormData();
  }
  const formik = useFormik({
    initialValues: store.getFormData(),
    
    
    
  });
  
  console.log(formik.values)
 
  return (
    <>
    
    <div id="Signup-form-container">
    
      <form  onSubmit={handleSubmit} id="Signup-form">
      <h1>General Information</h1>
        <div className="input-row">
          <div className="input-field-container">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              className="input-field"
            />
          </div>
          <div className="input-field-container">
            <label htmlFor="email">email</label>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.Email}
              className="input-field"
            />
          </div>
        </div>
        <div className="input-row">
          <div className="input-field-container">
            <label htmlFor="id">id</label>
            <input
              id="id"
              name="id"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.id}
              className="input-field"
            />
          </div>
          <div className="input-field-container">
            <label htmlFor="gender">gender</label>
            <input
              id="gender"
              name="gender"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.Gender}
              className="input-field"
            />
          </div>
        </div>
       
       
        <button  type="submit" id="submit-button" >
           Save All
          </button>
      </form>
      
    </div>
    </>
  );
});

export default SignupForm;
