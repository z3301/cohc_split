import PropsPage from "../pages/PropsPage";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";
import RequireAuth from "../components/RequireAuth";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SignupPage from "../pages/SignupPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/logout">Log out</Link></li>
        </ul>
        <Routes>
          <Route index element={<RequireAuth><PropsPage /></RequireAuth>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
