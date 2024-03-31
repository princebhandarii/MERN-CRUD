import "./App.css";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register.js";
import Edit from "./components/Edit.js";
function App() {
  return (
    <Router>
      <Navbar />

      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route exact path="/delete" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
