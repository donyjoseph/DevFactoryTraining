import { useState } from "react";
import "./style/style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    var url = "http://localhost:5000/uservalidation";
    var request = { username: username, password: password };
    var header = {};
    axios
      .post(url, request, header)
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          setErrorMessage("Success");
          navigate("/dashboard");
        } else {
          setErrorMessage("Error in Username Or Password");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const newClick = () => {
    navigate("/signup");
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>Username</label>
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        />
      </div>
      <p className="errormessage">{errormessage}</p>
      <p onClick={newClick} className="newuser">
        NewUser?
      </p>
      <button onClick={handleClick} className="loginbutton">
        Login
      </button>
    </div>
  );
}

export default LoginPage;
