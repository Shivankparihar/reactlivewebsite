import React from "react";
import img from "../Images/img1.jpg"
import Common from "./Common";

const About = ()=>{
  return(
    <>
       <Common name = "Book Your Taxi Easily With"
              imgsrc = {img}
              visit = "/contact"
              btname = "Contact Now"
              name2 ="My Travels"
      />
    </>
  )
}
export default About