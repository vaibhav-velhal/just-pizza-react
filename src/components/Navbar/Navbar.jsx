import "./Navbar.css";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { IoPerson } from "react-icons/io5";

function Navbar() {
    const token = JSON.parse(localStorage.getItem("token"));
    const userId = localStorage.getItem("userId");

    const [sticky, setSticky] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");

        if(confirmLogout) {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            navigate("/");
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg fixed-top ${sticky ? 'dark-nav' : ''} ${isHomePage ? '': 'dark-nav'}`}>
            <div className="container px-4 px-md-0">
                <a href="/" className="navbar-brand me-4 fs-4 fw-semibold">
                    <img src="./../../../logo.png" alt=""className="me-1 mb-2" style={{height: 30, width: 30}}/>JustPizza
                </a>
                <button className="navbar-toggler border-secondary border-opacity-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav align-items-center gap-1 gap-md-4 m-2 m-lg-0">
                        {
                            isHomePage ? ( 
                            <>
                                <li className="nav-item fw-semibold">
                                    <a href="#header">Home</a>
                                </li>
                                <li className="nav-item fw-semibold">
                                    <a href="#menu">Menu</a>
                                </li>
                                <li className="nav-item fw-semibold">
                                    <a href="#about">About</a>
                                </li>
                                <li className="nav-item fw-semibold">
                                    <a href="#footer">Contact</a>
                                </li>
                                <li className="nav-item fw-semibold">
                                    <NavLink to={`/account/${userId}`}>
                                            <IoPerson className="fs-5 mb-1 me-1" />Account
                                    </NavLink>
                                </li>
                            </>
                            ) : (
                                <>
                                    <li className="nav-item fw-semibold">
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item fw-semibold">
                                        <NavLink to={`/account/${userId}`}>
                                            <IoPerson className="fs-5 mb-1 me-1" />Account
                                        </NavLink>
                                    </li>
                                </>
                            )
                        }
                    </ul>
                    <ul className="navbar-nav ms-lg-4">                        
                        <li className="nav-item fw-semibold">
                            {
                                token ? 
                                    <button className="auth-btn btn btn-outline-light rounded-pill px-3 py-1" type="button" onClick={handleLogout}>Logout</button>
                                :
                                    <NavLink className="auth-btn btn btn-outline-light rounded-pill px-3 py-1" to="/login">Login</NavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar