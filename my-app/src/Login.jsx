import { useState } from "react";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields!");
      return;
    }

    // Simple demo login (you can replace with backend later)
    if (email === "user@gmail.com" && password === "123456") {
      alert("Login Successful!");
      localStorage.setItem("loggedIn", true);
      window.location.href = "/";
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" type="submit">
          Login
        </button>

        <p className="signup-text">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
