import React from "react";
import styled from "styled-components";
// import { Button } from "../styles/Button";
// import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      

      {/* footer section  */}

      <footer>
        <div className="container ">
        
          
          <div className="footer-about ">
            <h3>Shiv Pr@t@p Singh</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe ">
            <h3>Call me for more details</h3>
            {/* <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form> */}
          </div>

          {/* 3rs column  */}
          <div className="footer-social ">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                 <FaDiscord className="icons" /> 
              </div>
              <div>
                 <FaInstagram className="icons" /> 
              </div>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_blank">
                   <FaYoutube className="icons" /> 
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact me-5 ">
            <h3>Call Us</h3>
            <marquee behavior="slide" direction="up"><h3 className="text-red bg-primary">+91 8839661691 'or' 9669844088</h3></marquee>
          </div>

          <div className="footer-contact me-5 ">
            <h3>gmail</h3>
            <marquee behavior="slide" direction="up"><h3 className="text-red bg-success">shivpratapsingh3276@gmail.com</h3></marquee>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Shiv@nk.parih@r. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
          </div>
      
      
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 16rem 0 9rem 0;
    margin-top:34px;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 0rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 0rem;
    }

    
  }

  @media (min-width:990){
    footer{
      margin-top:325px;
    }
  }
`;

export default Footer;