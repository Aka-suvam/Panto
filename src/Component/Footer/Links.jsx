import { Link } from "react-router-dom";



const Links=(props)=>{
    return(<div className={`links  ${props.className}`}>
           <h3 className="link-heading">{props.catergory}</h3>
           <ul onClick={()=>{ window.scrollTo(0, 0)}}>
            <li><Link to='#' className="text-link">{props.img1}{props.s1}</Link></li>
            <li><Link to='#' className="text-link">{props.img2}{props.s2}</Link></li>
            <li><Link to='#' className="text-link">{props.img3}{props.s3}</Link></li>
           </ul>
        </div>);
  };

  export default Links;