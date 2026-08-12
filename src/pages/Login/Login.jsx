import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/auth/auth.api.js";
import './Login.css';

function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Handle login
    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const user = await loginUser(email, password);

            localStorage.setItem("token", JSON.stringify(user.token));

            if(user.token && user.msg === "User is logged in!"){
                alert("Login successful");
                navigate("/");
            }else{
                alert("Login failed");
            }
        } catch(error) {
            if (!navigator.onLine) {
                alert("Please check your internet connection");
            } else {
                alert(error.message || "Login failed");
            }
            console.error("Login failed:", error);
        }
    }

    return(
        <main>
            <div className="login-page d-flex">
                <div className="login-container">
                    <h1 className="text-center text-light">Login</h1>
                    <form
                        action="#"
                        onSubmit={handleLogin}
                        method="POST"
                    >
                        <div className="card px-2 py-3 shadow rounded-4">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <div className="login-button mb-3 text-center">
                                    <button className="btn btn-success rounded-pill px-5" type="submit">
                                        Login
                                    </button>
                                </div>
                                <div className="desc text-center">
                                    <small>
                                        <p className="m-0">
                                            Don't have account?{" "}
                                            <a href="/register">Register here</a>
                                        </p>
                                    </small>
                                    <small><a href="/">Return to Home</a></small>                                    
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login;