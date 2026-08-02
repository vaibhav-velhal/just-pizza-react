import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return(
        <main className="h-100">
            <div className="login-page h-100 d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-center">Login</h1>
                    <form
                        action="#"
                        // onSubmit={handleLogin}
                    >
                        <div className="card px-2 py-3 shadow-sm rounded-4">
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
                                <div className="login-button text-center">
                                    <button className="btn btn-primary" type="submit">
                                        Login
                                    </button>
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