import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-area">
        <img src={logo} alt="Logo" className="logo" /> 
        <span className="title">R. Amaral Office</span>
      </Link>
      <nav className="nav">
        <Link to="/produtos">Produtos</Link>
        <Link to="/servicos">Serviços</Link>
        <Link to="/nossa-historia">Nossa História</Link>
        <Link to="/carrinho" className="cart">
            <FaShoppingCart size={20} color="white" />
        </Link>

      </nav>
    </header>
  );
};

export default Header;
