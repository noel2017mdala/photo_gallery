import styled from "styled-components";
import image from "../images/landing2.jpg";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const SearchBar = styled.div`
  display: grid;
  place-items: center;
  margin-top: 2em;

  //set margin-top: 4 on big screen

  input {
    padding: 1em 0;
    width: 80%;
  }

  .search {
    display: block;
    color: white;
    background-color: red;
    border: none;
    margin-top: 2em;
    padding: 1em 3em;
    border-radius: 0.5em;
    text-transform: uppercase;
  }

  ${media.tablet} {
    display: grid;
    place-items: center;
    margin-top: 1em;

    input {
      width: 50%;
    }
  }

  ${media.bigScreen} {
    input {
      width: 40%;
    }
  }
`;
