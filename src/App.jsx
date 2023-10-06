import { Outlet } from "react-router-dom";
import "./App.css";

import { Navbar } from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Outlet />
    </div>
  );
}

export default App;
