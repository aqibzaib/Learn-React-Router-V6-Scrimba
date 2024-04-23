import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./cmp/Home";
import About from "./cmp/About";
import "./server";
import VanList from "./cmp/VanList";
import VanDetail from "./cmp/VanDetail";
function App() {
  return (
    <>
      <header>
        <Link className="site-logo" to="/">
          #VanLife
        </Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vanlist</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<VanList />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </>
  );
}

export default App;
