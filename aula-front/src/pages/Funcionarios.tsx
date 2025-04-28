import { Link } from "react-router-dom";
import styled from "styled-components";
import predio from "../assets/predio.png";
import { FiArrowLeft } from 'react-icons/fi';

const Funcionarios = () => {
  return (
    <Page>
      <Wrapper>
        <Left>
          <img src={predio} alt="Insper" />
        </Left>

        <Right>
          <Card>
            <StyledLink to="/">
              <FiArrowLeft size={20} />
              <span>Voltar</span>
            </StyledLink>
            <h2>Área do Funcionário</h2>

            <label htmlFor="usuario">Usuário</label>
            <input id="usuario" type="text" placeholder="Digite seu usuário" />

            <label htmlFor="senha">Senha</label>
            <input id="senha" type="password" placeholder="Digite sua senha" />

            <SubmitButton to="/uso-interno">
              Entrar
            </SubmitButton>
          </Card>
        </Right>
      </Wrapper>
    </Page>
  );
};

export default Funcionarios;

// Styled Components

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: #f9f9f9;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  font-family: 'Georgia', serif;
  margin: 0;
  padding: 0;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    min-height: 100vh;
  }
`;

const Left = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      max-height: 200px;
      object-fit: cover;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 30vh;
    max-height: 200px;
  }
`;

const Right = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    flex: none;
    padding: 1.5rem 1rem;
  }
`;

const Card = styled.div`
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2c3e3b;
    font-weight: bold;
    text-align: center;
  }

  label {
    font-weight: 600;
    font-size: 0.95rem;
    color: #000;
  }

  input {
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    padding: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2c3e3b;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 1rem;
  width: fit-content;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
    text-decoration: underline;
  }
`;

const SubmitButton = styled(Link)`
  display: block;
  text-align: center;
  background-color: #2c3e3b;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #1f2b29;
  }
`;
