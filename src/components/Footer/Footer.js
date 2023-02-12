import './Footer.css'
import Rectangle from '../../assets/Rectangle 85.png';
const Footer = () => {
  return (
    <div className='footer_container'>
        <div className="content">
            <div className="pic_container">
           <img src={Rectangle} alt="" />
            </div>
            <div className="description">
           <h1>Dealerz.</h1>
           <h5>Privacy Policy</h5>
           <h5>Terms and Condition</h5>
            </div>
            <div className="icons_container">

            </div>
        </div>
        <div className="bottom">
            <h5>@2020 TanahAir Studio. All rights reserved.</h5>
        </div>

    </div>
  )
}

export default Footer