import {Link} from 'react-router-dom';
import '../styles/Home.css';

function Home() {

    return(
        <div className="homePage">
            <div className="headerContainer">
                <h1 className='m-0 fw-bold'>Welcome to JustPizza</h1>
                <p className='mb-2 fw-light'>A Slice for Everyone</p>
                <Link to="/menu" className='button'>
                    <button className="btn btn-dark fw-semibold">View Menu</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;