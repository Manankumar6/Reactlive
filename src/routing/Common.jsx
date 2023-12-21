import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props)=>{
    return (
        <>
        <div id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                            <div className="col-md-6 pt-15 pt-lg-0 order-2 oreder-lg-1 d-flex justify-content-center flex-column ">
                                <h1>{props.name} <strong className="brand-name">React.Js</strong></h1>
                                <h2 className="my-3"> We are the team of talented devolper making website.</h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className=" btn btn-outline-primary">{props.btnName}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated " alt="home-img" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Common;