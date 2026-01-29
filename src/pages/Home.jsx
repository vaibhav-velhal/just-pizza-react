import '../styles/Home.css';
import Menu from './Menu';

function Home() {

    return(
        <div id='home-page' className="container-fluid p-3 pb-5 p-md-5 pb-md-5 mb-5">
            <div className="headerContainer rounded-3">
                <div className="welcome-text">
                    <h1 className='m-0 fw-bold'>Welcome to JustPizza</h1>
                    <p className='m-0 fw-light'>A Slice for Everyone</p>
                </div>
            </div>
            <div className="menuContainer">
                <Menu />
            </div>
        </div>
    )
}

export default Home;