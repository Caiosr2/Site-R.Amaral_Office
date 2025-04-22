import styled from "styled-components";
import orcamento from "../assets/orcamento.png"; // adicione uma imagem no seu projeto
import { useState } from "react";
import { Link } from 'react-router-dom';

const Orcamento = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPopupVisible(true);
  };

  return (
    <PageWrapper>
      <Title>Solicite um Orçamento</Title>

      <FormCard as="form" onSubmit={handleSubmit}>
        <FormSection>
          <label>Nome</label>
          <input type="text" placeholder="Digite seu nome completo" />

          <label>Email</label>
          <input type="email" placeholder="exemplo@email.com" />

          <label>Empresa</label>
          <input type="text" placeholder="Nome da empresa" />

          <label>CPF/CNPJ</label>
          <input type="text" placeholder="000.000.000-00" />

          <label>Número de celular</label>
          <input type="tel" placeholder="(00) 00000-0000" />
        </FormSection>

        <SideInfo>
          <FormSection>
            <label>Orçamento</label>
            <textarea placeholder="Descreva o que deseja para seu orçamento" rows={18} />
            <SubmitButton type="submit">Enviar</SubmitButton>
          </FormSection>
        </SideInfo>
      </FormCard>

      {popupVisible && (
        <PopupOverlay>
          <PopupBox>
            <h2>Orçamento Enviado!</h2>
            <p>Obrigado por sua solicitação. Um de nossos gerentes entrará em contato através do e-mail enviando mais informações.</p>
            <Link to='/'>Voltar à Página Principal</Link>
          </PopupBox>
        </PopupOverlay>
      )}
    </PageWrapper>
  );
};

export default Orcamento;

// Styled Components

const PageWrapper = styled.div`
  padding: 4rem 2rem;
  background-color: #f4f4f4;
  min-height: 100vh;
  font-family: "Playfair Display", serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2.4rem;
  color: #243436;
`;

const FormCard = styled.form`
  display: flex;
  flex-wrap: wrap;
  background: white;
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  max-width: 1200px;
  width: 100%;
  gap: 3rem;
  justify-content: space-between;
`;

const FormSection = styled.div`
  flex: 1 1 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-weight: 600;
    color: #344a4b;
    margin-top: 0.5rem;
  }

  input,
  textarea {
    padding: 0.8rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
    font-family: inherit;
  }

  textarea {
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: #e65c00;
  color: white;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    background-color: #344a4b;
  }
`;

const SideInfo = styled.div`
  flex: 1 1 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopupBox = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  max-width: 520px;
  width: 90%;
  text-align: center;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.25);

  h2 {
    color: #243436;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    color: #444;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  a {
    display: inline-block;
    background-color: #e65c00;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
      background-color: #344a4b;
    }
  }
`;