import React from "react";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <section className="signin-section">
      <div className="title-signin-div">
        <h1>Create new account</h1>
        <p>
          Already member ? <Link to="/login">Login</Link>
        </p>
      </div>
      <form>
        <div className="first-last-name-div">
          <div className="first-name-div">
            <label>FIRST NAME</label>
            <input
              className="first-name-input"
              name="first_name"
              type="first_name"
              id="first_name"
              placeholder="enter first name"
            />
          </div>
          <div className="last-name-div">
            <label>LAST NAME</label>
            <input
              className="last-name-input"
              name="last_name"
              type="last_name"
              id="last_name"
              placeholder="enter last name"
            />
          </div>
        </div>
        <div className="address-div">
          <label>ADDRESS</label>
          <input
            className="address-input"
            name="address"
            type="address"
            id="address"
            placeholder="enter address"
          />
        </div>
        <div className="email-div">
          <label>EMAIL</label>
          <input
            className="email-input"
            name="email"
            type="email"
            id="email"
            placeholder="enter email"
          />
        </div>
        <div className="password-div">
          <label>PASSWORD</label>
          <input
            className="password-input"
            name="password"
            type="password"
            id="password"
            placeholder="enter password"
          />
        </div>
        <button className="button-create-account" type="submit">
          Create Account
        </button>
      </form>
    </section>
  );
};

export default SignIn;
