import React from 'react'
import './Card.scss';

function Card() {
  return (
    <div class="container">
        <div class="front-card">
            <h3 id="main-title">Shopping <span>site</span></h3>
            <i id="globe" class="fa fa-globe"></i>
            <div id="chip"></div>
            <div class="card-info">
            <input className='card-number' type="text" placeholder='Card number' />
            <input className='card-name' type="text" placeholder='Card Holder name' />
            <div className="card-footer">
                <div id="exp-date"><span>Expiry Date</span>
                    <input className='expiry' type="text" /> /
                    <input className='expiry' type="text" />
                </div>
                <div className="cvv">
                    <span>CVV</span>
                    <input type="text" />
                </div>
            </div>
            </div>
            <div id="mastercard"></div>
        </div>
    </div>
  )
}

export default Card;