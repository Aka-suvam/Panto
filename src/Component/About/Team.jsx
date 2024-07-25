const Team=({Img,Name,Title})=>{
   return(<div className="person">
      
   <div className="personimg">
      <img src={Img} alt="personimg"/>
   </div>
   <h3>{Name}</h3>
   <p>{Title}</p>
</div>);
};

export default Team;
