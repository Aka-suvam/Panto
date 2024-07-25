
import Logo from "../../assets/images/Logo.svg"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { MdKeyboardArrowUp } from "react-icons/md";
import Links from "./Links";
import  './Footer.css';



const Footer=()=>{
 return(
    <footer>
    <div className="col1">
        <div className="footer-header">
            <div className="logo_heading">
              <div className="website_logo">
                <img src={Logo} alt="website logo"/>
              </div>
              <h1>Panto</h1>
            </div>
           <p>The advantage of hiring a workspace with <br/> us is that givees you comfortable service <br/> and all-around facilities.</p>
          </div>
          <div className="footer-links">
         <Links catergory="Services"  s1="Email Marketing" s2="Campaigns" s3="Branding"  />
         <Links catergory='Furniture' s1='Beds' s2="Chair" s3="All products"/>
         <Links className='links-three' catergory="Follow Us"  img1={<FaFacebook  className="img1"/>}  img2={<FaTwitter className="img2"  />}   img3={<FaInstagramSquare 
         className="img3" />}   />
       </div>
       </div>
       <div className="col2">
        <div className="copyright">Komron-Mirzo | © Copyright 2022</div>
        <div className="term">
         <p>Terms & Conditions</p>
         <p>Policy Privacy</p> 
          <div className="scroll-top"  onClick={()=>{ window.scrollTo(0, 0)}}>
          <MdKeyboardArrowUp className="scrollup" />
          </div>
        </div>
       </div>
    </footer>)
}

export default Footer;

