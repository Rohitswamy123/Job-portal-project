import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src="{logo}" alt="jobify" className="logo" />
        <h1>landing page</h1>
      </nav>
    </Wrapper>
  );
};
export default Landing;
