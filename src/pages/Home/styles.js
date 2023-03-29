import styled from "styled-components";
import { darken } from "polished";
export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  list-style: none;  

  max-width: 90vw;
  margin: auto;
`;

/*cartão*/
export const Product = styled.li`
  display: flex;
  flex-direction: column;

  border: transparent;
  border-radius: 20px;

  border-radius: 10px;
  background: #efefef;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.473);
  padding: 20px;
  transition: transform 0.1s linear;

  &:hover {
    transform: scale(1.02);
  }

  img {
    max-width: 200px;
    align-self: center;
    width: 200px;
  }

  > strong {
    text-align: center;
    font-size: 20px;
    line-height: 20px;
    color: #333;
    margin-top: 5px;
  }

  > span {
    font-size: 20px;
    font-weight: bold;
    margin: 5px 0 10px;
    /*text-align: center;*/
  }

  button {
    background: #5960c1;
    color: #fff;

    border-radius: 10px;
    border: 0;

    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, "#5960c1")};
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 10px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }

    .adicionar{
      font-size: 16px;
    }
  }
`;

export const Paginate = styled.div`
  .paginate{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /*align-items: center;*/
    padding: 10px;
    margin: 22px;
    margin-top: 40px;
  }

  .paginate_ant{
    background-color: #17a1cf;
    border-color: #89defa;
    color: #1d3138;
    height: 45px;
    padding: 10px;
    margin: 5px;

    font-size: 15px;
    font-family: 'Nabla', cursive;
    
    border-radius: 10px;
    border-style: solid;
    border-color: #93def7;
  }

  .paginate_ant:hover{
    transition: 0.3s;
    background-color: #51f0c5;
    border-color: #09f1b4;
    color: #054938;
}

  .paragrafo{
    
    color: #fff
  }
`