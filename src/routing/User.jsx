import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {name} = useParams();
    return (
     <>
     <h1>this is {name}  page.</h1>
     </>
    );
  }
  
  export default User;