import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../client";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullname] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const navigate = useNavigate();

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();

    if (!email || !password || !fullName) {
      setError("All filed is requied.");
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
          phone_number: phoneNumber,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
    } else {
      alert("Sign-up successfull! Check your email for confirmation");
      navigate("/login");
      setEmail();
      setPassword();
    }

    console.log(data, error, setSuccess);
  };

  return (
    <div>
      <form className="signup-form" onSubmit={handleSubmitSignUp}>
        <h2>Sign Up</h2>
        {error && <small className="error-sign">{error}</small>}
        {success && <small className="error-sign">{success}</small>}

        <div className="form-group">
          <label htmlFor="Confirm-password">FullName:</label>
          <input
            type="text"
            id="confirmPassword"
            required
            value={fullName}
            onChange={(c) => setFullname(c.target.value)}
            className="form-group-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Phone Number:</label>
          <input
            type="number"
            id="number"
            required
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="form-group-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="Email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-group-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(p) => setPassword(p.target.value)}
            className="form-group-input"
          />
        </div>

        <button type="submit">Sign Up</button>
        <p>
          Already have an account <Link to="/login">Login</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Signup;
