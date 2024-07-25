import { useParams } from "react-router-dom";

import { items } from "../../ulits/MockData";
import { useState,useEffect } from "react";
import TrendingSlider from "../Trending/TrendingsSlider.jsx";
import { useDispatch } from "react-redux";
import { addItem } from "../../ulits/cartSlice";
import './Singleproduct.css';


const SingleProduct = () => {
    const { productId } = useParams();
    const product = items.find(item => item.id === parseInt(productId));
    const { img, otherImgs, description, specs, price, texture, weight, size,Material } = product;
  
    const [hoverImg,sethoverImg]=useState(img);
    
    //quantity
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
      setQuantity(quantity + 1); 
      
    };
    
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
        
      }
    };
    const dispatch=useDispatch();

   /* const handleAdditem =(product)=>{
     dispatch(addItem(product));
    }*/
    const handleAdditem = (product) => {
        const itemWithQuantity = {
          ...product,
          quantity,
        };
        dispatch(addItem(itemWithQuantity));
      };
      useEffect(() => {
        setQuantity(1); // Reset the quantity to 1
      }, [productId]); // Run this effect when the productId changes

return (
        <section className="singleprod">
           <div className="singleproduct">
            <div key={items.id} className="Single-product-img">
                  <div className="single-product-img1">
                    <img src={hoverImg} alt="products-img1"/>
                  </div>
                 <div className="otherimg">
                     <img src={img} alt="products-img1" onMouseOver={()=>{sethoverImg(img)}}/>
                     {otherImgs.map((imgg, index) => (
                            <img key={index} src={imgg} alt={`product-img${index + 2}`}  onMouseOver={()=>{sethoverImg(imgg)}}/>
                        ))}
                     
                 </div>
                </div>
                <div className="Single-product-detail">
                 <p className="desc">{description}</p>
                 <p className="spec">{specs}</p>
                 <div className="quantityprice">
                    <h3>Quantity</h3>
                    <button id="sub" onClick={handleDecrement}>-</button>
                    <div id="value">{quantity}</div>
                    <button id="added" onClick={handleIncrement}>+</button>
                    <p>Rs:{price*quantity}</p>
                 </div>
                 
                <button className="add" onClick={()=>handleAdditem(product)}>Add to cart</button>
               {/* <button className="buy">Buy now</button>   */}
               </div>
                </div>
                <div className="position">
                    {!texture?<h6>Material:<span>{Material}</span></h6> : <h6>Texture:<span>{texture}</span></h6>}
               
                <h6>Weight:<span>{weight}</span></h6>
                <h6>Size:<span>{size}</span></h6>
                </div>
                
                <TrendingSlider product={product} setHoverImg={sethoverImg} />

        </section>
    );
};

export default SingleProduct;
