import Upimage from "../../assets/images/up-img.png";
import Downimg from "../../assets/images/down-img.png";
import Matimg from "../../assets/images/mat-img.jpg";
import { Link} from "react-router-dom";
import './Material.css';

const Material =()=>{
    function Windowtop(){
        window.scrollTo(0, 0)
      }
    return (<section className="material">
   <div className="material-left">
    <p className="material-heading" id='material'>Materials</p>
    <p className="exp-title" id="material-title">Very Serious Materials For Making Furniture</p>
    <p className="material_para">Because panto was very serious about designing furniture for our environment,using a very expensive and famous capital but at a relatively low price.</p>
    
    <p className="more-info" id="material_more"><Link to="/shop" className="text-link" onClick={Windowtop}>More info &#8674;</Link></p>
   </div>
   <div className="material-right">
    <div className="one">
        <img src={Upimage}  alt="chair-img"/>
    </div>
    <div className="material_two">
        <div className="two" >
            <img src={Downimg} alt="sofa-img"/>
        </div>
        <div className="three">
            <img src={Matimg}  alt="chair2-img"/>
        </div>
    </div>
   </div>
    </section>);
};

export default Material;