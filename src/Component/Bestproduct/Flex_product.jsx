//import { FaCirclePlus } from "react-icons/fa6";

const Flex_product=(props)=>{
    const {category,img,description,price}=props.resName; 
   //console.log(props.resName);
    
   
    
    return (
     <div className="flex_product">
     <div className='product_img'>
     <img src={img} alt='chair img' className='img'/>
     </div>
     <div className='product_detail'>
     <p className='type'>{category}</p>
     <p className='name'>{description}</p>
     <p className='price'> {`Rs:${price}`} </p>
   {/*  <div className='price_icon'>
    
     <FaCirclePlus className='icon'/>  </div>*/}
    
     </div>
     </div>);
 };
     
 export default Flex_product;
