import { Link } from "react-router-dom";
import styled from 'styled-components';
import React, { useState, ReactNode } from "react";

import iconeOrcamento from "../assets/Compra por lotes.png";
import iconeEnvio from "../assets/Caminhão Entrega.png";
import iconeDevolucao from "../assets/Setas Devolução.png";
import iconeGarantia from "../assets/Seguro e garantia.png";

type AbaKey = 'orcamentos' | 'envio' | 'devolucao' | 'garantia';

const icones: Record<AbaKey, string> = {
  orcamentos: iconeOrcamento,
  envio: iconeEnvio,
  devolucao: iconeDevolucao,
  garantia: iconeGarantia,
};

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
        <p><Link to = '/orcamento'>Solicitar orçamento agora</Link></p>
      </>
    )
  },
  envio: {
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
  const [abaSelecionada, setAbaSelecionada] = useState<AbaKey>("orcamentos");

  const renderizarAba = (chave: AbaKey, label: string) => (
    <button
      className={`aba ${abaSelecionada === chave ? "ativa" : ""}`}
      onClick={() => setAbaSelecionada(chave)}
    >
      {label}
    </button>
  );

  const conteudo = servicos[abaSelecionada];
  const iconeAtual = icones[abaSelecionada];

  return (
    <div className="pagina-servicos">
      <h1 className="titulo">Serviços</h1>
      <div className="layout-servico">
        <div className="abas">
          {renderizarAba("orcamentos", "Orçamentos")}
          {renderizarAba("envio", "Envio de Pedidos")}
          {renderizarAba("devolucao", "Devolução de Pedidos")}
          {renderizarAba("garantia", "Garantia e assistência")}
        </div>

        <div className="conteudo-servico">
          <div className="cabecalho-servico">
            <div>
              <h2>{conteudo.titulo}</h2>
            </div>
            <img src={iconeAtual} alt="Ícone do serviço" className="icone-servico" />
          </div>
          <div className="texto">{conteudo.texto}</div>
        </div>
      </div>

      <style>{`
        .pagina-servicos {
          padding: 1.2rem 2rem;
          max-width: 1280px;
          margin: auto;
          font-family: 'Inter', sans-serif;
          background-color: #fefefe;
        }
        .titulo {
          text-align: center;
          font-size: 3rem;
          font-weight: 700;
          color: #2c3e3b;
          margin-bottom: 1rem;
        }
        .layout-servico {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .abas {
          display: flex;
          flex-direction: column;
          min-width: 260px;
          border: 1px solid #d0d0d0;
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
        }
        .aba {
          padding: 1rem 1.5rem;
          background: white;
          cursor: pointer;
          font-size: 1.05rem;
          text-align: left;
          transition: all 0.2s ease;
          border-bottom: 1px solid #e0e0e0;
        }
        .aba:last-child {
          border-bottom: none;
        }
        .aba:hover {
          background-color: #f8f9fa;
        }
        .aba.ativa {
          background-color: #e8eeec;
          font-weight: 600;
          border-left: 5px solid #2c3e3b;
        }
        .conteudo-servico {
          background: #f9f9f9;
          flex: 1;
          padding: 3rem 3rem 2.5rem 3rem;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
          border-left: 5px solid #2c3e3b;
        }
        .cabecalho-servico {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2.5rem;
        }
        .cabecalho-servico h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2c3e3b;
          margin: 0;
        }
        .icone-servico {
          width: 96px;
          height: 96px;
          object-fit: contain;
          margin-left: 1rem;
        }
        .conteudo-servico p {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 1.25rem;
          color: #1a1a1a;
        }
        .conteudo-servico ul {
          padding-left: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 1.5rem;
        }
        .conteudo-servico ul li {
          margin-bottom: 0.75rem;
          font-size: 1.05rem;
        }
        .conteudo-servico a {
          color: #2c3e3b;
          text-decoration: underline;
          font-weight: 500;
        }
        .conteudo-servico a:hover {
          color: #1a2624;
        }

        @media (max-width: 768px) {
          .layout-servico {
            flex-direction: column;
            gap: 2rem;
          }
          .cabecalho-servico {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .icone-servico {
            width: 72px;
            height: 72px;
            margin-left: 0;
          }
          .titulo {
            font-size: 2.2rem;
          }
          .conteudo-servico {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PaginaServicos;
