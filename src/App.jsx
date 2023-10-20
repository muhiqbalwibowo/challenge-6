import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Navbar } from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  const location = useLocation();
  const isLogin =
    location.pathname === "/" || location.pathname === "/register";

  return (
    <GoogleOAuthProvider clientId="934529568796-arafcq00hnteh6pve4cg4h9gqkbsb849.apps.googleusercontent.com">
      <div className="App">
        <Navbar />
        {!isLogin && <Banner />}
        <Outlet />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
