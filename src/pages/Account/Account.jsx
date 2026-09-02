import { IoPerson } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { userDetails } from '../../services/user/user.api';
import { useParams, Link } from 'react-router-dom';
import { RiEdit2Fill } from "react-icons/ri";
import "./Account.css"

function Account() {

    const [userData, setUserData] = useState({});
    const token = JSON.parse(localStorage.getItem("token"));
    const params = useParams();
    const userId = params.userId;

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
    
    return(
        <>
            <div className="container account-page text-light p-3 rounded-4">
                { 
                    token ?
                        (
                            <>
                                <div className="user-details">
                                    <h1 className='text-center fs-3'><IoPerson className='mb-2' /> Profile</h1>
                                    <div className="card border-light shadow rounded-4">
                                        <div className="card-body text-start">
                                            <p>First Name: {" "}
                                            {
                                                !userData ? (<span>Loading...</span>) : (<span>{userData.firstName}</span>)
                                            }
                                            </p>
                                            <p>Last Name: {" "}
                                            {
                                                !userData ? (<span>Loading...</span>) : (<span>{userData.lastName}</span>)
                                            }
                                            </p>
                                            <p>Email: {" "}
                                            {
                                                !userData ? (<span>Loading...</span>) : (<span>{userData.email}</span>)
                                            }
                                            </p>
                                            <p>Age: {" "}
                                            {
                                                !userData ? (<span>Loading...</span>) : (<span>{userData.age}</span>)
                                            }
                                            </p>
                                            <p>Country: {" "}
                                            {
                                                !userData ? (<span>Loading...</span>) : (<span>{userData.country}</span>)
                                            }
                                            </p>
                                            <div className="btn-section text-center pt-2">
                                                <Link to="/" className='edit-btn text-light text-decoration-none'><RiEdit2Fill size={"1.15rem"} className='mb-1'/>Edit</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) :
                        (
                            <>
                                <div className="container text-center">
                                    <p className='m-0'>You are not Logged-in</p>
                                    <a href="/login"><small>Please login here</small></a>
                                </div>
                            </>
                        )
                }
            </div>
        </>
    )
}

export default Account;