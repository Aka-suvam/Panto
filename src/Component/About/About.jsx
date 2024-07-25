import Aboutimg2 from "../../assets/images/img-1.jpg";
import Aboutimg1 from "../../assets/images/img-2.jpg";
import Homepic from "../../assets/images/house.svg";
import Truck from "../../assets/images/truck.svg";
import Hand from "../../assets/images/hand.svg";
import Person1 from "../../assets/images/person1.jpg";
import Person2 from "../../assets/images/person2.jpg";
import Person3 from "../../assets/images/person3.jpg";
import Team from "./Team";
import Aboutdetail from "./Aboutdetail";
import './About.css';



const About=()=>{
    return(<section className="about">
      <h1 className="about-heading">About us</h1>
     <div className="about-contents">
        <div className="about-left">
         <p className="about-para">Panto is among the World's Largest Furniture Manufacturers offering a diverse range of modern and traditional furniture. Since Panto was established in 1986, it has achieved a rapid success and has expanded to over 240 showrooms in South Asia. Panto's success has grown from it's ability to produce high quality furniture at affordable prices with outstanding customer service.</p>
         <div className="about-img1">
            <img src={Aboutimg1} alt="about-img1"/>
         </div>
        </div>
        <div className="about-right">
        <img src={Aboutimg2} alt="about-img2"/>
        </div>
     </div>
     <div className="about-detail-container">
     <Aboutdetail   Img={Homepic}  quantity="115 +"   resName="Experience Stores"/>
     <Aboutdetail   Img={Truck}  quantity="300 +"  resName="Wide Spread Delivery Areas"/>
     <Aboutdetail   Img={Hand}  quantity="5L +"     resName="Satisfied And Repeat Customers"/>
     <Aboutdetail   Img={Homepic}  quantity="70K +"   resName="Complete Household Furniture Solutions & Office Furniture Solutions"/>
   </div>
   <div className="meetteam">
   <h1>Meet our Team</h1>
   <div className="teamcontainer">
      <Team Img={Person1} Name="Irina Mikailova"  Title="Furniture Maker"/>
      <Team Img={Person2} Name="Jun Hsho"  Title="Designer"/>
      <Team Img={Person3} Name="Rhea Mehta"  Title="Marketing Manager"/>
      </div>
   </div>
    </section>);
};

export default About;