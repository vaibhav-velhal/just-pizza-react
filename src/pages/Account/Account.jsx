import { Link } from 'react-router-dom';
import { PiChefHatThin } from "react-icons/pi";

function Account() {

    const token = JSON.parse(localStorage.getItem("token"));
    
    return(

        <section>
            <header>
                <div className="container text-center mt-5">
                    <PiChefHatThin size={40} style={{color: "#df2620"}} />
                    <h1 className="fw-semibold">My Account</h1>
                    <h2 className="fs-5 text-secondary">Manage your profile, orders and more.</h2>
                </div>
            </header>

            {
                token ? 
                    ("") : 
                    (
                        <section>
                            <div className="text-center mt-4">
                                <p className="m-0">Please login to see details...</p>
                                <Link to="/login">Login here...</Link>
                            </div>
                        </section>
                    )
            }

        </section>
    )
}

export default Account;