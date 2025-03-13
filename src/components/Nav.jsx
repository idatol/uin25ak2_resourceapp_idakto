import { NavLink } from "react-router-dom";

export default function Nav() {
    return(
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>HTML</NavLink>
            <NavLink to="css" className={({ isActive }) => isActive ? "active" : ""}>CSS</NavLink>
            <NavLink to="javascript" className={({ isActive }) => isActive ? "active" : ""}>JavaScript</NavLink>
            <NavLink to="react" className={({ isActive }) => isActive ? "active" : ""}>React</NavLink>
            <NavLink to="headless-cms" className={({ isActive }) => isActive ? "active" : ""}>Sanity and Headless CMS</NavLink>
        </nav>
    );
}
