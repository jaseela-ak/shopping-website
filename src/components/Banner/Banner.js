import "./Banner.css";
import { FiHeart } from "react-icons/fi";
// import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md";
import links from '../../assets/data'
import Search from "../Search/Search";
import { NavLink } from "react-router-dom";
const Banner = () => {
  return (
    <div className="banner_container">
      <div className="banner_left_container">
        <ul className="banner_links_left">
          {/* {links.map(({name,path},index)=>{
return(
  <li>
    <NavLink to={path}>{name}</NavLink>
  </li>
)
          })} */}
          <li>Shop</li>
          <li>Promo</li>
          <li>About</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="banner_center_container">
        <Search/>
      </div>
      <div className="banner_right_container">
        <ul className="banner_links_right">
        <li><FiHeart /></li> 
        <li><BsCart /></li>
        <li><MdPersonOutline /></li>
        <li><MdOutlineNotificationsNone /></li>
        </ul>
       
      </div>
    </div>
  );
};

export default Banner;
