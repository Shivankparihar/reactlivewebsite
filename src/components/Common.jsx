import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex justify-content-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
               <div className="row set">
              
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"></div>
               <h1>
                 {props.name}<br />
                <marquee behavior="slide" direction="up"><strong className="brand-name fw-bolder">{props.name2}</strong></marquee> 

                 <h2 className="my-3 ">
                Taxi Available <strong className="brand-name2 fw-bolder">[24×7]</strong>for you.
               </h2>
               <div className="mt-3">
                <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>

               </div>
               </h1>
               
              </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                <img src= {props.imgsrc}  className="img-fluid animeted rounded-4" alt="not found" />
              </div>  
              </div>
            </div>
          </div> 
        
      </section>
    </>
  )
}
export default Common



