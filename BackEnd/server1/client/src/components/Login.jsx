import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setTheme } from "../state";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [loginSuccess, setLoginSuccess] = useState(false);
  let mode = useSelector((state) => state.theme);

  const fetchUser = async () => {
    try {
      const user = {
        name: name,
        email: email,
      };

      const response = await fetch("http://localhost:3001/test/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const ans = await response.json();
      if (ans.message === "gotcha") {
        setLoginSuccess(true);
        dispatch(setLogin({ user: ans.user, token: ans.token }));
      } else {
        setLoginSuccess(false);
      }
    } catch (e) {
      console.log("Error ", e);
    }
  };

  return (
    <div className={"login-container " + mode}>
      <div className="login-form">
        <p htmlFor="name" className="label">
          Name
        </p>
        <input
          type="text"
          name="name"
          className="input"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <p htmlFor="name" className="label">
          Email
        </p>
        <input
          type="email"
          name="email"
          className="input"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button className="submit" onClick={fetchUser}>
          Submit
        </button>

        <button className="submit" onClick={() => dispatch(setTheme())}>
          Change Theme
        </button>

        {loginSuccess && <div>Hurrah!! Login Success</div>}
      </div>
    </div>
  );
};

export default Login;
