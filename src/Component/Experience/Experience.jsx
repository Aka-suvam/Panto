import { Link } from "react-router-dom";
import Expimg from "../../assets/images/exp-img.jpg";
import './Experience.css';

const Experience=()=>{
   function Windowtop(){
      window.scrollTo(0, 0)
    }
    return (<section className="experience">
     <div className="exp_img">
        <img src={Expimg} alt="exp_img"/>
        </div>
     <div className="exp_content">
        <p className="exp">Experiences</p>
        <p className="exp-title">We provide you the Best Experience</p>
        <p className="exp-para">You don’t have to worry about the result because all of these Products are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials.
         
        </p>
        
        <p className="more-info"><Link to="/shop" className="text-link" onClick={Windowtop}>More info &#8674;</Link> </p>
     </div>
    </section>);
};

export default Experience ;