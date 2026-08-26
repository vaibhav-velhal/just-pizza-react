import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import { IoPerson } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { userDetails } from '../../services/user/user.api';
import { useParams } from 'react-router-dom';

function Account() {

    const [user, setUser] = useState([]);
    const token = JSON.parse(localStorage.getItem("token"));
    const params = useParams();
    const userId = params.userId;
    
    useEffect(function(){
        const getUser = async () => {
            const res = await userDetails(token, userId);
            setUser(res);
        };

        getUser();
    }, []);

    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="container text-center p-3" style={{marginTop: "80px", minHeight : "100vh"}}>
                    <h1 className='fs-3'><IoPerson className='mb-2' /> Profile</h1><hr />
                    { 
                        token ?
                            (
                                <>
                                    <div className="user-details">
                                        <p>First Name: {user.firstName}</p>
                                        <p>Last Name: {user.lastName}</p>
                                        <p>Email: {user.email}</p>
                                        <p>Age: {user.age}</p>
                                        <p>Country: {user.country}</p>
                                    </div>
                                </>
                            ) :
                            (
                                <>
                                    <p>Please login <a href="/login">Login here</a></p>                                    
                                </>
                            )
                    }
                </div>
            </main>           
            <Footer />
        </>
    )
}

export default Account;