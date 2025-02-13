  import React, { useState } from "react";
  import "../Components/LoginPageComponents/Login.css";


  const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Logging in with:", email, password);
    };

    return (
      <div className="login-container">
        <div className="login-left">
          <div className="login-form">
            <h2>Login to Your Account</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input-field1"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="input-field1"
              />
              <button type="submit" className="dark-button">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  export default Login;
