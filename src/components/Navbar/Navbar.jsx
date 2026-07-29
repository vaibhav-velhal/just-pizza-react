import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            window.scrollY > 300 ? setSticky(true) : setSticky(false);
        })
    }, [])

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${sticky ? 'dark-nav' : ''}`}>
            <div className="container-fluid mx-md-5">
                <a href="/" className="navbar-brand me-4 fs-4 fw-semibold">
                    <img src="/JustPizza Logo.png" alt=""className="me-2 mb-1" style={{height: 30, width: 30}}/>JustPizza
                </a>
                <button className="navbar-toggler border-secondary border-opacity-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
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