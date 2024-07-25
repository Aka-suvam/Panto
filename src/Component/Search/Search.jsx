import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Search.css'

const Search=()=>{
    const [search,setsearch]=useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (search.trim()) {
          navigate(`/shop?search=${search.trim()}`);
        }
      };

    return(
    <div className="search">
    <input type="text" id="search" placeholder="Search furniture" value={search} onChange={(e)=>setsearch(e.target.value)} />
    
    <RiSearchLine className="searchline" onClick={handleSearch}/>
</div>);
};

export default Search;