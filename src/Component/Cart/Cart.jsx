import { useState,useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { clearCart } from "../../ulits/cartSlice";
import Item from "./Item";
import EmptyCart from "../EmptyCart/EmptyCart";
import StripeCheckout from "../StripeCheckout/StripeCheckout.jsx";
import './Cart.css';


const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);
    // console.log(cartItems);

    const [cartSubtotal, setCartSubtotal] = useState(0);

  useEffect(() => {// Calculate the cart subtotal (sum of all item subtotals)
    const total = cartItems.reduce((total, item) => total + item.quantity * item.price,0);
    setCartSubtotal(total);
  }, [cartItems]);
  const dispatch = useDispatch();

    
    return cartItems.length===0 ?(<EmptyCart/>):
    (<section className="cart-page">
        <h1 className="cart-heading">SHOPPING CART</h1>
        <div className="cart-container">
           
           <div className="left-cart">
            <div className="heading">
            <h1>product</h1>
            <h1 className="heading-price">price</h1>
            <h1 className="heading-quantity">Quantity</h1>
            <h1 className="subtotal-heading">SubTotal Price</h1>
            </div>
            {cartItems.map((res)=>(<Item resName={res} key={res.id}/>))}
            <button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear Cart</button>
           </div>
           
           <div className="right-cart">
            <h1>Cart Totals</h1>
             <div className="right-subtotal-detail">
                <p className="right-subtotal">Sub total</p>
                <p>Rs:{cartSubtotal}</p>
             </div>
             <div className="right-total-detail">
                <p className="right-total">Total</p>
                <p>Rs:{cartSubtotal}</p>
             </div>
            {/* <button className="checkout"> Proceed to CheckOut</button> */}
            <StripeCheckout cartItems={cartItems} cartSubtotal={cartSubtotal} />

           </div>
           
        </div>
   
    </section>);
};
export default Cart; 