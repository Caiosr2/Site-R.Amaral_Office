
import '../styles/Carrinho.css';
import impressora from '../assets/impressora.png';
import ssd from '../assets/ssd.png';
import cadeira from '../assets/cadeira_ergonomica.png'
import teclado_e_mouse from '../assets/teclado_e_mouse.png'
import papel from '../assets/papel.png'
import { FaTrash } from 'react-icons/fa';

const Carrinho = () => {
  return (
    <div className="cart-container">
      <h1 className="cart-title">Seu Carrinho</h1>
      <div className="cart-content">
        <div className="cart-items">
          <div className="cart-item">
            <img src={impressora} alt="Impressora" className="product-image"/>
            <div className="product-info">
              <h3>Impressora Multifuncional Epson Ecotank L5590</h3>
              <p>R$ 1709,99</p>
            </div>
            <div className="cart-actions">
              <FaTrash className="trash-icon" />
              <div className="quantity-control">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>

          <hr />

          <div className="cart-item">
            <img src={ssd} alt="Impressora" className="product-image"/>
            <div className="product-info">
              <h3>SSD Externo Portátil Sandisk, 1TB</h3>
              <p>R$ 509,99</p>
            </div>
            <div className="cart-actions">
              <FaTrash className="trash-icon" />
              <div className="quantity-control">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>

        <div className="order-summary">
          <h2>Resumo do Pedido</h2>
          <div className="summary-line">
            <span>Impressora Multifuncional Epson Ecotank L5590</span>
            <span>R$ 1709,99</span>
          </div>
          <div className="summary-line">
            <span>SSD Externo Portátil Sandisk, 1TB</span>
            <span>R$ 509,99</span>
          </div>
          <hr />
          <div className="summary-total">
            <span>Valor dos produtos</span>
            <span><strong>R$ 2.219,98</strong></span>
          </div>
          <div className="summary-total final">
            <span>Total</span>
            <span><strong>R$ 2.219,98</strong></span>
          </div>
          <button className="checkout-button">Finalizar a compra</button>
        </div>
      </div>
      <div className="suggestions">
    <h2>Você também pode se interessar por:</h2>
    <div className="suggestion-list">
      <div className="suggestion-item">
        <img src={cadeira} alt="Cadeira ergonômica" />
        <p>Cadeira Ergonômica</p>
        <span>R$ 899,99</span>
      </div>
      <div className="suggestion-item">
        <img src={teclado_e_mouse} alt="Monitor 24 polegadas" />
        <p>Combo Teclado e Mouse sem fio Logitech MK235 </p>
        <span>R$ 159,99</span>
      </div>
      <div className="suggestion-item">
        <img src={papel} alt="Organizadores de mesa" />
        <p>Papel Sulfite A4 
        10 Pacotes x 500 Folhas </p>
        <span>R$ 249,99</span>
      </div>
    </div>
</div>

    </div>
  );
}

export default Carrinho;
