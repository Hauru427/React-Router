import { BrowserRouter, Link } from "react-router-dom";

import "./App.css";
import { Router } from "./router/Router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/Page1">Page1</Link>
        <br />
        <Link to="/Page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}