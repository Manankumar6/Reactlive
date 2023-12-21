import React from 'react';

function Sresult(props) {
   const img = `https://source.unsplash.com/random/600x400/?${props.name}`;
    return (
     <>
     <div className='image_container'>
        <img src={img} alt='img' />
     </div>
     </>
    );
  }
  
  export default Sresult;