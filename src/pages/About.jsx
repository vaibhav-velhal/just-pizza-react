import MultiplePizzas from "/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {


    return (
        <div className="about">
            <div className="image-container about-image" style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className="container text-center mt-4">
                <h1 className="fw-normal">About Us</h1>
                <hr />
                <p>
                    At JustPizza, we believe great pizza starts with quality ingredients and a passion for flavor. Every slice we serve is crafted with fresh dough, rich sauces, and premium toppings to deliver an unforgettable taste. Whether you prefer classic flavors or adventurous combinations, our menu has something for everyone. We aim to provide delicious food, quick service, and a warm experience that keeps you coming back for more.
                </p>
            </div>
        </div>
    )
}

export default About;