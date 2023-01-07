import React from "react";
import { Button, Container, Row} from "react-bootstrap";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="introText">
            <div>
              <h1 className="title">Welcome to Notes</h1>
              <p className="subtitle"> One stop for all your notes.</p>
              <div className="buttons">
                <a href="/login">
                <Button size="lg" className="landingbutton btn1 btn btn-outline-dark ">Login</Button>
                </a>
                <a href="/register">
                <Button  size="lg" className="landingbutton btn2 btn btn-outline-dark ">Sign Up </Button>
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
