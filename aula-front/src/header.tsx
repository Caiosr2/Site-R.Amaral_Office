import { Link } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <Link to="/" className="logo-area">
          <img src={logo} alt="Logo" className="logo" />
          <span className="title">R. Amaral Office</span>
        </Link>

        <input type="text" placeholder="Meu escritório precisa de..." className="search-bar" />

        <Link to="/carrinho" className="cart">
          <FaShoppingCart size={24} color="white" />
        </Link>
      </div>

      <nav className="nav-bar">
        <Link to="/produtos">Produtos</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/orcamento">Orçamento</Link>
      </nav>
    </header>
  );
};

export default Header;

