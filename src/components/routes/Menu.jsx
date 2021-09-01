import React from 'react';
import { MenuSubtitle, MSubtitle } from '../../styles/app';
import { Link } from 'react-router-dom';

export default function Menu(){
  return(
    <>
      <div className="menu-title">
        <MSubtitle>Bem-Vindos ao Vacinômetro Flex</MSubtitle>
      </div>
      <div className="menu">
      <Colaborador />
      <Vacinas />
      </div>
    </>
  )
}

export function Colaborador(){

  return(
    <>
      <div className="option-col">
        <MenuSubtitle>Cadastro de Colaboradores</MenuSubtitle>
        <Link to="/colaborador" className="menu-button">Acessar</Link>
      </div>
    </>
  )
}

export function Vacinas(){

  return(
    <>
    <div className="option-vac">
      <MenuSubtitle>Controle de Colaboradores</MenuSubtitle>
      <Link to="/controle" className="menu-button">Acessar</Link>
    </div>
    </>
  )
}