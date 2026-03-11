import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid mx-md-5">
                <a href="/" className="navbar-brand text-light fw-semibold">
                    <img src="/JustPizza Logo.png" alt=""className="me-2 mb-1" loading="lazy" style={{height: 30, width: 30}}/>JustPizza
                </a>
                <button className="navbar-toggler border-secondary border-opacity-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav gap-1 gap-md-4 m-2 m-lg-0">
                        <li className="nav-item fw-semibold"><NavLink to="/">Home</NavLink></li>
                        <li className="nav-item fw-semibold"><NavLink to="/about">About</NavLink></li>
                        <li className="nav-item fw-semibold"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar