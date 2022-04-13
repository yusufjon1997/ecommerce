import React  from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCurrentUser } from '../../store/user/userSelector';
import { selectTotalCartItems } from '../../store/cart/cartSelector';


import { signOutUser } from '../../utils/firebase/Firebase';
import {FaRegHeart } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Navbar.style.scss';
import { CartContext } from '../../contexts/cartContext';


function Navbar() {

const navigate = useNavigate();

const totalCartItems = useSelector(selectTotalCartItems);
const currentUser =  useSelector(selectCurrentUser);

  


  return (
    <div className='header'>
        <div className="logo">
          <h2>Shopping site</h2>
        </div>
        <div className="menu-container">
          <ul className='menu'>
              <li className='menu-item'>
                  <Link to='/' >Home</Link>
              </li>
              <li className='menu-item'>
                  <Link to='/shop' >Products</Link>
              </li>
              <li className='menu-item'>
                  <Link to='/about' >About</Link>
              </li>
              <li className='menu-item'>
                  <Link to='/contact' >Contact</Link>
              </li>
          </ul>
        </div>
        <div className="icons">
          <div className="icon"> <FaRegHeart /> </div>
          <div className="icon" onClick={()=> navigate('/cart')}> <BsCart2 /> { totalCartItems } </div>
            {
             currentUser ? (<div className="icon" onClick={signOutUser}> Sign Out</div>) 
            :  (<div className="icon"><Link to="/auth">Sign in</Link> </div>)
            }
        </div>
    </div>
  )
}

export default Navbar