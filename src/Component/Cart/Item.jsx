import { useState } from "react";

import { addItem,removeItem } from "../../ulits/cartSlice";
import { MdDeleteForever } from "react-icons/md";
import {  useDispatch} from "react-redux";


const Item=(props)=>{
    const {id,description,img,price,quantity}=props.resName; // console.log(props.resName);

   const [Quantity,setQuantity]=useState(quantity);
   const dispatch = useDispatch();

   const handleIncrement = () => {
    setQuantity(Quantity + 1);
    dispatch(addItem({ id, description, img, price, quantity: Quantity + 1 }));
};
  const handleDecrement = () => {
    if (Quantity > 0) {
      setQuantity(Quantity - 1);
      dispatch(addItem({ id, description, img, price, quantity: Quantity - 1 }));
      }
  };
    return(<div className="cart-product">
        <img src={img} alt='cart-img' className="cart-proudct-img"/>
       <p className="cart-product-name">{description}</p>
        <p className="cart-product-prize">Rs:{price}</p>
        <div className="cart-quantity">
            <button onClick={handleDecrement}>-</button>
            <div className="value">{Quantity}</div>
            <button onClick={handleIncrement}>+</button>
        </div>

        <p className="cart-subtotal">Rs:{Quantity*price}</p>
        <MdDeleteForever className="delete-icon" onClick={() => dispatch(removeItem(props.resName))}/>
       

    </div>)
}

export default Item;