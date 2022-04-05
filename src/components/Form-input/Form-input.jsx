import React from 'react'
import './FormInput.scss';

function FormInput({ label , inputOptions}) {
    
  return (
    <div className="form-group">
      <input className="form-input" {...inputOptions} />  
      <label className={`${inputOptions.value.length ? 'shrink' : ""} form-input-label`} >{label}</label>
    </div>
  )
}

export default FormInput