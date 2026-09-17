import { useState } from "react";
import UseApi from "../hooks/UseApi";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { loading, error, request } = UseApi();

  const handleSubmit = async () => {
    const result = await request(
      "POST",
      "http://localhost:3000/auth/register",
      {
        name,
        password,
        email,
      },
    );
    if (result.data) {
      navigate("/login");
    }
  };

  return (
    <div className="register">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Koby bryant"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Koby@gmail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "...Loading" : "Send"}
        </button>
      </form>
      {error && <p>{error}</p>}
      <article>
        <p>Already have account ? </p>
        <button onClick={() => navigate("/login")}>Go to login</button>
      </article>
    </div>
  );
};

export default RegisterPage;
