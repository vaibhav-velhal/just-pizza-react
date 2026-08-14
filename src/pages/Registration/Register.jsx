import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth/auth.api.js";
import "./register.css";


function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState("");

    const navigate = useNavigate();

    const handleRegistration = async (event) => {
        event.preventDefault();

        const userData = {
            firstName,
            lastName,
            age,
            email,
            password,
            country
        };

        try {
            const res = await registerUser(userData);

            alert(res.msg);

            setFirstName("");
            setLastName("");
            setAge("");
            setCountry("");
            setEmail("");
            setPassword("");

            if(res.msg === "User has inserted successfully!") {
                navigate("/login");
            }
        } catch(error) {
            if (!navigator.onLine) {
                alert("Please check your internet connection");
            } else {
                alert(error.message || "Registration failed");
            }
            console.error("Registration failed:", error);
        }
    }

    return(
        <main className="h-100">
            <div className="register-page">
                <div className="registration-container">
                    <h1 className="text-center text-light">Register</h1>
                    <form onSubmit={handleRegistration} method="POST">
                        <div className="card p-4 shadow rounded-4">
                            <div className="d-md-flex gap-4 mb-3">
                                <div className="first-name mb-3 mb-md-0">
                                    <label htmlFor="firstName" className="form-label">First Name</label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        className="form-control"
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="last-name">
                                    <label htmlFor="lastName" className="form-label">Last Name</label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="d-md-flex gap-4 mb-4">
                                <div className="age mb-3 mb-md-0">
                                    <label htmlFor="age" className="form-label">Age</label>
                                    <input
                                        id="age"
                                        type="text"
                                        name="age"
                                        className="form-control"
                                        placeholder="Enter Your Age"
                                        min={18}
                                        max={65}
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="country">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <input
                                        id="country"
                                        type="text"
                                        name="country"
                                        className="form-control"
                                        placeholder="Enter Your Country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="d-md-flex gap-4 mb-4">
                                <div className="email mb-3 mb-md-0">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                </div>
                                <div className="password">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter Your Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                </div>
                            </div>
                            <div className="register-button mb-3 text-center">
                                <button className="btn btn-success px-4 rounded-pill" type="submit">Register</button>
                            </div>
                            <div className="desc text-center">
                                <p className="m-0">
                                    Already have an account?{" "}
                                    <a href="/login">Login here</a>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Register;