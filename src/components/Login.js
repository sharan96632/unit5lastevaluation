import React, { useState } from "react";
import ReactDOM from "react-dom";
import { NewOrder } from "./NewOrder";
import { Orders } from "./Orders";

export const Login = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      id: 1,
      username: "admin",
      password: "1234",
      role: "admin"
    },
    {
      id: 2,
      username: "John Doe",
      password: "0000",
      role: "client"
    },
    {
      id: 3,
      username: "Allan Doe",
      password: "4444",
      role: "client"
    },
    {
      id: 4,
      username: "Adam Smith",
      password: "5555",
      role: "client"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };
  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? (
          <div>
            <Orders />
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
