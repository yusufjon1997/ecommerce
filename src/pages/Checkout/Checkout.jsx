import React , { useState} from 'react';
import Orders from './Orders';
import ContactForm from './ContactForm';
import DeliveryForm from './DeliveryForm';
import PaymentFrom from './PaymentForm';

import './Checkout.scss';



function Checkout() {

  const [page , setPage] = useState(0);
  

  const displayForm = () => {
    if(page === 0) {
      return <ContactForm />
    } else if(page === 1) {
      return <DeliveryForm />
    } else {
      return <PaymentFrom />
    }
  }

  const nextForm = () => {
    setPage( prevPage => prevPage + 1);
  }

  const prevForm = () => {
    setPage(prevPage => prevPage - 1)
  }


  return (
    <div className='checkout'>
      <div className="checkout-header">
          <h3>Checkout</h3>
      </div>
      <div className="form-headers">
        <h5 className={page >= 0 ? 'demo' : null}>Contact Info</h5>
        <h5 className={page >= 1 ? 'demo' : null}>Delivery</h5>
        <h5 className={page >= 2 ? 'demo' : null}>Payment</h5>
      </div>
      <div className='checkout-container'>
        <div className='forms'>
          { displayForm()}
          <div className="buttons">
            <button className='btn' hidden={page == 0} onClick={prevForm}>Prev</button>
            <button className='btn' hidden={page == 2} onClick={nextForm} >Next</button>
            <button className='btn' hidden={page < 2 } >Submit</button>
          </div>
        </div>
        <Orders />
      </div>
    </div>
  )
}

export default Checkout;
