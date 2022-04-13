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
            <input type="text" placeholder='Card number' />
            <p id="no"></p>
            <input type="text" placeholder='Card Holder name' />
            <p id="exp-date"><span>Expiry Date</span>: 07/22</p>
            </div>
            <div id="mastercard"></div>
        </div>
    </div>
  )
}

export default Card;