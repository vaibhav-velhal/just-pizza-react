import './Header.css';

function Home() {

    return(
        <div id="header" className="header header-container">
            <div className="container header-text">
                <h1 className='m-0 text-light fw-bold'>
                    Hot <span className='header-small-text'>Pizza.</span> <br />
                    <span className='header-small-text'>Great Taste.</span> <br />
                    Delivered Fast.
                </h1>
                <p className='text-secondary'>Delicious pizzas made with fresh ingredients and love. Order now and enjoy!</p>
            </div>
        </div>
    )
}

export default Home;