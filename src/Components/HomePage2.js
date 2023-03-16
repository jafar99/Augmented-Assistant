import React from "react";
import { Row, Col, Button, Drawer, theme } from "antd";
import Image1 from "../Images/first.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Components/Homepage.css";

const HomePage2 = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `section`; 
    navigate(path);
  }


  return (
    <div className="backgroundbg">

      <div className="navbar">
        <div className="navbarfirst">
          <h3 className="select">SELECT</h3>
        </div>
        <div className="navbarsecond">
          <h3 className="home">HOME</h3>
          <img src={Image1} alt="" className="images1" />
          <h3 className="bag">BAG</h3>
        </div>
      </div>

    
     
      <Row  className="RowH"   >
        <Col span={14}>
          <p className="cardpara">Explore More</p>
          <div className="section">
            <Row>
              <Col className="card">
              
                <span className="cardname"  onClick={routeChange}>MEN</span>
              </Col>
              <Col className="card">
                <span className="cardname">WOMEN</span>
              </Col>
              <Col className="card">
                <span className="cardname">KIDS</span>
              </Col>
             
            </Row>
          </div>
          <p className="cardpara2">You can order the cloths in changing room</p>
        </Col>

   
       <Col span={10} className="Productcard" >
            <Row>
              <Col span={16} className="InHand">
                ITEMS IN HAND
              </Col>
              <Col span={6}>
                {" "}
                <Row className="show">
                  <span className="shows">Show All</span>
                </Row>{" "}
              </Col>
            </Row>
            <Row className="cardbg">
              <Col span={16} className="InHand1">
                V1 T-Shirt (V neck) size- L
              </Col>
              <Col span={6}>
                {" "}
                <Row className="show1">
                  <span className="shows1">Show</span>
                </Row>{" "}
              </Col>
            </Row>

            <Row className="cardbg">
              <Col span={16} className="InHand1">
                V1 T-Shirt (V neck) size- L
              </Col>
              <Col span={6}>
                {" "}
                <Row className="show1">
                  <span className="shows1">Show</span>
                </Row>{" "}
              </Col>
            </Row>

            <Row className="cardbg">
              <Col span={16} className="InHand1">
                V1 T-Shirt (V neck) size- L
              </Col>
              <Col span={6}>
                {" "}
                <Row className="show1">
                  <span className="shows1">Show</span>
                </Row>{" "}
              </Col>
            </Row>
            <Row className="cardbg">
              <Col span={16} className="InHand1">
                V1 T-Shirt (V neck) size- L
              </Col>
              <Col span={6}>
                {" "}
                <Row className="show1">
                  <span className="shows1">Show</span>
                </Row>{" "}
              </Col>
            </Row>
          </Col>
 
        
          
      
      </Row>
    </div>
  );
};

export default HomePage2;
