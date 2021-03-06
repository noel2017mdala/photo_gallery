import styled from "styled-components";
import StyledComponent from "styled-components";

const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const main = styled.div`
  color: black;
   

  .img{
    max-width: 100%;
    height: auto;
  }

  .image-item {
    height: auto
    margin: 0.5rem;  
  }

  .image-item img {
   width: 100%;
   height: 100%;
   object-fit: cover;
  }

  ${media.tablet}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 300px);
    grid-auto-flow: row dense;

    .image-item{
      margin:1em;
    }
    // .image-item:first-child{
    //   grid-row: span 1;
    // }
    // .image-item:nth-child(2){
    //   grid-column: 2/3;
    //   grid-row: span 2;
    // }
  }

  ${media.bigScreen}{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, auto-flow);

    .image-item{
      margin:1em;
    }
  }
`;
