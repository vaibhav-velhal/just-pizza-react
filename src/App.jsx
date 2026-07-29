import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

function App() {

  return (
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
      </Suspense>
      <Footer />
    </>
  )
}

export default App;
