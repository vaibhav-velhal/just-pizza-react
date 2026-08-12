import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/auth/auth.api.js";


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
            <div className="register-page h-100 d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="text-center">Register</h1>
                    <form
                    action=""
                    className="card p-4 shadow rounded-4"
                    onSubmit={handleRegistration}
                    >
                    <div className="d-flex gap-4 mb-3">
                        <div className="first-name">
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
                    <div className="d-flex gap-4 mb-4">
                        <div className="age">
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
                    <div className="d-flex gap-4 mb-4">
                        <div className="email">
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
                        <button className="btn btn-primary" type="submit">Add Employee</button>
                    </div>
                    <div className="desc text-center">
                        <p className="m-0">
                            Already have an account?{" "}
                            <a href="/login">Login here</a>
                        </p>
                    </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Register;