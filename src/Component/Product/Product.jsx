import './Product.css';

const Product=(props)=>{
    const {id,category,img,description,price} =props.resName;//console.log(props.resName.img);

    
    return(<div className="product">
    <div className="product-img">
       <img src={img} alt="img-1"/>
    </div>
    <div className="product-detail">
       <p className="product-type">{category}</p>
       <p className="product-title">{description}</p>
       <p className="product-prize"> Rs:{price}</p> 
    </div>
   </div>);
};

export default Product;