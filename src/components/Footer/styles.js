import styled from "styled-components";

export const FooterContent = styled.footer`
  width: 100%;
  position: inherit;
  bottom: 0;
  display: flex;
  background-color: #1b1b1b;
  
  .content{
    padding: 25px;
    width: 90vh;
    margin: auto;
    text-align: center;
    color: #fff;
    & img {
      max-width: 150px;
      height: auto;
      margin-bottom: 10px;
    }

    p{
      font-size: 16px;
      font-weight: normal;
      margin-top: 5px;
    }

    .social {
      width: 50px;
      height: 50px;
      margin: 4px;
    }
    
    .social-icons {
      display: flex;
      justify-content: center;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    
    .social:hover {
      border-radius: 50%;
      box-shadow: 0 2px 5px rgba(255, 255, 255, 0.473);
    }
  }
`