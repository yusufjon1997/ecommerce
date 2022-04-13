import React from 'react'
import Card from './Card';
import './PaymentForm.scss';


function PaymentFrom() {

  return (
    <div className='payment-form'>
        
        <Card />

        {/* <div className="form-container">
            <div className='form-input'>
                <input type="text" />
                <label className='label'>Card number</label>
            </div>
        </div>
        <div className="form-container">
            <div className='form-input'>
                <input type="text" />
                <label className='label'>Card name</label>
            </div>
        </div>
        <div className="form-container">
            <div className='form-input'>
                <input type="text" />
                <label className='label'>Expiration Date</label>
            </div>
        </div> */}
        {/* <label >Card Name</label>
        <input type="text" /><br />
        <label>Expiration Date</label>
        <input type="text" />
        <input type="text" /><br />
        <label >CVV</label>
        <input type="text" /> */}
    </div>
  )
}

export default PaymentFrom