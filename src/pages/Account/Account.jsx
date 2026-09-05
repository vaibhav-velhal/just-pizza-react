import { useNavigate, Link, useParams } from 'react-router-dom';
import { PiChefHatThin } from "react-icons/pi";
import { IoPerson } from 'react-icons/io5';
import { BiFoodMenu } from "react-icons/bi";
import { RiLogoutCircleRLine, RiLoginCircleLine } from "react-icons/ri";

function Account() {

    const token = JSON.parse(localStorage.getItem("token"));
    const params = useParams();
    const userId = params.userId;

    const navigate = useNavigate();

    // Logout button
    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");

        if(confirmLogout) {
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            navigate("/");
        }
    };
    
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

            <section>
                <div className="container-fluid px-lg-5 mt-4 mt-md-5 mb-5">
                    <div className="row flex-column-reverse flex-lg-row justify-content-center gap-3">
                        <div className="col-12 col-md-2 mb-4 mb-lg-0">
                            <div className="card shadow-sm border border-opacity-10 rounded-4">
                                <div className="card-body d-flex flex-column">
                                    <Link className="btn btn-danger profile-btn text-start" to={`/account/${userId}`}>
                                        <IoPerson className="mb-1 me-1" size={20} />Profile
                                    </Link>
                                    <hr className="my-2"/>
                                    <Link className="btn my-orders-btn text-start"><BiFoodMenu className="mb-1 me-1" size={20} />My Orders</Link>
                                    <hr className="my-2"/>
                                    {
                                        token ? 
                                        (
                                            <button 
                                                className="btn logout-btn text-start" type="button" 
                                                onClick={handleLogout}
                                            >
                                                <RiLogoutCircleRLine className="mb-1 me-1" size={20} />
                                                Logout
                                            </button>
                                        ) :
                                        (
                                            <Link className="btn logout-btn text-start" to="/login">
                                                <RiLoginCircleLine className="mb-1 me-1" size={20} />
                                                Login
                                            </Link>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default Account;