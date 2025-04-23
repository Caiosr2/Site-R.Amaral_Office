import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Carrinho.css';
import { FaTrash } from 'react-icons/fa';
import { ShoppingCart, User, CreditCard, Eye, Check } from 'lucide-react';
import impressora from '../assets/impressora.png';
import ssd from '../assets/ssd.png';
import cadeiraeduarda from "../assets/cadeiraeduarda.png";
import mesaL from "../assets/MesaL.png";
import cadeira_ergonomica from "../assets/cadeira_ergonomica.png";
import mesamadeira from "../assets/mesamadeira.png";
import cadeirafort from "../assets/cadeiraforttmilao.png";
import cadeiracouro from "../assets/cadeiradecouro.png";

const Carrinho = () => {
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

  const suggestionProducts = [
    { id: 1, nome: "Poltrona Escritório Eduarda", preco: 899.99, imagem: cadeiraeduarda, link: "/poltronaeduarda" },
    { id: 2, nome: "Mesa de Escritório em L Anah", preco: 1597.99, imagem: mesaL, link: "/mesaeml" },
    { id: 3, nome: "Cadeira de Escritório Comfy Stance Plus", preco: 721.99, imagem: cadeira_ergonomica, link: "/cadeiraergonomica" },
    { id: 4, nome: "Mesa de Escritório Executiva 4 GV", preco: 1576.99, imagem: mesamadeira, link: "/mesaexecutiva" },
    { id: 5, nome: "Cadeira Fortt Milão Giratória", preco: 799.99, imagem: cadeirafort, link: "/cadeirafm" },
    { id: 6, nome: "Cadeira de Escritório de couro", preco: 599.99, imagem: cadeiracouro, link: "/cadeiradecouro" },
  ];

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
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = carouselRef.current;
      if (carousel) {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        if (carousel.scrollLeft >= maxScrollLeft - 5) {
          carousel.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carousel.scrollBy({ left: 240, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cart-container">
      <div className="cart-steps">
        <Step active><ShoppingCart size={20} /> Carrinho</Step>
        <Line />
        <Step><User size={20} /> Identificação</Step>
        <Line />
        <Step><CreditCard size={20} /> Pagamento</Step>
        <Line />
        <Step><Check size={20} /> Concluir</Step>
      </div>

      <h1 className="cart-title">Seu Carrinho</h1>
      <div className="cart-content">
        <div className="cart-items">
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="product-image" />
              <div className="product-info">
                <h3>{item.name}</h3>
                <p>R$ {item.price.toFixed(2)}</p>
              </div>
              <div className="cart-actions">
                <FaTrash className="trash-icon" />
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h2>Resumo do Pedido</h2>
          {cart.map(item => (
            <div className="summary-line" key={item.id}>
              <span>{item.name}</span>
              <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <div className="summary-total">
            <span>Total</span>
            <span><strong>R$ {total.toFixed(2)}</strong></span>
          </div>
          <Link to="/checkout" className="checkout-button">Finalizar a compra</Link>
        </div>
      </div>

      <div className="suggestions">
        <h2>Você também pode se interessar por:</h2>
        <div className="suggestion-carousel" ref={carouselRef}>
          {suggestionProducts.map(product => (
            <Link to={product.link} key={product.id} className="suggestion-item">
              <img src={product.imagem} alt={product.nome} />
              <p>{product.nome}</p>
              <span>R$ {product.preco.toFixed(2)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrinho;

interface StepProps {
  active?: boolean;
}

const Step = ({ children, active }: React.PropsWithChildren<StepProps>) => (
  <div style={{ display: 'flex', alignItems: 'center', fontWeight: 600, color: active ? '#e65c00' : '#ccc', gap: '0.5rem' }}>
    {children}
  </div>
);

const Line = () => (
  <div style={{ width: 30, height: 2, backgroundColor: '#ccc' }} />
);
