import { Suspense, lazy } from 'react';

const Header = lazy(() => import("./../../components/Header/Header"));
const Menu = lazy(() => import("./../../components/Menu/Menu"));
const About = lazy(() => import("./../../components/About/About"));

function Home() {
    return(
        <>
            <Suspense fallback={
                <div className="text-center" style={{ marginTop: "80px" }}>
                    <div className="spinner-border" role="status"></div>
                </div>
            }>
                <div className="main-content">
                    <Header />
                    <Menu />
                    <About />
                </div>
            </Suspense>
        </>
    )
}

export default Home;