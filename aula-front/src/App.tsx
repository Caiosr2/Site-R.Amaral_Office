import styled from "styled-components"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import './App.css'


function App() {

  return (
    <>
      <DashboardStyle>
      <ImageStyle src="src/assets/insper.jpeg" alt="Descrição da imagem" />
      <H1Style>"Handout Front-End”
      </H1Style>
      <H2Style>"Introdução básica
      ao front-end"</H2Style>
      <Parag> Atividade Pratica </Parag>
      </DashboardStyle>

    </>
  )
}

export default App

const DashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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