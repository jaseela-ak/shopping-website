import './Navbar.css';
import {Link,NavLink} from 'react-router-dom'
import Dealerz from '../../assets/Dealerz..png'
import {FiPhone} from 'react-icons/fi'
import {FaShippingFast} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'

const Navbar = () => {
  return (
    <nav>
        <div className='nav_container'>
            
       <Link to='/' className='logo'>
       <img src={Dealerz} alt="Nav-logo" />
       </Link>
        </div>
       <div className='nav_container_left'>
            <ul className='nav_links'>
                <li><FiPhone/>call center</li>
                <li><FaShippingFast/>Shipping & Returns</li>
            </ul>
            
        {/* <button className='nav-toggle-button'>
            <GoThreeBars/>
        </button> */}
       
        </div>
    </nav>
    
  )
}

export default Navbar