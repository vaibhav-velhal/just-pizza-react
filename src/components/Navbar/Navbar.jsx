import { Link } from "react-scroll";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const token = JSON.parse(localStorage.getItem("token"));

    const [sticky, setSticky] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");

        if(confirmLogout) {
            localStorage.removeItem("token");

            navigate("/");
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            window.scrollY > 100 ? setSticky(true) : setSticky(false);
        })
    }, [])

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${sticky ? 'dark-nav' : ''}`}>
            <div className="container px-4 px-md-0">
                <a href="/home" className="navbar-brand me-4 fs-4 fw-semibold">
                    <img src="./logo.png" alt=""className="me-1 mb-2" style={{height: 30, width: 30}}/>JustPizza
                </a>
                <button className="navbar-toggler border-secondary border-opacity-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav gap-1 gap-md-4 m-2 m-lg-0">
                        <li className="nav-item fw-semibold">
                            <Link 
                                to="header" smooth={true} offset={0} duration={200} spy={true} activeClass="active"
                            >Home</Link>
                        </li>
                        <li className="nav-item fw-semibold">
                            <Link 
                                to="menu" smooth={true} offset={-70} duration={200} spy={true} activeClass="active"
                            >Menu</Link>
                        </li>
                        <li className="nav-item fw-semibold">
                            <Link 
                                to="about" smooth={true} offset={-70} duration={200} spy={true} activeClass="active"
                            >About</Link>
                        </li>
                        <li className="nav-item fw-semibold">
                            <Link 
                                to="footer" smooth={true} offset={-60} duration={200} spy={true} activeClass="active"
                            >Contact</Link>
                        </li>
                    </ul>
                    {
                        token ? 
                            <button className="btn btn-outline-light rounded-pill px-2 py-1 ms-lg-auto" onClick={handleLogout}>Logout</button>
                        :
                            <a 
                                className="btn btn-outline-light rounded-pill px-2 py-1 ms-lg-auto"
                                href="/login"
                            >Sign In</a>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar