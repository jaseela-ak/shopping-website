import Itemcard from '../Itemcard/Itemcard';
import './Achievement.css';
import data from '../../assets/data';

const Achievement = () => {
  return (
 
<div className="achievement_container">
    <div className="header_conatiner">
<h3>Top Items</h3>
    </div>
    <div className="description_container">
<h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h5>
    </div>
<div className="card_container">
{data.productData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                tittle={item.tittle}
                description={item.description}
              />
            );
          })}
</div>

</div>
  )
}

export default Achievement