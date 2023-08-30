import "./About.css";
import photo35 from "../../assets/images/photo35.jpg";
import photo25 from "../../assets/images/photo25.jpeg";
import { useState } from "react";

export const About = () => {
  const [nav, setNav] = useState();

  return (
    <div className="About-main">
      <div className="About-section-1">
        <div className="About_container">
          <h3 className="About_write">BEST HOSPITALITY</h3>
          <p>
            Our skilled barbers are skilled in a wide range of styles and cuts
            and only use high-quality materials. We endeavor to make consumers
            feel at ease and to help them feel their best.
          </p>
          <button className="btn">Buy Us Coffee</button>
        </div>
        <div className="About_1">
          <img src={photo35} alt="about" />
        </div>
      </div>
      <div className="About-section-2">
        <div className="About_2">
          <img src={photo25} alt="about" />
        </div>
        <div className="About_container_1">
          <h3 className="About_write">IMPORTANCE OF OUR CUSTOMER</h3>
          <p>
            Our barbershop places a significant value on offering the best
            service and attention to its customers. We pay attention to their
            wants and preferences and work hard to develop our services to suit
            their standards. Our consumers are more than simply customers; they
            are members of our community.
          </p>
          <button className="btn" type="submit" onClick={() => setNav(nav)}>
            Book Section
          </button>
        </div>
      </div>
    </div>
  );
};
