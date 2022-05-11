import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import Signup from "./Signup";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />}></Route>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/SignupPage" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Navigation;