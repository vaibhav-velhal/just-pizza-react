import React from "react";
import "../styles/Contact.css";
import { FaPhoneAlt } from "react-icons/fa";

function ContactPage() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Email sent Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id="row-div" className="row w-100 m-0">
            <div className="col-6 p-0 pizza-left-img"></div>
            <div id="form-div" className="col-md-6 p-0">
                <form onSubmit={onSubmit}>
                    <h4 className="text-center mb-3"><FaPhoneAlt className="mb-1 me-2" />Contact Us</h4>
                    <label htmlFor="name" className="form-label fw-semibold">Name:</label>
                    <input type="text" name="name" className="form-control mb-3"
                        placeholder="Enter your name" required />

                    <label htmlFor="email" className="form-label fw-semibold">Email:</label>
                    <input type="email" name="email" className="form-control mb-3"
                        placeholder="Enter your email" required />

                    <label htmlFor="message" className="form-label fw-semibold">Message:</label>
                    <textarea rows="5" name="message" className="p-2 mb-3 h-25" required ></textarea>

                    <button className="btn btn-dark" type="submit">Submit</button>
                    <span className="mt-2">{result}</span>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;