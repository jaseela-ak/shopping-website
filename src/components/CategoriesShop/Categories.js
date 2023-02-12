import "./Categories.css";
import { BsArrowRight } from "react-icons/bs";
import data from "../../assets/data";
import Itemcard from "../Itemcard/Itemcard";
import Button from "../Button/Button";
const Categories = () => {
  console.log(data.productData);
  return (
    <section className="categories">
      <div className="categories_container">
        <div className="categories_content_text">
          <h3>Our Premium Collection</h3>
        </div>
        <div className="categories_lists">
          <ul className="categories_link">
            <li>All Products</li>
            <li>Coats & Jacket</li>
            <li>Dressed</li>
            <li>Playsuit</li>
            <li>Short</li>
            <li>Skirt</li>
            <li>T-Shirt</li>
          </ul>
        </div>
        <div className="product_lists_card_container">
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
        <div> 
        <Button />
        </div>
       
      </div>
    </section>
  );
};

export default Categories;
