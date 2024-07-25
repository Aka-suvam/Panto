import { useEffect, useState } from "react";
import { Link,useLocation } from 'react-router-dom';
import { items } from "../../ulits/MockData";
import Product from "../Product/Product.jsx";
import './Category.css';
 
const Category=()=>{
   const [productlist,setproductlist]=useState(items);
   const [changeItem,setchangeItem]=useState('');
   const location = useLocation();


   const filteredList=(cartitem)=>{
      const updatefilter=items.filter 
      ((res)=>res.category===cartitem);
      setproductlist(updatefilter);
      setchangeItem('');
      
   } 
   //sorting by price  
   const handleSortOrderChange = (e) => {
      setchangeItem(e.target.value);
    };
    
    
   useEffect(() => {
      if (changeItem === "Default") {
        setproductlist(items);
      } else if (changeItem === "Low to High") {
        const sortedList = productlist.slice().sort((a, b) => a.price - b.price);
        setproductlist(sortedList);
      } else if (changeItem === "High to Low") {
        const sortedList = productlist.slice().sort((a, b) => b.price - a.price);
        setproductlist(sortedList);
      }
    }, [changeItem]);

   
 //useEffect(()=>{console.log(changeItem)},[handleSortOrderChange]);
 
 //search
 useEffect(() => {
   const searchParams = new URLSearchParams(location.search);
   const searchQuery = searchParams.get('search') || '';
   const trimmedSearchQuery = searchQuery.trim().toLowerCase();
   
   const filteredProducts = items.filter((item) => {
      const categoryMatch = item.category? item.category.toLowerCase().includes(trimmedSearchQuery): false;

      const nameMatch = item.description ? item.description.toLowerCase().includes(trimmedSearchQuery) : false;
  
      return categoryMatch || nameMatch;
    });
  
    setproductlist(filteredProducts);
  }, [location.search]);

  function toggleActive(e) {
   const buttons = document.querySelectorAll('.categories-container button');
   buttons.forEach(btn => btn.classList.remove('active'));
   e.currentTarget.classList.add('active');
 }
 const Windowtop = () => {
   window.scrollTo(0, 0);
 };
    return(<section className="categories">
      <h1 className="category-heading">Our Products</h1>
      
         <div className="categories-container">
            <button onClick={(e)=> { setproductlist(items);toggleActive(e);}}>All</button>
            <button onClick={(e)=>{filteredList('chair');toggleActive(e);}}>Chair</button>
            <button onClick={(e)=>{filteredList('table');toggleActive(e);}}>Table</button>
            <button onClick={(e)=>{filteredList('bed');toggleActive(e);}}>Beds</button>
            <button onClick={(e)=>{filteredList('sofa');toggleActive(e);}}>Sofa</button>
            <button onClick={(e)=>{filteredList('lamp');toggleActive(e);}}>Lamp</button>
         </div>
   
         <div className="sortcontainer">
           <div className="sort-items">
             <span>Sort by price :</span>
             <select id="select" value={changeItem} onChange={handleSortOrderChange} >
             <option value="">Select</option>
             <option value="Default">Default</option>
             <option value="Low to High">Low to High</option>
             <option value='High to Low'>High to Low</option>
            </select>
           </div>
</div>  

   <div className="products-list">   
{
   productlist.map(
   (res)=>(
      <Link to={"/products/"+res.id} className="product_link" key={res.id}  onClick={Windowtop}   >
         <Product key={res.id} resName={res}/></Link>
   )) 
   
}


   </div>
    </section>);
};

export default Category;