import './Hero.css'
import MaskGroup from '../../assets/Mask Group.png'
import Button from '../Button/Button'
const Hero = () => {
  return (
    <div className='hero_container'>
        {/* <div className="hero_image_container"> */}
        <img className='hero_image' src={MaskGroup}  alt="hero-background-image" />
        {/* </div> */}
      <div className='hero_content_container'>
          <h2>Your Premium Sound, Unplugged!</h2>
          <h5 className='content_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h5>
{/* <button className='hero_button'>Find out More</button> */}
<Button/>
      </div>
    </div>
  )
}

export default Hero