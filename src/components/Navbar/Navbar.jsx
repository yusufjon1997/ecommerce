import React , { useContext} from 'react'
import { UserContext } from '../../contexts/user-context';
import { signOutUser } from '../../utils/firebase/Firebase';
import {FaRegHeart } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Navbar.style.scss';


function Navbar() {

  const { currentUser } = useContext(UserContext);


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
                  <Link to='/' >Products</Link>
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
          <div className="icon"> <BsCart2 /> </div>
            {
             currentUser ? (<div className="icon" onClick={signOutUser}> Sign Out</div>) 
            :  (<div className="icon"><Link to="/auth">Sign in</Link> </div>)
            }
        </div>
    </div>
  )
}

export default Navbar