import { Link } from "react-router-dom";
import { qualitiesSection } from "../../data/qualitiesSection";
import "./Home.css";

function Home() {

    return(
        <>
            <header>
                <div id="header" className="header header-container">
                    <div className="container-fluid hero-content">
                        <h1 className='text-light fw-bold'>
                            Hot <span className='header-small-text'>Pizza.</span> <br />
                            <span className='header-small-text'>Great Taste.</span> <br />
                            Delivered Fast.
                        </h1>
                        <p className='fw-semibold mb-4 text-secondary'>Delicious pizzas made with fresh ingredients and love. Order now and enjoy!</p>

                        <div className="header-btn-section">
                            <Link className="btn py-2 px-3 me-3 order-btn text-light fw-semibold" to="/menu">Order Now</Link>
                            <Link className="btn py-2 px-3 btn-outline-light" to="/menu">View Menu</Link>
                        </div>
                    </div>
                </div>
            </header>

            <section>

                <section>
                    <div className="container qualities-section my-5">
                        <div className="row">
                            {
                                qualitiesSection.map((item, index) => {
                                    return(
                                        <div className="col-3 text-center" key={index}>
                                            <div className="img-container mb-3">
                                                <img src={item.img} alt={item.name} />
                                            </div>
                                            <h2 className="fw-semibold fs-6 mb-1">{item.name}</h2>
                                            <p className="text-secondary">{item.subText}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

            </section>
        </>
    )
}

export default Home;