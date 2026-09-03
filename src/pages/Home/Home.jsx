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
                        <p className='mb-4 text-secondary'>Delicious pizzas made with fresh ingredients and love. Order now and enjoy!</p>

                        <div className="header-btn-section">
                            <button className="btn py-2 px-3 me-3 order-btn text-light fw-semibold">Order Now</button>
                            <button className="btn py-2 px-3 btn-outline-light">View Menu</button>
                        </div>
                    </div>
                </div>
            </header>

            <section>
                
            </section>
        </>
    )
}

export default Home;