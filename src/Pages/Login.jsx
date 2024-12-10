import { Link, useNavigate } from "react-router-dom";
import styles from "../ui/Login.modules.css";
import { useState } from "react";
import { supabase } from "../client";

function Login({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlesubmit = async () => {
    let isVaild = true;
    if (!email) {
      setEmailError("Email is required");
      isVaild = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isVaild = false;
    }

    if (isVaild && !emailError && !passwordError) {
      setEmail("");
      setPassword("");
    }

    setIsLoading(true);

    const { data, error: signError } = supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (signError) {
      alert(signError.message);
    } else {
      setToken(data);

      navigate("/dashboard");
    }
  };

  return (
    <div className={styles.container}>
      <form id="login" className="form-login">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="Email">Email:</label>
          <input
            type="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="form-group-input"
          />
        </div>
        {emailError && <small className="error">{emailError}</small>}

        <div className="form-group">
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(p) => setPassword(p.target.value)}
            disabled={isLoading}
            className="form-group-input"
          />
        </div>
        {passwordError && <small className="error">{passwordError}</small>}
        <h3>
          <a href="#">Forget Password?</a>
        </h3>

        <button onClick={handlesubmit}>
          {isLoading ? "Loading..." : "Login"}
        </button>

        <p>
          Do not have an account <Link to="/signup">SignUp?</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
