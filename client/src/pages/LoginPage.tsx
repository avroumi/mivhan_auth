import { useState } from "react";
import UseApi from "../hooks/UseApi";
import { UseAuthStore } from "../store/ZustandStore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, request } = UseApi();
  const navigate = useNavigate();

  const setToken = UseAuthStore((state) => state.setToken);

  const handleSubmit = async () => {
    const result = await request("POST", "http://localhost:3000/auth/login", {
      email,
      password,
    });
    if (result?.token) {
      setToken(result.token);
      navigate("/user");
    }
  };

  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label typeof="">Email</label>
        <input
          type="email"
          required
          placeholder="koby67@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label typeof="">Password</label>
        <input
          type="password"
          required
          placeholder="1234567"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "..." : "Login"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
