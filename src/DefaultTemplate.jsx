import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function DefaultTemplate() {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultTemplate;