import styled from "styled-components";
import StyledComponent from "styled-components";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const Mobile = styled.div`
margin: 1em;


.image-cover {
    height: auto
    margin: 0.5rem;
  }

.content .description{
    text-align: center;
    text-transform: uppercase;
}
  img {
    width: 100%;
    height: auto;
  }

  .extra-content{
    margin-top: 1em;
  }

  .user_tag{
      display: inline;
      margin 0 0.5em;
      text-decoration: none;
      color: white;
      background-color:black;
      padding: 0.5em;
      border-radius: .5em;
      text-transform: capitalize;
  }
  .instagram_logo{
      margin-left: 0.3em;
      display: inline;
  }
  .instagram_logo img{
    width: 30px;
    margin: auto;
    display:inline-block;
    display: none;
  }

  ${media.tablet}{

    .image-cover {
      width: 70%;
      height: auto;
      margin: 0 auto;
      // background-color: red;
    }

    img {
      width: 100%;
      height: auto;
      // display: none;
    }
  }
`;
