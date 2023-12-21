import React from "react";
import web from "../images/react-native.png"

import Common from "./Common";

const Home = () => {
    return (

        <>
             <Common 
      name="Gorw your bussiness with" 
      imgsrc={web} 
      visit="/service" 
      btnName="Get Started" />
        </>
    )
}
export default Home;