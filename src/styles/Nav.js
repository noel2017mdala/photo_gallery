import styled from "styled-components";
import image from "../images/landing2.jpg";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Nav = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
  padding-top: 1em;
  margin-bottom: 1em;

  .navigation {
    display: none;
  }

  .header {
    font-family: sans;
    text-align: center;
    // font-weight: normal;
    font-size: 0.9em;
    text-transform: uppercase;
    margin-top: 4em;
    color: white;
  }

  ${media.tablet} {
    height: 65vh;
  }

  ${media.bigScreen} {
    height: 65vh;
  }
`;
