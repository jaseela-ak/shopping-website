import './Itemcard.css'
import img from '../../assets/baby.png'
import {BsArrowRight} from 'react-icons/bs'
const Itemcard = (props) => {
  return (
    <div className="item_lists_card_container">
        
<img className="image_container" src={img} alt="productpic" />
        
           
            <div className="cardbody">
            
                {/* {data.productData.map((item,index)=>{
                    return(
                        
                    )

                })} */}
                <h5>{props.tittle}</h5>
                <h4>{props.description}</h4>
                <span className='arrow-button'>
                    <BsArrowRight/>
                </span>
            </div>

           </div>
          
  )
}

export default Itemcard