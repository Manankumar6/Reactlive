import React, { useState } from 'react';
import Sresult from './Sresult';

function Search() {
    const [img,setImg] = useState("");
    const inputEvent = (event)=>{
        setImg(event.target.value)
    }
    return (
     <>
     <h1>this is Search page.</h1>
     <div className='search_bar'>

     <input type='text' 
     placeholder='Search anything' 
     value={img}
     onChange={inputEvent} />
     </div>

       {img !== "" ?<Sresult name={img} /> : null } 

     </>
    );
  }
  
  export default Search;