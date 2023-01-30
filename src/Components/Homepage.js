import React from "react";
import "../Components/Homepage.css";
import {Row,Col} from 'antd'
import Image1 from "../Images/first.svg";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="navbar">
        <div className="navbarfirst">
          <h3 className="select">SELECT</h3>
        </div>
        <div className="navbarsecond">
          <h3 className="home">HOME</h3>
          <img src={Image1} alt="" className="images1" />
          <h3 className="bag">
         
            BAG
          </h3>
        </div>

       
      </div>
      <p className="cardpara">Select to go forward</p>
      <div className="section">
         
          <Row>
            <Col className="card"><span className="cardname">MEN</span> </Col>
            <Col className="card"><span className="cardname">WOMEN</span></Col>
            <Col  className="card"><span className="cardname">KIDS</span></Col>
          </Row>
    </div>
    <p className="cardpara2">You can order the cloths in changing room</p>
    </div>
  );
};

export default Homepage;
