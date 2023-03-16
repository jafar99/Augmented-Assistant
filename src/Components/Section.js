import React from "react";
import Image1 from "../Images/first.svg";
import images11 from "../Images/1.jpg";
import images12 from "../Images/2.jpeg";
import images13 from "../Images/3.jpeg";
import images14 from "../Images/4.jpeg";
import images15 from "../Images/5.jpg";
import images16 from "../Images/6.jpeg";
import offer from "../Images/Offer.svg";
import "../Components/Section.css";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";


const Section = () => {


  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `MenSection`; 
    navigate(path);
  }


  return (
    <div  className="sectionpage" style={{backgroundImage:"none"}}>
      <div className="navbar1">
        <div className="navbarfirst1">
          <h3 className="select1">MEN</h3>
        </div>
        <div className="navbarsecond1">
          <h3 className="home1">HOME</h3>
          <img src={Image1} alt="" className="images11" />
          <h3 className="bag1">BAG</h3>
        </div>
      </div>

    
        <Row className="productcards">
          <Col className="card1" onClick={routeChange}>
            <img src={images11} alt="" className="productimage" />
            <span className="productname">Shirt</span>
          </Col>
          <Col className="card1">
            <img src={images12} alt="" className="productimage" />
            <span className="productname">Pant</span>
       
          </Col>
          <Col className="card1">
            <img src={images13} alt="" className="productimage" />
            <span className="productname">Jacket</span>
          
          </Col>
          <Col className="card1">
            <img src={images14} alt="" className="productimage" />
            <span className="productname">Cap</span>
          
          </Col>
          <Col className="card1">
            <img src={images15} alt="" className="productimage" />
            <span className="productname">T-Shirt</span>
          </Col>
          <Col className="card1">
            <img src={images16} alt="" className="productimage" />
            <span className="productname">Hoddie</span>
          </Col>
        </Row>
     

        <div className="offer">   
        </div>
    </div>
  );
};

export default Section;
