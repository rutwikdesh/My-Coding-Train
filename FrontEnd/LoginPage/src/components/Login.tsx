import { FormEvent, useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
  const [togglePass, setTogglePass] = useState(false);
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });

  async function handleLogin(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      if (!form.userName || !form.password) {
        console.log("Username and pass req");
      }
      const body = {
        userName: form.userName,
        password: form.password,
      };
      const resp = await axios.post("https://myLoginApp/login", body);
      if (!resp) {
        throw new Error("Failed to Login");
      }
      console.log("Login Success");
    } catch (e) {
      console.error("Login failed", e);
    }
  }

  return (
    <div className="login-page">
      <form className="login-box" onSubmit={(e) => handleLogin(e)}>
        <h1 className="text-2xl">Login</h1>
        <div className="input-block">
          <label className="mb-2">Username</label>
          <input
            className="login-input"
            name="username"
            type="text"
            value={form.userName}
            onChange={(e) => setForm({ ...form, userName: e.target.value })}
            required={true}
          />
        </div>
        <div className="input-block">
          <label className="mb-2">Password</label>
          <div className="login-password-toggle">
            <input
              className="login-input"
              name="password"
              type={togglePass ? "text" : "password"}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required={true}
            />
            <button
              className="password-toggle-btn"
              onClick={(e) => {
                e.preventDefault();
                setTogglePass(!togglePass);
              }}
            >
              {togglePass ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000000"
                >
                  <path d="M480-312q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Zm0-72q-40 0-68-28t-28-68q0-40 28-68t68-28q40 0 68 28t28 68q0 40-28 68t-68 28Zm0 192q-142.6 0-259.8-78.5Q103-349 48-480q55-131 172.2-209.5Q337.4-768 480-768q142.6 0 259.8 78.5Q857-611 912-480q-55 131-172.2 209.5Q622.6-192 480-192Zm0-288Zm0 216q112 0 207-58t146-158q-51-100-146-158t-207-58q-112 0-207 58T127-480q51 100 146 158t207 58Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#000000"
                >
                  <path d="m637-425-62-62q4-38-23-65.5T487-576l-62-62q13-5 27-7.5t28-2.5q70 0 119 49t49 119q0 14-2.5 28t-8.5 27Zm133 133-52-52q36-28 65.5-61.5T833-480q-49-101-144.5-158.5T480-696q-26 0-51 3t-49 10l-58-58q38-15 77.5-21t80.5-6q143 0 261.5 77.5T912-480q-22 57-58.5 103.5T770-292Zm-2 202L638-220q-38 14-77.5 21t-80.5 7q-143 0-261.5-77.5T48-480q22-57 58-104t84-85L90-769l51-51 678 679-51 51ZM241-617q-35 28-65 61.5T127-480q49 101 144.5 158.5T480-264q26 0 51-3.5t50-9.5l-45-45q-14 5-28 7.5t-28 2.5q-70 0-119-49t-49-119q0-14 3.5-28t6.5-28l-81-81Zm287 89Zm-96 96Z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <button className="login-submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
