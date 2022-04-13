import React from 'react'
import './Form.scss';

function DeliveryForm() {
  return (
    <div className="delivery-form">
       <div className="form-container">
            <div className='form-input'>
                <input type="text" />
                <label className='label'>Country</label>
            </div>
            <div className="form-input">
                <input type="text" /> <br />
                <label className='label'>Region / City</label>
            </div>
        </div>
        <div className="form-container">
            <div className="form-input">
                <input type="email" /> <br />
                <label className='label'>Address</label>
            </div>
            <div className="form-input">
                <input type="text" />
                <label className='label'>Post Code</label>
            </div>
        </div>
    </div>
  )
}

export default DeliveryForm