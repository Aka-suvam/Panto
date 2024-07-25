import { NavLink } from "react-router-dom";

import Fail from '../../assets/images/fail.png';


import './FailPay.css';

const FailPay = () => {
    return (
      <div className="fail-section">
        <div className='fail-img'>
          <img src={Fail} alt='fail-img'/>
        </div>
        <h2 className="fail-font-one">Your payment failed.</h2>
        <p className="fail-font-two">Please try again...</p>
        <p><NavLink  to="/" className="fail-links" onClick={()=>{ window.scrollTo(0, 0)}} > Back to Home</NavLink></p>

      </div>
    );
  };
  
  export default FailPay;
  