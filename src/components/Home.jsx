import React from "react";
import img from "../Images/img2.jpg"
import Common from "./Common";


const Home = () => {
  return (
    <>
      <Common name = "Enjoy Your Journey With"
              imgsrc = {img}
              visit = "/service"
              btname = "Get Started"
              name2 = "ShriSatya Sai tour & Travels"
      />
    </>
  )
}
export default Home