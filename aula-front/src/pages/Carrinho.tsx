import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { ShoppingCart, User, CreditCard, Check } from 'lucide-react';
import impressora from '../assets/impressora.png';
import ssd from '../assets/ssd.png';
import Lista_produtos from './ListaProdutos';


const Carrinho = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Impressora Multifuncional Epson Ecotank L5590',
      price: 1709.99,
      quantity: 1,
      image: impressora,
    },
    {
      id: 2,
      name: 'SSD Externo Portátil Sandisk, 1TB',
      price: 509.99,
      quantity: 1,
      image: ssd,
    },
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Wrapper>
      <Steps>
        <Step active><ShoppingCart size={20} /> Carrinho</Step>
        <Line />
        <Step><User size={20} /> Identificação</Step>
        <Line />
        <Step><CreditCard size={20} /> Pagamento</Step>
        <Line />
        <Step><Check size={20} /> Concluir</Step>
      </Steps>

      <h1>Seu Carrinho</h1>
      <Content>
        <Items>
          {cart.map(item => (
            <Item key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="info">
                <h3>{item.name}</h3>
                <p>R$ {item.price.toFixed(2)}</p>
              </div>
              <div className="actions">
                <FaTrash />
                <div className="quantidade">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
            </Item>
          ))}
        </Items>

        <Resumo>
          <h2>Resumo do Pedido</h2>
          {cart.map(item => (
            <div key={item.id} className="linha">
              <span>{item.name}</span>
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <div className="total">
            <span>Total</span>
            <strong>R$ {total.toFixed(2)}</strong>
          </div>
          <Link to="/checkout" className="finalizar">Finalizar a compra</Link>
        </Resumo>
      </Content>
      <SectionTitle>Produtos mais procurados</SectionTitle>
      <CarouselWrapper>
        <Carousel ref={carouselRef}>
        {Lista_produtos.slice(2, 10).map(prod => (
  <CarouselItem to={`/produto/${prod.id}`}> 
    <img src={prod.imagem} alt={prod.nome} />
    <p>{prod.nome}</p>
    <span>R$ {prod.preco.toFixed(2).replace(".", ",")}</span>
  </CarouselItem>
))}
        </Carousel>
      </CarouselWrapper>
    </Wrapper>
  );
};

export default Carrinho;

const Wrapper = styled.div`
  padding: 2rem 4rem;
  background-color: #f4f4f4;
  font-family: 'Lora', serif;
`;

const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Step = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${({ active }) => (active ? '#e65c00' : '#ccc')};
  gap: 0.5rem;
`;

const Line = styled.div`
  width: 30px;
  height: 2px;
  background-color: #ccc;
`;

const Content = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

const Items = styled.div`
  flex: 1;
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;

  img {
    width: 120px;
    object-fit: contain;
    background: #fafafa;
    border-radius: 0.5rem;
  }

  .info {
    flex: 1;
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: #999;
      cursor: pointer;
    }

    .quantidade {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        padding: 0.3rem 0.6rem;
        background-color: #eee;
        border: none;
        border-radius: 0.25rem;
        font-weight: bold;
        cursor: pointer;
        transition: background 0.2s ease;

        &:hover {
          background: #ddd;
        }
      }
    }
  }
`;

const Resumo = styled.div`
  width: 350px;
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  .linha {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
  }

  .total {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    margin-top: 1rem;
    font-weight: bold;
  }

  .finalizar {
    display: block;
    margin-top: 2rem;
    text-align: center;
    padding: 0.75rem;
    background-color: #e75c1a;
    color: white;
    border-radius: 0.5rem;
    font-weight: bold;
    text-decoration: none;
    transition: background 0.2s;

    &:hover {
      background-color: #c84d0f;
    }
  }
`;
const SectionTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;
  margin: 2rem 0 1rem;
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
`;

const Carousel = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  padding-bottom: 1rem;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

const CarouselItem = styled(Link)`
  flex: 0 0 auto;
  width: 220px;
  scroll-snap-align: start;
  background-color: #fff;
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  img {
  width: 140px;
  height: 140px;
  object-fit: contain;
  margin: 0 auto 1rem;
  display: block;
}


  p {
    font-weight: 500;
    margin-bottom: 0.5rem;
    min-height: 3rem;
  }

  span {
    font-weight: bold;
    color: #333;
  }
`;