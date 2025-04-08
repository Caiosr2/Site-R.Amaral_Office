import styled from "styled-components"
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import './App.css'

const DashboardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #e9e4e4;
  font-family: Arial, sans-serif;
`


const H1Style = styled.h1`
  color: red;

`
const H2Style = styled.h2`
  color: grey;
  
`
const ImageStyle = styled.img`
  width: 40%;
  height: auto;
  margin: 5rem;
`
function App() {

  return (
    <>
      <div>
      <ImageStyle src="src/assets/insper.jpeg" alt="Descrição da imagem" />
      </div>
      <H1Style>"Handout Front-End”
      </H1Style>
      <H2Style>"Introdução básica
      ao front-end"</H2Style>
      <p> Atividade Pratica </p>

    </>
  )
}

export default App
