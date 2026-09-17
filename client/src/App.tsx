import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
