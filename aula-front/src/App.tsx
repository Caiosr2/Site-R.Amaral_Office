import styled from "styled-components"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import './App.css'
import Header from "./header"
import { IStyledComponent } from "styled-components"
import { Link } from "react-router-dom";

function App() {

  return (
    <>
    <Header/>
      <DashboardStyle>
        <ImageStyle src="src/assets/insper.jpeg" alt="Descrição da imagem" />
    
        <H2Style>"Introdução básica
        ao front-end"</H2Style>
        <Parag> Atividade Pratica </Parag>
      </DashboardStyle>
    <Link to="/tela_2">Ir para Tela 2</Link>


    </>
  )
}

export default App

const DashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  height: 100vh;
  background-color: white;
  font-family: Arial, sans-serif;
`

const H1Style = styled.h1`
  color: red;
  font-size: 2rem;

`
const H2Style = styled.h2`
  color: grey;
  align-items:center;
  font-size: 2rem;
  
  
`
const ImageStyle = styled.img`
  width: 30%;
  height: auto;
  margin: 5rem;
`
const Parag = styled.p`
  color:black;`