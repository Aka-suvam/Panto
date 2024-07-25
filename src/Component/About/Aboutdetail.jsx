const Aboutdetail=({Img,quantity,resName})=>{
    return(
    
    <div className="about-details">
       <div className="imgg">
          <img src={Img} alt="imgg"/>
       </div>
       <h4>{quantity}</h4>
       <p>{resName}</p>
  
    </div>
    );
 };

 export default Aboutdetail;