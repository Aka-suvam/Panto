import TrendingItem from "./TrendingItem";
//import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import './Trending.css';

const TrendingSlider=({ product, setHoverImg })=> {
  
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 263;
    console.log(slider.scrollLeft);
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 265;
  };
 
  return (
    <section className="trending">
      
        <div className="title-btns">
          <h3>Trending Now</h3>
          <div className="btns">
            <button title="scroll left" onClick={slideLeft}>
            <FaArrowLeft />
            </button>
            <button title="scroll right" onClick={slideRight}>
            <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="row-container" id="slider">
          <TrendingItem product={product} setHoverImg={setHoverImg}/>
         </div>
       
    </section>
  );
}

export default TrendingSlider;


