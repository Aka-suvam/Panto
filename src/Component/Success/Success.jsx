import Paymentsuccess from "../../assets/images/PaymentSucess.png";
import './Success.css';

import { NavLink } from "react-router-dom";

const Success = () => {
    return (
      <div className="success-section">
         <div className="sucessimg">
          <img src={Paymentsuccess} alt='sucess-img'/>
        </div>
        <p className="sucess-font-one"> Your Payment is Successfull</p>
        <p className="sucess-font-two">Thank you for your purchase!.Your Order is on the way to you.</p>
        <p><NavLink  to="/" className="success-links" onClick={()=>{ window.scrollTo(0, 0)}} > Back to Home</NavLink></p>

      </div>
    );
  };
  
  export default Success;
  