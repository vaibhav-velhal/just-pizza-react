import { PiChefHatThin } from "react-icons/pi";
import designImage from "./../../assets/about-page-images/about-page-design.png";
import "./About.css";

function About() {
  return (
    <section>
      <header>
        <div className="about-page-header">
          <div className="header-content">
            <div className="heading text-center">
              <PiChefHatThin size={40} style={{ color: "#df2620" }} />
              <h1 className="fw-semibold m-0">About Us</h1>
              <div className="image-container mb-2">
                <img src={designImage} alt="Design Image" style={{width: 200}} />
              </div>
            </div>
            <h2 className="fs-5 text-secondary mb-3">
              At JustPizza, we believe in serving more than just pizza. We serve
              happiness!
            </h2>
            <h3 className="fs-5 text-secondary">
              Every pizza is made with the freshest ingredients, authentic
              recipes and a lot of love. Our mission is to deliver the best
              pizza experience to your door.
            </h3>
          </div>
        </div>
      </header>

    </section>
  );
}

export default About;
