import axios from "axios";
import React, { useState } from "react";
import "./Login.css";

const projectKey = "8812f731-0926-4f0e-943a-cf0b4abb2a92";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectKey,
      "User-name": username,
      "User-secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      window.location.reload();
      setError("");
    } catch (err) {
      setError("Invalid credentials.Retry again with correct details");
    }
  };

  return (
    <>
      <div className="background">
        <div className="circles" />
        <div className="circles" />
      </div>
      <form className="formLogin" onSubmit={handleSubmit}>
        <h2>Login Here</h2>

        <label htmlFor="username" className="loginLabel">
          Username
        </label>
        <input
          className="loginInput"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          id="username"
          required
        />

        <label htmlFor="password" className="loginLabel">
          Password
        </label>
        <input
          className="loginInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          id="password"
          required
        />

        <button className="loginButton" type="submit">
          <span>Login</span>
        </button>
        <h2 className="error">{error}</h2>
      </form>
    </>
  );
}

export default Login;
