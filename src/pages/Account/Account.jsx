import { userDetails } from '../../services/user/user.api';
import { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { PiChefHatThin } from "react-icons/pi";
import { IoPerson } from 'react-icons/io5';
import { BiFoodMenu } from "react-icons/bi";
import { RiLogoutCircleRLine, RiLoginCircleLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";

function Account() {

    const token = JSON.parse(localStorage.getItem("token"));
    const params = useParams();
    const userId = params.userId;

    const navigate = useNavigate();

    const orders = false;
    const [userData, setUserData] = useState({});






    useEffect(function(){
        try{
            const getUser = async () => {
                const res = await userDetails(token, userId);
                
                setUserData(res);
            };
    
            getUser();
        } catch(error) {
            console.error(error);
        }
    }, []);

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

                        <div className="col-12 col-md-8 mt-4 mt-lg-0">
                            <div className="container">
                                <section>
                                    <div className="profile-section mb-4">
                                        <div className="card shadow-sm p-3 p-md-4 px-md-5 rounded-4">
                                            <div className="card-header-content mb-3 d-flex justify-content-between align-items-center">
                                                <h2 className="fs-4">Profile Information</h2>
                                                <button className="btn btn-outline-danger px-3 py-1">Edit</button>
                                            </div>
                                            <div className="card-body p-0">
                                                <div className="profile-info d-flex align-items-center">
                                                    <div className="image-container">
                                                        <div className="border border-3 border-secondary border-opacity-75 rounded-circle mb-1 p-2">
                                                            <IoPerson className="text-secondary mb-1" size={65} />
                                                        </div>
                                                    </div>
                                                    <div className="personal-info ms-4">
                                                        <h3 className="full-name fs-5 mb-1 fw-semibold">
                                                            { userData.firstName && userData.lastName ? (<span>{userData.firstName} {userData.lastName}</span>) : (<span>Guest</span>)}
                                                        </h3>
                                                        <p className="email text-secondary mb-1">
                                                            { userData.email ? (<span>{userData.email}</span>) : (<span>abc@gmail.com</span>)}
                                                        </p>
                                                        <p className="phone text-secondary m-0">
                                                            { userData.phone ? (<span>{userData.phone}</span>) : (<span>123456789</span>)}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section>
                                    <div className="recent-orders-section mb-3 mb-lg-0">
                                        <div className="card recent-orders-container shadow-sm rounded-4">
                                            <div className="card-body p-4">
                                                <header>
                                                    <div className="header-content mb-3 d-flex justify-content-between align-items-center">
                                                        <h2 className="fs-5">Recent Orders</h2>
                                                        <button className="btn border-0 text-danger fw-semibold" disabled>View All<FaArrowRight className="mb-1 ms-2 fw-semibold" /></button>
                                                    </div>
                                                </header>
                                                {
                                                    [...Array(3)].map((_, index) => (
                                                        <div className="card mb-3 rounded-3" key={index}>
                                                            <div className="card-body d-flex justify-content-between">
                                                                <div className="order-no col-3">
                                                                    <h5 className="placeholder-glow">
                                                                        <span className="placeholder bg-secondary bg-opacity-25 col-12 col-lg-6 rounded"></span>
                                                                    </h5>
                                                                    <p className="placeholder-glow">
                                                                        <span className="placeholder bg-secondary bg-opacity-25 placeholder-sm col-6 col-lg-4 rounded"></span>
                                                                    </p>
                                                                </div>
                                                                <div className="order-total col-5 col-lg-3 text-center">
                                                                    <h5 className="placeholder-glow text-center">
                                                                        <span className="placeholder placeholder-sm bg-secondary bg-opacity-25 col-6 rounded"></span>
                                                                    </h5>
                                                                    {
                                                                        !orders ?
                                                                        (
                                                                            <div className="no-order-status">
                                                                                <p className="text-secondary m-0">No order yet...</p>
                                                                            </div>
                                                                        ) :
                                                                        (null)
                                                                    }
                                                                </div>
                                                                <div className="order-status col-3">
                                                                    <h5 className="placeholder-glow text-end">
                                                                        <span className="placeholder col-12 col-lg-6 rounded" style={{backgroundColor: "hsl(120deg 75% 80%)"}}></span>
                                                                    </h5>
                                                                    <p className="placeholder-glow text-end">
                                                                        <span className="placeholder bg-secondary bg-opacity-25 placeholder-sm col-6 col-lg-4 rounded"></span>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>                                                        
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default Account;