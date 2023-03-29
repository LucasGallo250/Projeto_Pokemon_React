import React from 'react';

import github from "../../assets/images/github.png";
import insta from "../../assets/images/insta.png";
import linkedin from "../../assets/images/linkedin.png";

import { FooterContent } from './styles';
import LuizaCode from '../../assets/images/pokeboll.png'

function Footer(){
  const dateNow = new Date();
  return(
    <>
      <div className="mt-20" />
      <div className="multi-colors"/>
    
      <FooterContent>
        <div className="content">
          <img src={LuizaCode} alt="Logo do Grupo" />

          <div className="social-icons">
        <a
          href="https://github.com/LucasGallo250"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={github} alt="github"></img>
        </a>
        <a
          href="https://www.instagram.com/lucasgallo37/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={insta} alt="instagram"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-gallo-71883b186/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="social" src={linkedin} alt="linkedin"></img>
        </a>
        </div>

          <p>Este é um projeto acadêmico desevolvido na Luiza Labs | { dateNow.getFullYear() } © Todos os direitos reservados.</p>
          <p>LuizaLabs {'&'} GamaAcademy | Lucas Gallo</p>
        </div>
      </FooterContent>
    </>
  )
}

export default Footer