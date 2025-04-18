import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Carrinho.css';
import impressora from '../assets/impressora.png';
import ssd from '../assets/ssd.png';
import cadeira from '../assets/cadeira_ergonomica.png';
import teclado_e_mouse from '../assets/teclado_e_mouse.png';
import papel from '../assets/papel.png';
import { FaTrash } from 'react-icons/fa';

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
    { id: 1, name: 'Cadeira Ergonômica', price: 899.99, image: cadeira },
    { id: 2, name: 'Combo Teclado e Mouse sem fio Logitech MK235', price: 159.99, image: teclado_e_mouse },
    { id: 3, name: 'Papel Sulfite A4 - 10 Pacotes x 500 Folhas', price: 249.99, image: papel },
    { id: 4, name: 'Produto Extra 1', price: 129.90, image: teclado_e_mouse },
    { id: 5, name: 'Produto Extra 2', price: 89.90, image: papel },
    { id: 6, name: 'Produto Extra 3', price: 99.90, image: papel },
    { id: 7, name: 'Produto Extra 4', price: 79.90, image: papel },
    { id: 8, name: 'Produto Extra 5', price: 109.90, image: papel },
    { id: 9, name: 'Produto Extra 6', price: 119.90, image: papel },
    { id: 10, name: 'Produto Extra 7', price: 139.90, image: papel },
    { id: 11, name: 'Produto Extra 8', price: 149.90, image: papel },
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
            <span>Valor dos produtos</span>
            <span><strong>R$ {total.toFixed(2)}</strong></span>
          </div>
          <div className="summary-total final">
            <span>Total</span>
            <span><strong>R$ {total.toFixed(2)}</strong></span>
          </div>
          <button className="checkout-button">Finalizar a compra</button>
        </div>
      </div>

      <div className="suggestions">
        <h2>Você também pode se interessar por:</h2>
        <div className="suggestion-carousel" ref={carouselRef}>
          {suggestionProducts.map((product) => (
            <Link to={`/produto/${product.id}`} key={product.id} className="suggestion-item">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <span>R$ {product.price.toFixed(2)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carrinho;
