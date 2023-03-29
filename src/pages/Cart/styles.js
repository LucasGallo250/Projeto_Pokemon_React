import styled from "styled-components";

import { darken } from "polished";

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 10px;
  max-width: 70vw;
  margin: auto;

  .shipping{
    margin-top: 40px;
    display: flex;
    width: 100%;
    padding: 5px;
    justify-content: space-between;

    select{
      width: 250px;
      height: 40px;
    }

    .botao_pedido{
      background: #5960c1;
      color: #fff;
      font-size: 15px;

      border: 0;
      border-radius: 5px;
      padding: 12px 20px;

      &:hover{
        background: ${darken(0.1, "#5960c1")};
        transition: 0.3s;
      }

    }

    img{
      width: 120px;
      height: auto;
    }
  }
  .checkout {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    align-items: center;

    button {
      background: #5960c1;
      color: #fff;
      border: 0;

      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, "#5960c1")};
      }
    }
  }
`;

export const TableProducts = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: center;
    padding: 14px;
  }

  tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #eee;

    div.image {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    /* display: block; */
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 8px;
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: #999;
    font-weight: bold;
    font-size: 15px;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
