import "./section.scss";
import sectionLogo from "../assets/svg/illustration-mockups.svg";

const Section = () => {
  return (
    <div className="d-flex justify-content-start">
      <div className="section-logo">
        <img src={sectionLogo} alt="sectionLogo" />
      </div>
      <div>
        <p className="section-title">
          Build The Community <br /> Your Fans Will Love
        </p>
        <p className="section-description">
          Huddle re-imagines the way we build communities. You <br /> have a
          voice, but so does your audience. Create <br /> connections with your
          users as you engage in genuine <br /> discussion.
        </p>
        <button className="btn-register">Register</button>
      </div>
    </div>
  );
};

export default Section;
