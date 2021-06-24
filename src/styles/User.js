import styled from "styled-components";
import StyledComponent from "styled-components";
const media = {
  mobile: `@media(max-width: 40em)`,
  tablet: `@media(min-width: 40em) and (max-width: 75em)`,
  bigScreen: `@media (min-width: 75em)`,
};

export const user = styled.div`
  .img {
    max-width: 100%;
    height: auto;
  }

  .images-collection {
    height: auto
    margin: 0.5rem
  }
  

  .images-collection img{
    width: 100%;
    display: block;
    -webkit-filter: grayscale(1);
    filter: grayscale(0);
    transition: all 100ms ease-out;
  }
    .images-collection img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        //margin-bottom: 1em;
        margin: 1em 0em;
        cursor: pointer;
    }

    .images-collection img:hover {
      transform: scale(1.04);
      -webkit-filter: grayscale(0);
      filter: grayscale(0);
    }

    ${media.tablet}{

        .container{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-template-rows: repeat(5, 300px);
            grid-auto-flow: row dense;
        }
        .images-collection{
            margin:1em; 
        }
    
        .images-collection img{
            
        }
    } 

    ${media.bigScreen}{
      
        .container{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-template-rows: repeat(5, auto-flow);
            grid-template-rows: repeat(5, auto-flow);
        }

        .images-collection{
            margin:1em; 
        }
    
    }
  
`;
