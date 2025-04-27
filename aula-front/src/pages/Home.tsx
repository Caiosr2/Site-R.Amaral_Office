import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
  
  const produtosVisiveis = produtosProcurados.slice(indiceProcurados, indiceProcurados + 3);

  if (produtosVisiveis.length < 3) {
    produtosVisiveis.push(
      ...produtosProcurados.slice(0, 3 - produtosVisiveis.length)
    );
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
  
      {/* Produtos mais procurados */}
      <TituloCarrossel>Produtos mais procurados</TituloCarrossel>
        <ProdutosProcuradosContainer>
          <BotaoCarrossel onClick={slideAnterior}>&#8249;</BotaoCarrossel> {/* ‹ */}
          
          <ProdutosProcuradosWrapper>
            {produtosVisiveis.map((produtoProcurado) => {
              const produtoOriginal = Lista_produtos.find((p) => {
                const nomeProduto = p.nome.toLowerCase().replace(/\s|-/g, '');
                const nomeProcurado = produtoProcurado.nome.toLowerCase().replace(/\s|-/g, '');

                if (nomeProduto.includes(nomeProcurado.substring(0, nomeProcurado.length))) {
                  return true;
                }

                return false;
              });

              if (!produtoOriginal) return null;

              return (
                <Link
                  key={produtoProcurado.nome}
                  to={`/produto/${produtoOriginal.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                <ProdutoCard>
                  <ImagemWrapper>
                    <img src={produtoProcurado.imagem} alt={produtoProcurado.nome} />
                  </ImagemWrapper>
                  <p>{produtoProcurado.nome}</p>
                  <span>R$ {produtoProcurado.preco.toFixed(2)}</span>
                </ProdutoCard>

                </Link>
              );
            })}
          </ProdutosProcuradosWrapper>
          <BotaoCarrossel onClick={proximoSlide}>&#8250;</BotaoCarrossel> {/* › */}
        </ProdutosProcuradosContainer>



      {/* Serviços */}
      <ServicosContainer>
        <ServicosCards>
          <ServicoCard>
            <img src={orcamentoIcon} alt="Orçamento" />
            <p>Orçamento</p>
          </ServicoCard>
          <ServicoCard>
            <img src={entregaIcon} alt="Entrega" />
            <p>Entrega</p>
          </ServicoCard>
          <ServicoCard>
            <img src={devolucaoIcon} alt="Devolução" />
            <p>Devolução</p>
          </ServicoCard>
          <ServicoCard>
            <img src={garantiaIcon} alt="Garantia" />
            <p>Garantia</p>
          </ServicoCard>
        </ServicosCards>

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
      </ServicosContainer>


      {/* Depoimentos de clientes */}
      <section className="depoimentos">
        <h2>Depoimentos de clientes</h2>
        <div className="depoimentos-cards">
          <div className="depoimento">
            <p>"A R. Amaral Office transformou completamente nosso escritório. Desde os móveis até os suprimentos, tudo foi entregue com rapidez e qualidade excepcional. Recomendo demais!"</p>
            <h4>Lucas Andrade</h4>
          </div>
          <div className="depoimento">
            <p>"O atendimento da R. Amaral é impecável, seja na loja física ou no novo e-commerce. Sempre encontro exatamente o que preciso, com praticidade e eficiência."</p>
            <h4>Fernanda Lopes</h4>
          </div>
          <div className="depoimento">
            <p>"Desde que começamos a utilizar o e-commerce da R. Amaral Office, ficou muito mais fácil manter nosso estoque atualizado. A integração entre digital e físico foi um grande diferencial."</p>
            <h4>Mariana Queiroz</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
  text-align: center;
`;

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
  margin: 4rem auto;
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
      background: #f6f6f6;
      padding: 2rem 1.5rem;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      text-align: center;
      flex: 1 1 300px;
      max-width: 340px;
      min-height: 400px; /* <<< OBRIGA altura igual */
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
        color: #243436;
        margin-bottom: 0.8rem;
      }

      p {
        font-size: 1.1rem;
        color: #666;
        margin-top: auto; /* joga o parágrafo para "crescer" naturalmente */
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
        min-height: 400px; /* Mantém mesmo no mobile */
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
  gap: 0.5rem; /* Diminuído: estava 1rem */

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
    line-height: 1; /* diminui espaço entre % e o título */
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1.8rem;
    color: #243436;
    margin-top: 0.2rem; /* pequena margem só pra dar respiro */
  }

  a {
    margin-top: 1rem; /* Deixa o botão um pouco separado */
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
  gap: 1.5rem;
  overflow: hidden;
  flex-wrap: nowrap;
`;

const ProdutoCard = styled.div`
  background-color: #ebe1d4;
  border-radius: 20px;
  padding: 1rem;
  width: 250px;
  flex-shrink: 0; 
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    width: auto;
    max-width: 100%;
    height: 160px;
    max-height: 160px;
    object-fit: contain;
    display: block;
    margin: 0 auto 1rem auto;
  }



  p {
    font-size: 1rem;
    font-weight: bold;
    color: #243436;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1.2rem;
    color: #243436;
    font-weight: bold;
  }
`;

const ProdutosProcuradosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem; /* aumentei um pouco o gap entre botões e produtos */
  flex-wrap: nowrap;
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
  margin-bottom: 3rem; /* aumentei o espaçamento */
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
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 4rem 2rem;
  gap: 6rem;
  width: 95%;
  max-width: 1600px;
  margin: 0 auto;
`;


const ServicosCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 220px);
  gap: 3rem;
  justify-content: center;
`;



const ServicoCard = styled.div`
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
  
  img {
    width: 70px;
    height: 70px;
    margin-bottom: 1.5rem;
    object-fit: contain;
  }

  p {
    font-size: 1.4rem;
    font-weight: 700;
    color: #243436;
  }
`;



const ServicoTextoImagem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
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

export default Home;