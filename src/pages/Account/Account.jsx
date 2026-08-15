import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import { IoPerson } from 'react-icons/io5';

function Account() {

    

    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="container text-center p-3" style={{marginTop: "80px", minHeight : "100vh"}}>
                    <h1 className='fs-3'><IoPerson className='mb-2' /> Profile</h1><hr />
                    <div className="account-details">
                        <p>Name: Guest</p>
                    </div>
                </div>
            </main>           
            <Footer />
        </>
    )
}

export default Account;