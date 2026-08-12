import MultiplePizzas from "/multiplePizzas.jpeg";
import "./About.css";

function About() {
  return (
    <div id="about" className="about container text-center">
      <h1 className="fw-normal">About Us</h1>
      <hr />
      {/* Design 1 */}
      {/* <div className="about-content row">
        <div className="col-12 col-md-6 d-flex align-items-center">
          <div className="image-container rounded-4">
            <img src={MultiplePizzas} alt="about-image" />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex align-items-center">
          <p className="about-desc px-3 rounded-4">
            At JustPizza, we believe great pizza starts with quality ingredients
            and a passion for flavor. Every slice we serve is crafted with fresh
            dough, rich sauces, and premium toppings to deliver an unforgettable
            taste. Whether you prefer classic flavors or adventurous combinations,
            our menu has something for everyone. We aim to provide delicious food,
            quick service, and a warm experience that keeps you coming back for
            more.
          </p>
        </div>
      </div> */}
      
      {/* Design 2 */}
      <div className="about-content d-flex justify-content-center">
          <div className="image-container mt-3 rounded-3">
            <img src={MultiplePizzas} alt="about-image" />
            <p className="about-desc pb-0 pb-md-2 px-3 mx-3 rounded-4">
              At JustPizza, we believe great pizza starts with quality ingredients
              and a passion for flavor. Every slice we serve is crafted with fresh
              dough, rich sauces, and premium toppings to deliver an unforgettable
              taste. Whether you prefer classic flavors or adventurous combinations,
              our menu has something for everyone. We aim to provide delicious food,
              quick service, and a warm experience that keeps you coming back for
              more.
            </p>
          </div>
      </div>
    </div>
  );
}

export default About;
