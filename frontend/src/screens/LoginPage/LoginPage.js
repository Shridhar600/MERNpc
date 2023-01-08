import axios from "axios";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email,password)
    try {
        const config = {
          headers: {
            "Content-type":"application/json"
          }
        };
        setLoading(true);
        const { data } = await axios.post(
          "/api/users/login",
          {
            email,
            password,
          },
          config
        );
        console.log(data);
        localStorage.setItem('userInfo',JSON.stringify(data));
        setLoading(false);
      } catch (error) {
          setError(error.response.data.message);
      }

  };
  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        <form onSubmit={submitHandler}>
          <fieldset>
            <div class="form-group">
              <label for="exampleInputEmail1" class="form-label mt-4">
                Email address
              </label>
              <input
                type="email"
                value={email}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1" class="form-label mt-4">
                Password
              </label>
              <input
                type="password"
                value={password}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              style={{ marginTop: 20, marginBottom: 6 }}
              type="submit"
              className="btn btn-outline-dark"
            >
              Submit
            </button>
          </fieldset>
        </form>
        <Row className="py-3">
          <Col>
            New User ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default LoginPage;
