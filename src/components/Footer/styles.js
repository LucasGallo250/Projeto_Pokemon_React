import styled from "styled-components";

export const FooterContent = styled.footer`
  width: 100%;
  position: inherit;
  bottom: 0;
  display: flex;
  background-color: #240B3B;
  
  .content{
    padding: 30px;
    width: 70vh;
    margin: auto;
    text-align: center;
    color: #fff;
    & img {
      max-width: 150px;
      height: auto;
      margin-bottom: 10px;
    }

    p{
      font-size: 12px;
      font-weight: normal;
    }
  }
`