import { FaStar } from "react-icons/fa6";

const Reviewcontainer=({Name,title,text,Img,Img2,id})=>{
    return(<div className="review-item" id={id}>
        <img src={Img} alt="testimonials-img"/>
            <div className="review-details">
                <img src={Img2} alt='reviewers-img'/>
               <p className="review-name">{Name}</p>
               <p className="review-title">{title}</p>
               <p className="review-text" id='text'>{text}</p> 
               <div className="testimonial-rating">
                <FaStar className="star-shine"/>
                <FaStar className="star-shine"/>
                <FaStar className="star-shine"/>
                <FaStar className="star-shine"/>
                <FaStar className="star-not-shine"/>
               </div>
            </div>
        
    </div>)
}

export default Reviewcontainer;