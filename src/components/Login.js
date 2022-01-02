import React, { useState, useContext } from "react";
import { AuthContext } from "./auth/auth";
import { Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required("This field is required"),
  password: yup
    .string()
    .min(3, "This field must contain more than 1 character")
    .required("this field is required"),
});

const url = "http://localhost:8080/api/user/login";

const Login = ({ history }) => {
  const { setAuthState, authState } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(url, data);
      console.log("res :>> ", res);
      localStorage.setItem("accessToken", res.data.token);
      setAuthState({ ...authState, status: true });
      history.push("/homepage");
      setError(null);
    } catch (error) {
      console.log("error :>> ", error);
      //setError(error.response.data.msg);
      //console.log("error :>> ", error.response.data.msg);
    }
  };

  // if (authState.status) {
  //   return <Redirect to="/homepage" />;
  // }

  return (
    <section className="login-section">
      <div className="title-login-div">
        <h1>Login</h1>
        <p>
          You dont have an account ? <Link to="/register">Sign in</Link>
        </p>
      </div>
      {error && error}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-login-div">
          <div className="email-div">
            <label>EMAIL</label>
            <input
              className="email-input"
              {...register("email", {
                required: "Required",
              })}
              name="email"
              type="email"
              id="email"
              placeholder="enter email"
            />
            <span className="warning-email">
              {errors.email && errors.email.message}
            </span>
          </div>

          <div className="password-div">
            <label>PASSWORD</label>
            <input
              className="password-input"
              {...register("password", {
                required: "Required",
              })}
              name="password"
              type="password"
              id="password"
              placeholder="enter password"
            />
            <span className="warning-password">
              {errors.password && errors.password.message}
            </span>
          </div>
        </div>
        <div className="button-login-div">
          <button className="button-login" type="submit">
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
