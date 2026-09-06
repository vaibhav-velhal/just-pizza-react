import { useNavigate, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const token = JSON.parse(localStorage.getItem("token"));
    const userId = localStorage.getItem("userId");

    const navigate = useNavigate();


    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");

        if(confirmLogout) {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            navigate("/");
        }
    };

    const authButton = token ? (
                                    <button
                                        className="btn btn-outline-dark rounded-pill px-3 py-1"
                                        type="button"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <NavLink
                                        className="btn btn-outline-dark rounded-pill px-3 py-1"
                                        to="/login"
                                    >
                                        Login
                                    </NavLink>
                                );

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid px-md-5">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <a href="/" className="navbar-brand mx-auto mx-lg-0 fs-4 fw-semibold">
                    <img src="./../../../logo.png" alt="JustPizza-logo" className="mb-1" style={{height: 30, width: 30}}/>JustPizza
                </a>

                <div className="collapse navbar-collapse justify-content-between ms-2 ms-lg-0" id="navbarNav">
                    <ul className="navbar-nav mx-auto gap-1 gap-md-4">
                        <li className="nav-item fw-semibold">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="nav-item fw-semibold">
                            <NavLink to="/menu">Menu</NavLink>
                        </li>
                        <li className="nav-item fw-semibold">
                            <NavLink to="/about">About</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav align-items-lg-center my-2 my-lg-0 gap-1 gap-md-4">
                        <li className="nav-item fw-semibold">
                            <NavLink to={`/account/${userId}`} className="account-btn px-3 py-2 text-light fw-semibold rounded-2">Account</NavLink>
                        </li>
                        <li className="nav-item">
                            <div className="auth-btn d-none d-lg-block">
                                {authButton}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="d-lg-none ms-2 ms-lg-0">
                    {authButton}
                </div>
            </div>
        </nav>
    )
}

export default Navbar