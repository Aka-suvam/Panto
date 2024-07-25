import Clinetone from "../../assets/images/clients-1.svg";
import Clinettwo from "../../assets/images/clients-2.svg";
import Clinetthree from "../../assets/images/clients-3.svg";
import Userone from "../../assets/images/user-1.svg";
import Usertwo from "../../assets/images/user-2.svg";
import Userthree from "../../assets/images/user-3.svg";
import Reviewcontainer from "./Reviewcontainer";
import './Review.css';



const Review=()=>{
    return (<section className="review">
        <p className="review-heading1">testimonials</p>
        <h3 className="review-heading2">Our Client Reviews</h3>
        <div className="review-container">
        <Reviewcontainer Name={'Bang Upin'} title={'Street Vendor'} text={'"Thank you very much, now my room looks more luxurious and expensive."'}
        Img={Clinetone} Img2={Userone} id="review-item-one"
        />
        <Reviewcontainer Name={'Riya Shaw'} title={"housewife" } text={`"Thanks Panto, I feel like I'm living in an apartment now because of the luxurious items I see."`}
        Img={Clinettwo} Img2={Usertwo}  id="review-item-two"
        />
        <Reviewcontainer Name={'Bang Upin'} title={'private company employee'} text={`"Very affordable for my limited budget.Thanks Panto  I feel like I'm living in an apartment"`}
        Img={Clinetthree} Img2={ Userthree} id="review-item-three" />
        

        </div>
    </section>)
}


export default Review;