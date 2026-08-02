import { Suspense, lazy } from 'react';
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
// import Header from './../../components/Header/Header';
// import Menu from './../../components/Menu/Menu';
// import About from './../../components/About/About';

const Header = lazy(() => import("./../../components/Header/Header"));
const Menu = lazy(() => import("./../../components/Menu/Menu"));
const About = lazy(() => import("./../../components/About/About"));

function Home() {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <Suspense fallback={
                <div className="text-center" style={{ marginTop: "80px" }}>
                    <div className="spinner-border" role="status"></div>
                </div>
            }>
            <main>
                <div className="main-content">
                    <Header />
                    <Menu />
                    <About />
                </div>
            </main>
            </Suspense>            
            <Footer />
        </>
    )
}

export default Home;