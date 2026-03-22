import '../styles/Home.css';
import MenuSection from '../components/MenuSection';

function Home() {

    return(
        <div id='home-page' className="container-fluid">
            <div className="headerContainer rounded-3">
                <div className="welcome-text">
                    <h1 className='m-0 fw-bold'>Welcome to JustPizza</h1>
                    <p className='m-0 fw-light'>A Slice for Everyone</p>
                </div>
            </div>
            <div className="menuContainer">
                <MenuSection />
            </div>
        </div>
    )
}

export default Home;