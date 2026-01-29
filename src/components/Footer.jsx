import { FaInstagram, FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import '../styles/Footer.css';

function Footer() {

    return(
        <div className="footer pb-2 pt-4 text-light">

            <div className="footer-content">
                <div className="footer-content-left">
                    <h2 className="fw-semibold">JustPizza</h2>
                    <p className="mb-2">
                        JustPizza serves delicious, freshly made pizzas crafted with quality ingredients. From classic flavors to exciting combinations, there's a slice for everyone.                    </p>
                    <div className="links">
                        <a href="/" className="text-light">Terms of Service</a>
                        <a href="/" className="text-light" id="privacy-link">Privacy Policy</a>
                    </div>                    
                </div>

                <div className="footer-content-right">
                    <h4 className="fw-semibold">Get in touch</h4>
                    <p className="m-0"><IoCall className="mb-1" size={20} /> +91-705-820-4125</p>
                    <p className="m-0"><IoIosMail className="mb-1" size={22} /> contact@justpizza.com</p>
                    <div className="social-links mt-3">
                        <a href="https://www.instagram.com/" target="_blank" className="text-light"><FaInstagram className="icon" /></a>
                        <a href="https://x.com/" target="_blank" className="text-light"><FaXTwitter className="icon" /></a>
                        <a href="https://www.facebook.com/" target="_blank" className="text-light"><FaFacebook  className="icon"/></a>
                        <a href="https://www.linkedin.com/" target="_blank" className="text-light"><FaLinkedin  className="icon"/></a>
                    </div>
                </div>
            </div>

            <hr className="mx-md-5 mx-3"/>
            
            <p className="m-0 text-center">
                &copy; {new Date().getFullYear()} <a href="/" className="text-light">JustPizza.com</a> - All Rights Reserved
            </p>
        </div>
    )
}

export default Footer;