// import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import logo from "../assets/speak.png";
import Toaster from "./Toaster";

function Login() {
  const [showLogin, setShowLogin] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const [loginStatus, setLoginStatus] = useState("");
  const [signinStatus, setSigninStatus] = useState("");

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    setLoading(true);
    console.log(data);
    try {
      const config = {
        header: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:5000/user/login/",
        data,
        config
      );
      console.log("Login: ", response);
      setLoginStatus({ msg: "Success", key: Math.random() });
      // setLoading(false);
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
    } catch (error) {
      setLoginStatus({
        msg: "Invalid username or password",
        key: Math.random(),
      });
    } finally {
      setLoading(false);
    }
  };

  const signUpHandler = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:5000/user/register",
        data,
        config
      );
      console.log(response);
      setSigninStatus({ msg: "Success", key: Math.random() });
      navigate("/app/welcome");
      localStorage.setItem("userData", JSON.stringify(response));
      // setLoading(false);
    } catch (error) {
      console.log(error);
      if (error.response.status === 405)
        setLoginStatus({
          msg: "User with this email ID already Exists",
          key: Math.random(),
        });
      if (error.response.status === 406)
        setLoginStatus({
          msg: "Username already taken, Please try another one",
          key: Math.random(),
        });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="secondary" />
      </Backdrop>
      <div className="login-container">
        <div className="image-container">
          <img src={logo} alt="Logo" className="welcome-logo" />
        </div>
        {showLogin && (
          <div className="login-box">
            <p className="login-text">Login to your Account</p>
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  loginHandler();
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="secondary"
              name="password"
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  loginHandler();
                }
              }}
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={loginHandler}
              // isLoading
            >
              Login
            </Button>
            <p>
              Don't have an Account ?{" "}
              <span
                className="hyper"
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                Sign Up
              </span>
            </p>
            {loginStatus ? (
              <Toaster key={loginStatus.key} message={loginStatus.msg} />
            ) : null}
          </div>
        )}
        {!showLogin && (
          <div className="login-box">
            <p className="login-text">Create your Account</p>
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter User Name"
              variant="outlined"
              color="secondary"
              name="name"
              helperText=""
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  signUpHandler();
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              id="standard-basic"
              label="Enter Email Address"
              variant="outlined"
              color="secondary"
              name="email"
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  signUpHandler();
                }
              }}
            />
            <TextField
              onChange={changeHandler}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="secondary"
              name="password"
              onKeyDown={(event) => {
                if (event.code == "Enter") {
                  // console.log(event);
                  signUpHandler();
                }
              }}
            />
            <Button
              variant="outlined"
              color="secondary"
              onClick={signUpHandler}
            >
              Sign Up
            </Button>
            <p>
              Already have an Account ?
              <span
                className="hyper"
                onClick={() => {
                  setShowLogin(true);
                }}
              >
                Log in
              </span>
            </p>
            {signinStatus ? (
              <Toaster key={signinStatus.key} message={signinStatus.msg} />
            ) : null}
          </div>
        )}
      </div>
    </>
  );

  // return (
  //   <div className="login-container">
  //     <div className="image-container">
  //       <img src={logo} alt="logo" className="welcome-logo" />
  //     </div>
  //     <div className="login-box">
  //       <p className="login-text">Login</p>
  //       <TextField
  //         id="standard-basic"
  //         label="Enter username"
  //         variant="outlined"
  //       />
  //       <TextField
  //         id="outlined-password-input"
  //         label="Password"
  //         type="password"
  //         autoComplete="current-password"
  //       />
  //       <Button variant="outlined">Login</Button>
  //       <p>First time? </p>
  //     </div>
  //   </div>
  // );
}

export default Login;
