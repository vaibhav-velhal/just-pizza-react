import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid mx-md-5">
                <a href="/" className="navbar-brand text-light fw-semibold">
                    <img src="/JustPizza Logo.png" alt=""className="me-2 mb-1" style={{height: 30, width: 30}}/>JustPizza
                </a>
                <button className="navbar-toggler border-secondary border-opacity-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end gap-4" id="navbarNav">
                    <li className="nav-item fw-semibold"><Link to="/">Home</Link></li>
                    <li className="nav-item fw-semibold"><Link to="/about">About</Link></li>
                    <li className="nav-item fw-semibold"><Link to="/contact">Contact</Link></li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar