import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import banner from '../assets/banner.png';
import moveis from '../assets/categoria_moveis.png';
import tecnologia from '../assets/categoria_tecnologia.png';
import papelaria from '../assets/categoria_papelaria.png';
import descontoPapelaria from '../assets/descontoPapelaria.png';
import orcamentoIcon from '../assets/Compra por lotes.png';
import produtos from './ListaProdutos';
import produtosDesconto from '../data/produtosDesconto';
import produtosProcurados from '../data/produtosProcurados';
import Lista_produtos from './ListaProdutos';
import entregaIcon from '../assets/Caminhão Entrega.png';
import devolucaoIcon from '../assets/Setas Devolução.png';
import garantiaIcon from '../assets/Seguro e garantia.png';
import atendimento from '../assets/atendimento.png';
import logo from '../assets/logo.png';
import avatar1 from '../assets/avatar1.png';
import avatar2 from '../assets/avatar2.png';
import avatar3 from '../assets/avatar3.png';

const Home = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById('header');
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

  const [indiceProcurados, setIndiceProcurados] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceProcurados((prevIndice) => (prevIndice + 1) % produtosProcurados.length);
    }, 2000);
  
    return () => clearInterval(intervalo);
  }, []);
  
    const produtosVisiveis = [];

    let count = 0;
    let index = indiceProcurados;
    
    while (count < 3) {
      const produto = produtosProcurados[index % produtosProcurados.length];
      const produtoOriginal = Lista_produtos.find((p) => {
        const nomeProduto = p.nome.toLowerCase().replace(/\s|-/g, '');
        const nomeProcurado = produto.nome.toLowerCase().replace(/\s|-/g, '');
        return nomeProduto.includes(nomeProcurado.substring(0, nomeProcurado.length));
      });
    
      if (produtoOriginal) {
        produtosVisiveis.push({ ...produto, id: produtoOriginal.id });
        count++;
      }
    
      index++;
    }
  
  
  
  
    const proximoSlide = () => {
      setIndiceProcurados((prevIndice) => (prevIndice + 1) % produtosProcurados.length);
    };
    
    const slideAnterior = () => {
      setIndiceProcurados((prevIndice) => (prevIndice - 1 + produtosProcurados.length) % produtosProcurados.length);
    };
    
  


  return (
    <div className="home-wrapper">
      {/* Banner principal */}
      <Banner headerHeight={headerHeight}>
        <BannerImage src={banner} alt="Banner" />
        <BannerText>
          <h1>Reduza custos sem abrir mão da qualidade. Solicite seu orçamento com a R. Amaral Office</h1>
          <Link to="/orcamento">SOLICITE ORÇAMENTO</Link>
        </BannerText>
      </Banner>

      <BlocoComGradiente>
      {/* Categorias */}
      <Categorias>
        <h2>Transforme seu ambiente de trabalho</h2>
        <p>Produtos que aliam conforto, eficiência e design</p>
        <div className="categorias-cards">
          <Link to="/produtos?categoria=Móveis" className="card">
            <img src={moveis} alt="Móveis" />
            <h3>MÓVEIS</h3>
            <p>Cadeiras; Mesas; Armários</p>
          </Link>

          <Link to="/produtos?categoria=Tecnologia" className="card">
            <img src={tecnologia} alt="Tecnologia" />
            <h3>TECNOLOGIA</h3>
            <p>Periféricos; Eletrônicos</p>
          </Link>

          <Link to="/produtos?categoria=Papelaria" className="card">
            <img src={papelaria} alt="Papelaria" />
            <h3>PAPELARIA</h3>
            <p>Papel; Escrita; Acessórios</p>
          </Link>
        </div>
      </Categorias>

      {/* Texto B2B */}
      <BlocoEmpresas>
      <div className="texto">
        <h2>De pequenas a grandes empresas</h2>
        <p>Entregamos soluções sob medida que priorizam<br />o que realmente importa: o sucesso do seu negócio.</p>
        <Link to="/orcamento" className="botao">SOLICITE ORÇAMENTO</Link>
      </div>
    </BlocoEmpresas>

      {/* Promoção Papelaria */}
      <DescontoSection>
        <BannerDesconto>
          <img src={descontoPapelaria} alt="Desconto Papelaria" />
          <TextoSobreImagem>
            <h2>DESCONTOS DE ATÉ</h2>
            <span>20%</span>
            <p>em produtos de papelaria</p>
            <Link to="/produtos?categoria=Papelaria">Ver ofertas</Link>
          </TextoSobreImagem>
        </BannerDesconto>

        <ProdutosDesconto>
          {produtosDesconto.map((produtoDesconto) => {
            const produtoOriginal = Lista_produtos.find((p) => {
              const nomeProduto = p.nome.toLowerCase().replace(/\s|-/g, '');
              const nomeDesconto = produtoDesconto.nome.toLowerCase().replace(/\s|-/g, '');

              if (nomeProduto.includes(nomeDesconto.substring(0, nomeDesconto.length))) {
                return true;
              }

              if (produtoDesconto.nome.toLowerCase().includes('sulfite') && p.nome.toLowerCase().includes('a4')) {
                return true;
              }

              if (produtoDesconto.nome.toLowerCase().includes('borracha') && p.nome.toLowerCase().includes('borracha')) {
                return true;
              }

              return false;
            });

            if (!produtoOriginal) return null;

            return (
              <div key={produtoDesconto.nome} className="produto">
                <Link to={`/produto/${produtoOriginal.id}`}>
                  <img src={produtoDesconto.imagem} alt={produtoDesconto.nome} />
                  <p>{produtoDesconto.nome}</p>
                  <span className="preco-antigo">R$ {produtoDesconto.precoAntigo}</span><br />
                  <span className="preco-novo">R$ {produtoDesconto.precoNovo}</span>
                </Link>
              </div>
            );
          })}
        </ProdutosDesconto>
      </DescontoSection>
      </BlocoComGradiente>
  
      {/* Produtos mais procurados */}
      <TituloCarrossel>Produtos mais procurados</TituloCarrossel>
        <ProdutosProcuradosContainer>
          <BotaoCarrossel onClick={slideAnterior}>&#8249;</BotaoCarrossel>
          
          <ProdutosProcuradosWrapper>
          {produtosVisiveis.map((produto) => (
            <Link
              key={produto.id}
              to={`/produto/${produto.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProdutoCard>
                <ImagemWrapper>
                  <img src={produto.imagem} alt={produto.nome} />
                </ImagemWrapper>
                <p>{produto.nome}</p>
                <span>R$ {produto.preco.toFixed(2)}</span>
              </ProdutoCard>
            </Link>
          ))} 

          </ProdutosProcuradosWrapper>
          <BotaoCarrossel onClick={proximoSlide}>&#8250;</BotaoCarrossel>
        </ProdutosProcuradosContainer>



      {/* Serviços */}
      <ServicosContainer>
             <ServicoTextoImagem>
        <TituloServicosWrapper>
          <TituloServicos>
            <span>Os Nossos</span>
            <strong>SERVIÇOS</strong>
          </TituloServicos>
          <LogoImagem src={logo} alt="Logo" />
        </TituloServicosWrapper>
          <ImagemAtendimento src={atendimento} alt="Atendimento" />
        </ServicoTextoImagem>
        <ServicosCards>
        <ServicoCard to="/servicos?tipo=orcamento">
          <img src={orcamentoIcon} alt="Orçamento" />
          <p>Orçamento</p>
        </ServicoCard>

        <ServicoCard to="/servicos?tipo=entrega">
          <img src={entregaIcon} alt="Entrega" />
          <p>Entrega</p>
        </ServicoCard>

        <ServicoCard to="/servicos?tipo=devolucao">
          <img src={devolucaoIcon} alt="Devolução" />
          <p>Devolução</p>
        </ServicoCard>

        <ServicoCard to="/servicos?tipo=garantia">
          <img src={garantiaIcon} alt="Garantia" />
          <p>Garantia</p>
        </ServicoCard>

        </ServicosCards>

   
      </ServicosContainer>

    {/* Depoimentos de clientes */}
    <SectionDepoimentos>
      <h2>Depoimentos de clientes</h2>
      <DepoimentosWrapper>
        <DepoimentoCard>
          <DepoimentoTopo>
            <FotoCliente src={avatar1} alt="Lucas Andrade" />
            <NomeEstrelas>
              <NomeCliente>Lucas Andrade</NomeCliente>
              <Estrelas>★★★★★</Estrelas>
            </NomeEstrelas>
          </DepoimentoTopo>
          <TextoDepoimento>
            "A R. Amaral Office transformou completamente nosso escritório. Desde os móveis até os suprimentos, tudo foi entregue com rapidez e qualidade excepcional. Recomendo demais!"
          </TextoDepoimento>
        </DepoimentoCard>

        <DepoimentoCard>
          <DepoimentoTopo>
            <FotoCliente src={avatar2} alt="Fernanda Lopes" />
            <NomeEstrelas>
              <NomeCliente>Fernanda Lopes</NomeCliente>
              <Estrelas>★★★★★</Estrelas>
            </NomeEstrelas>
          </DepoimentoTopo>
          <TextoDepoimento>
            "O atendimento da R. Amaral é impecável, seja na loja física ou no novo e-commerce. Sempre encontro exatamente o que preciso, com praticidade e eficiência."
          </TextoDepoimento>
        </DepoimentoCard>

        <DepoimentoCard>
          <DepoimentoTopo>
            <FotoCliente src={avatar3} alt="Mariana Queiroz" />
            <NomeEstrelas>
              <NomeCliente>Mariana Queiroz</NomeCliente>
              <Estrelas>★★★★★</Estrelas>
            </NomeEstrelas>
          </DepoimentoTopo>
          <TextoDepoimento>
            "Desde que começamos a utilizar o e-commerce da R. Amaral Office, ficou muito mais fácil manter nosso estoque atualizado. A integração entre digital e físico foi um grande diferencial."
          </TextoDepoimento>
        </DepoimentoCard>
      </DepoimentosWrapper>
    </SectionDepoimentos>
    </div>
  );
};

const Banner = styled.section<{ headerHeight: number }>`
  position: relative;
  width: 100%;
  height: 532px;
  margin-top: ${({ headerHeight }) => `${headerHeight}px`};
  padding: 0;
  box-shadow: inset 0px 4px 6px -4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const BannerText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  padding: 1rem;
  max-width: 800px;
  width: 100%;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    line-height: 1.3;
    word-break: break-word;
  }

  a {
    background-color: #ff6600;
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    margin-top: 1rem;
    font-size: 1.2rem;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  @media (max-width: 768px) {
    max-width: 90%;

    h1 {
      font-size: 2rem;
    }
    a {
      font-size: 1rem;
      padding: 0.8rem 1.5rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 90%;

    h1 {
      font-size: 1.7rem;
    }
    a {
      font-size: 0.9rem;
      padding: 0.7rem 1.2rem;
    }
  }
`;

const Categorias = styled.section`
  margin: 3rem auto 6rem;
  max-width: 1200px;
  padding: 0 1rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #243436;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 3rem;
    color: #555;
  }

  .categorias-cards {
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    flex-wrap: wrap;

    .card {
      background: #505d5e;
      padding: 2rem 1.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      text-align: center;
      flex: 1 1 300px;
      max-width: 340px;
      min-height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-decoration: none;
      color: inherit;

      img {
        width: 100%;
        height: 160px;
        object-fit: contain;
        margin-bottom: 1.5rem;
      }

      h3 {
        font-size: 1.6rem;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 0.8rem;
      }

      p {
        font-size: 1.1rem;
        color: #ffffff;
        margin-top: auto;
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
      }
    }
  }

  @media (max-width: 768px) {
    .categorias-cards {
      flex-direction: column;
      align-items: center;

      .card {
        width: 100%;
        max-width: 350px;
        min-height: 400px;
      }
    }
  }
`;


const DescontoSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  flex-wrap: wrap;
  margin-top: 6rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 1.5rem;
    gap: 1.5rem;
  }
`;

const ProdutosDesconto = styled.div`
  flex: 1 1 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  min-width: 300px;

  a {
    text-decoration: none;
    color: #243436;
  }

  .produto {
    background: white;
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);

    &:hover {
      box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      transform: translateY(-5px);
      transition: 0.3s;
    }

    img {
      width: auto;
      height: 120px;
      max-width: 100%;
      object-fit: contain;
      margin: 0 auto;
      display: block;
    }

    p {
      margin: 0.5rem 0;
      font-weight: bold;
    }

    .preco-antigo {
      text-decoration: line-through;
      color: grey;
      font-size: 0.9rem;
    }

    .preco-novo {
      color: #243436;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;


const BannerDesconto = styled.div`
  position: relative;
  flex: 1 1 45%;
  max-width: 500px;
  min-width: 300px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #ebe1d4;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: none;
  }
`;



const TextoSobreImagem = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  color: #243436;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.1;
    color: #243436;
    max-width: 300px;
  }

  span {
    font-family: 'Poppins', sans-serif;
    font-size: 5rem;
    font-weight: 1000;
    color: #243436;
    line-height: 1;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1.8rem;
    color: #243436;
    margin-top: 0.2rem;
  }

  a {
    margin-top: 1rem;
    background-color: #ff6600;
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    transition: background-color 0.3s;

    &:hover {
      background-color: #e65500;
    }
  }
`;

const ProdutosProcuradosWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  overflow: hidden;
  flex-wrap: nowrap;
`;

const ProdutoCard = styled.div`
  background-color: #505d5e;
  border-radius: 20px;
  padding: 1rem;
  width: 250px;
  flex-shrink: 0;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 180px;
    height: 160px;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 0.5rem;
    min-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  span {
    font-size: 1.2rem;
    color: #ffffff;
    font-weight: bold;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    transition: 0.3s ease;
  }
`;

const ProdutosProcuradosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: nowrap;
  margin-bottom: 4.5rem;
`;

const BotaoCarrossel = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2.5rem;
  color: #243436;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const TituloCarrossel = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.8rem;
  color: #243436;
  text-align: center;
  margin-bottom: 3rem;
`;

const ImagemWrapper = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }
`;

const ServicosContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
  width: 95%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
`;


const ServicosCards = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(2, 220px);
  gap: 2rem;
  justify-content: center;
  align-items: center;

  

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 2rem;
  }
`;

const ServicoCard = styled(Link)`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  padding: 2.5rem;
  text-align: center;
  height: 220px;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  
  img {
    width: 140px;
    height: 140px;
    margin-bottom: 1.5rem;
    object-fit: contain;
    flex-shrink: 0;
  }

  p {
    margin-top: auto;
    font-size: 1.4rem;
    font-weight: 700;
    color: #243436;
    min-height: 40px;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
    transition: 0.3s ease;
  }
`;

const ServicoTextoImagem = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    text-align: center;
  }
`;

const TituloServicos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1.2;

  span {
    font-size: 2.5rem;
    color: #243436;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  strong {
    font-size: 3.2rem;
    color: #243436;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
  }
`;


const ImagemAtendimento = styled.img`
  width: 400px;
  height: auto;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  background-color: #f4f1eb;
  padding: 1rem;
`;

const TituloServicosWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const LogoImagem = styled.img`
  width: 40px; 
  height: auto;
  margin-left: 10px;
  filter: invert(1) brightness(1.2) contrast(1.2) saturate(2);
`;

const SectionDepoimentos = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    color: #243436;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

const DepoimentosWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const DepoimentoCard = styled.div`
  background: #505d5e;
  border-radius: 20px;
  padding: 2rem;
  width: 340px;
  height: auto;
  text-align: left;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FotoCliente = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  object-fit: cover;
`;

const NomeEstrelas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NomeCliente = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  color: #ffffff;
  margin: 0;
`;

const Estrelas = styled.div`
  font-size: 1.1rem;
  color: #FFD700;
`;

const TextoDepoimento = styled.p`
  font-size: 1rem;
  color: #ffffff;
  line-height: 1.5;
`;

const DepoimentoTopo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const BlocoEmpresas = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .texto {
    max-width: 800px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    font-size: 3.8rem;
    font-weight: 700;
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }

  .botao {
    background-color: #ff6600;
    padding: 1.2rem 2.5rem;
    font-size: 1.4rem;
    border-radius: 999px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      background-color: #e65500;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2.6rem;
    }
    p {
      font-size: 1.2rem;
    }
    .botao {
      font-size: 1.1rem;
    }
  }
`;


const BlocoComGradiente = styled.div`
  background: linear-gradient(
    to bottom,
    #ffffff 0%, 
    #243436 35%,
    #243436 65%,
    #ffffff 100%
  );
  padding: 6rem 0;
`;


export default Home;