import { items } from "../../ulits/MockData";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Trending.css';


const  TrendingItem=({  setHoverImg })=> {
  const filteredItems = items.filter((item) => item.id >= 8);
  const navigate = useNavigate();

  const handleClick = (item) => {
    setHoverImg(item.img); // Update the hoverImg state with the clicked item's image
    navigate(`/products/${item.id}`);
    window.scrollTo(0, 0);
  };


  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id} className="row-item">
          <Link className="text-link" onClick={() => handleClick(item)} to={`/products/${item.id}`}> 
            <div className="item-header">
              <img src={item.img} alt="product" /> 
            </div>
            <div className="item-description">
              <p>{item.description}</p>
              <p className="item-price">Rs:{item.price}</p>
            </div>
         </Link>
        </div>
      ))}
    </>
  );
}

export default TrendingItem;