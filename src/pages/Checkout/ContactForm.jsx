import React from 'react'
import './Form.scss';
import './ContactForm.scss';

function ContactForm() {
  return (
    <div className='contact-form'>
        <div className="form-container">
            <div className='form-input'>
                <input type="text" />
                <label className='label'>First Name</label>
            </div>
            <div className="form-input">
                <input type="text" /> <br />
                <label className='label'> Last Name</label>
            </div>
        </div>
        <div className="form-container">
            <div className="form-input">
                <input type="email" /> <br />
                <label className='label'> Email</label>
            </div>
            <div className="form-input">
                <input type="text" />
                <label className='label'> Phone number</label>
            </div>
        </div>
   
    </div>
  )
}

export default ContactForm