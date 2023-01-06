import { Button } from "bootstrap";
import React from "react";
import { Container, Row} from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container fluid>
        <Row>
          <div className="introText">
            <div>
              <h1 className="title">Welcome to Notes</h1>
              <p className="subtitle"> One Stop for all your notes.</p>
              <div className="buttons">
                <a href="/login">
                <button size="lg" className="landingbutton btn1 btn btn-outline-dark ">Login</button>
                </a>
                <a href="/register">
                <button  size="lg" className="landingbutton btn2 btn btn-outline-dark ">Sign Up </button>
                </a>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
