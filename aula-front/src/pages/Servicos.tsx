import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import React, { useState, ReactNode } from "react";

import iconeOrcamento from "../assets/Compra por lotes.png";
import iconeEnvio from "../assets/Caminhão Entrega.png";
import iconeDevolucao from "../assets/Setas Devolução.png";
import iconeGarantia from "../assets/Seguro e garantia.png";

type AbaKey = 'orcamentos' | 'entrega' | 'devolucao' | 'garantia';

const icones: Record<AbaKey, string> = {
  orcamentos: iconeOrcamento,
  entrega: iconeEnvio,
  devolucao: iconeDevolucao,
  garantia: iconeGarantia,
};

const BotaoLink = styled(Link)`
  display: inline-block;
  background-color: #e65c00;
  color: white !important;
  font-weight: 600;
  padding: 0.7rem 1.5rem;
  border-radius: 999px;
  text-decoration: none !important;
  font-size: 1rem;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #cf5100;
  }
`;

const servicos: Record<AbaKey, { titulo: string; texto: ReactNode }> = {
  orcamentos: {
    titulo: "Compras corporativas em lote",
    texto: (
      <>
        <p>Oferecemos soluções personalizadas para empresas que necessitam adquirir grandes volumes de móveis, equipamentos eletrônicos e materiais de escritório.</p>
        <p>Nosso atendimento é voltado para proporcionar praticidade, eficiência e economia em suas compras corporativas.</p>
        <ul>
          <li>Condições comerciais exclusivas para compras em grandes quantidades</li>
          <li>Emissão de nota fiscal e opções flexíveis de pagamento</li>
          <li>Logística adaptada à sua operação, com agendamento e entrega programada</li>
        </ul>
        <p>Entre em contato para um orçamento sob medida e descubra como podemos ajudar sua empresa a economizar tempo e recursos.</p>
        <BotaoLink to="/orcamento">Solicitar orçamento agora</BotaoLink>
      </>
    )
  },
  entrega: {
    titulo: "Envio de Pedidos",
    texto: (
      <>
        <p>Garantimos um processo de envio seguro, ágil e transparente para todo o território nacional.</p>
        <p>Atendemos tanto pedidos individuais quanto compras em larga escala, sempre com foco na satisfação e tranquilidade do cliente.</p>
        <ul>
          <li>Envios programados para empresas com logística personalizada</li>
          <li>Entrega rápida para pessoa física através de transportadoras parceiras</li>
          <li>Prazo informado no momento da compra e rastreamento em tempo real</li>
        </ul>
        <p>Nossa equipe acompanha cada etapa para assegurar que o pedido chegue em perfeitas condições, no prazo acordado.</p>
      </>
    )
  },
  devolucao: {
    titulo: "Devolução de Pedidos",
    texto: (
      <>
        <p>Nosso compromisso com a satisfação do cliente inclui um processo de devolução simples, rápido e transparente.</p>
        <p>Se por algum motivo precisar devolver seu pedido, garantimos total suporte durante toda a tratativa.</p>
        <ul>
          <li>Prazo de até 7 dias corridos após o recebimento</li>
          <li>Produto deve estar em embalagem original com nota fiscal</li>
          <li>Atendimento dedicado para orientar cada passo da devolução</li>
          <li>Opção de reembolso integral ou troca por outro item</li>
        </ul>
        <p>Em casos de erro logístico ou defeito de fabricação, o custo da devolução é 100% coberto por nós.</p>
      </>
    )
  },
  garantia: {
    titulo: "Garantia e Assistência",
    texto: (
      <>
        <p>Prezamos pela durabilidade e pleno funcionamento dos produtos que oferecemos. Por isso, disponibilizamos garantia e suporte pós-venda completo.</p>
        <p>Nossa equipe técnica está preparada para orientar e solucionar qualquer necessidade após a compra.</p>
        <ul>
          <li>Garantia legal conforme o Código de Defesa do Consumidor</li>
          <li>Suporte técnico e encaminhamento para reparos ou substituições</li>
          <li>Atendimento personalizado para esclarecer dúvidas e validar solicitações</li>
        </ul>
        <p>Conte com nossa estrutura para garantir que sua experiência continue positiva mesmo após a entrega.</p>
      </>
    )
  }
};

const PaginaServicos = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tipoParam = queryParams.get('tipo') as AbaKey | null;

const [abaSelecionada, setAbaSelecionada] = useState<AbaKey>(tipoParam && ['orcamentos', 'entrega', 'devolucao', 'garantia'].includes(tipoParam) ? tipoParam : 'orcamentos');

  const conteudo = servicos[abaSelecionada];
  const iconeAtual = icones[abaSelecionada];

  return (
    <Container>
      <Titulo>Serviços</Titulo>

      <AbasHorizontais>
        <Aba onClick={() => setAbaSelecionada("orcamentos")} ativa={abaSelecionada === "orcamentos"}>Orçamentos</Aba>
        <Aba onClick={() => setAbaSelecionada("entrega")} ativa={abaSelecionada === "entrega"}>Entrega</Aba>
        <Aba onClick={() => setAbaSelecionada("devolucao")} ativa={abaSelecionada === "devolucao"}>Devolução</Aba>
        <Aba onClick={() => setAbaSelecionada("garantia")} ativa={abaSelecionada === "garantia"}>Garantia</Aba>
      </AbasHorizontais>

      <BoxConteudo>
        <Header>
          <h2>{conteudo.titulo}</h2>
          <Icone src={iconeAtual} />
        </Header>
        <Texto>{conteudo.texto}</Texto>
      </BoxConteudo>
    </Container>
  );
};

export default PaginaServicos;

// Styled Components ↓↓↓


const Container = styled.div`
  padding: 8rem 2rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 8rem 1.5rem 2rem;
  }

  @media (max-width: 425px) {
    padding: 10rem 1rem 2rem; /* 🔥 Em telas MUITO pequenas, aumenta ainda mais o espaço no topo */
  }
`;

const Titulo = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e3b;
  margin-bottom: 1.5rem;
`;

const AbasHorizontais = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 100%;
`;

const Aba = styled.button<{ ativa: boolean }>`
  background: ${({ ativa }) => ativa ? '#e8eeec' : '#ffffff'};
  border: 2px solid ${({ ativa }) => ativa ? '#2c3e3b' : '#d0d0d0'};
  padding: 0.7rem 1.5rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: ${({ ativa }) => ativa ? 600 : 500};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const BoxConteudo = styled.div`
  background: #f9f9f9;
  border-left: 4px solid #2c3e3b;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.5rem;
    color: #2c3e3b;
  }
`;

const Icone = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
`;

const Texto = styled.div`
  margin-top: 1.5rem;

  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: #333;
  }

  ul {
    padding-left: 1.2rem;
    margin-top: 0.5rem;

    li {
      font-size: 1.1rem;
      margin-bottom: 0.4rem;
    }
  }

  a {
    color: #2c3e3b;
    font-weight: 500;
    text-decoration: underline;
  }
`;
