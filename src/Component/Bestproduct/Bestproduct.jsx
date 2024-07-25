import { useState ,useEffect} from "react";

import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { items } from '../../ulits/MockData';
import { Link } from "react-router-dom";
import Flex_product from "./Flex_product";
import './Bestproduct.css';


                              

const Bestproduct=()=>{
  const filteredItems = items.filter((item) => item.id >= 15);
//console.log(filteredItems);
const [index, setIndex] = useState(0);
const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// Add an event listener to update the window width state
useEffect(() => {
  const handleResize = () => setWindowWidth(window.innerWidth);
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

  const slideLeft = () => {
    if (window.innerWidth <= 480) {
      setIndex(index === 0 ? 0 : index - 1);
    }
    else {
      let slider = document.getElementById("best-flex");
      slider.scrollLeft = slider.scrollLeft - 343;
    }
  };

  const slideRight = () => {
    if(window.innerWidth <= 480){
      if(index===filteredItems.length-1) return;
      setIndex(index+1);
    }
    else {
    let slider = document.getElementById("best-flex");
    slider.scrollLeft = slider.scrollLeft + 343;
    }
  };

  const Windowtop = () => {
    window.scrollTo(0, 0);
  };

    return(<section className='best_product'>
  <h2 className="best_product_title">SHOP OUR BESTSELLERS</h2>
  <div className='card_silder'>
    
   <div className="best_flex" id='best-flex' >
    {/*
    {filteredItems.map((item)=>(
   <Link className="text-link"  key={item.id}  onClick={Windowtop} to={`/products/${item.id}`}>
    
    <Flex_product  key={item.id}     resName={item}/>
    
    </Link>
    ))}  */}
    {windowWidth <= 480 ? (
            <Link
              className="text-link"
              key={filteredItems[index]?.id}
              onClick={Windowtop}
              to={`/products/${filteredItems[index]?.id}`}
            >
              <Flex_product
                key={filteredItems[index]?.id}
                resName={filteredItems[index]}
              />
            </Link>
          ) : (
            filteredItems.map((item) => (
              <Link
                className="text-link"
                key={item.id}
                onClick={Windowtop}
                to={`/products/${item.id}`}
              >
                <Flex_product key={item.id} resName={item} />
              </Link>
            ))
          )}

   
   </div>

  <button className='right'  onClick={slideRight}><MdArrowForwardIos /></button>
<button className='left' onClick={slideLeft}><MdArrowBackIos /></button>

  </div>  
  <h2 className="viewall"><Link to="/shop" className="text-link"  onClick={Windowtop}>View all <span>&#8674; </span></Link> </h2>
    </section>);
};

export default Bestproduct;