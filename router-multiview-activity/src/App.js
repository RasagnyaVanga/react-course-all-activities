import { Routes, Route, NavLink } from "react-router-dom";
import Description from "./Description.js";
import StatefulComponent from "./StatefulComponent.js";
import SimpleComponent from "./SimpleComponent.js";
import Home from "./Home.js";
import PageNotFound from "./PageNotFound.js";

const navLinkStyles = ({ isActive }) => ({
  color: isActive ? '#007bff' : '#333',
  textDecoration: isActive ? 'none' : 'underline',
  fontWeight: isActive ? 'bold' : 'normal',
  padding: '5px 10px'
});

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/description" style={navLinkStyles}>Home</NavLink> |{" "}
        <NavLink to="/simple" style={navLinkStyles}>About</NavLink> |{" "}
        <NavLink to="/stateful" style={navLinkStyles}>Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/simple" element={<SimpleComponent />} />
        <Route path="/stateful" element={<StatefulComponent />} />

        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}
