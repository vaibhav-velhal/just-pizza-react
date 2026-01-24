import { FaInstagram, FaXTwitter, FaFacebook, FaLinkedin } from "react-icons/fa6";
import '../styles/Footer.css';

function Footer() {

    return(
        <div className="footer mt-auto py-1 text-center text-light">
            <div className="social-links gap-4">
                <a href="https://www.instagram.com/" target="_blank" className="text-light"><FaInstagram className="icon" />Instagram</a>
                <a href="https://x.com/" target="_blank" className="text-light"><FaXTwitter className="icon" />X.com</a>
                <a href="https://www.facebook.com/" target="_blank" className="text-light"><FaFacebook  className="icon"/>Facebook</a>
                <a href="https://www.linkedin.com/" target="_blank" className="text-light"><FaLinkedin  className="icon"/>LinkedIn</a>
            </div>
            <hr className="m-2 mx-md-5 mx-3"/>
            <p className="m-0">&copy; {new Date().getFullYear()} <a href="/" className="text-light">JustPizza</a></p>
            <ul className="d-flex justify-content-center gap-2 m-0 p-0">
                <li className="list-item"><a href="/" className="text-light">Terms of Service</a></li>
                <li className="list-item"><a href="/" className="text-light">Privacy Policy</a></li>
            </ul>
        </div>
    )
}

export default Footer;