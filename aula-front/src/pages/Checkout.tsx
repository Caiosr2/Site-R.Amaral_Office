import { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    endereco: "",
    cidade: "",
    estado: "",
    cep: "",
    numeroCartao: "",
    validade: "",
    cvv: "",
  });

  const [compraFinalizada, setCompraFinalizada] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCompraFinalizada(true);
  };

  const handleFecharModal = () => {
    setCompraFinalizada(false);
    navigate("/");
  };

  return (
    <div className="checkout-wrapper">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h1>Finalizar Compra</h1>

        <div className="form-section">
          <h2>Dados Pessoais</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Nome completo</label>
              <input type="text" name="nome" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" name="email" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Telefone</label>
              <input type="text" name="telefone" onChange={handleChange} required />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Endereço</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Endereço</label>
              <input type="text" name="endereco" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Cidade</label>
              <input type="text" name="cidade" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Estado</label>
              <input type="text" name="estado" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>CEP</label>
              <input type="text" name="cep" onChange={handleChange} required />
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Pagamento</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>Número do Cartão</label>
              <input type="text" name="numeroCartao" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Validade (MM/AA)</label>
              <input type="text" name="validade" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input type="text" name="cvv" onChange={handleChange} required />
            </div>
          </div>
        </div>

        <button type="submit" className="btn-submit">Confirmar Pedido</button>
      </form>

      {compraFinalizada && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Obrigado pela sua compra!</h2>
            <p className="modal-text">Seu pedido foi recebido com sucesso. Em breve você receberá um e-mail com os detalhes e atualizações sobre a entrega.</p>
            <button className="modal-button" onClick={handleFecharModal}>Voltar para a Home</button>
          </div>
        </div>
      )}

      <style>{`
        .checkout-wrapper {
          display: flex;
          justify-content: center;
          padding: 4rem 1rem;
          background-color: #f4f4f4;
        }
        .checkout-form {
          background: #fff;
          padding: 3rem;
          border-radius: 16px;
          max-width: 900px;
          width: 100%;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }
        .checkout-form h1 {
          font-size: 2rem;
          margin-bottom: 2.5rem;
          color: #2c3e3b;
          text-align: center;
        }
        .form-section {
          margin-bottom: 2.5rem;
        }
        .form-section h2 {
          font-size: 1.4rem;
          margin-bottom: 1.25rem;
          color: #444;
          border-bottom: 1px solid #ddd;
          padding-bottom: 0.5rem;
        }
        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #333;
        }
        .form-group input {
          padding: 0.9rem 1rem;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 1rem;
        }
        .btn-submit {
          display: block;
          margin: 3rem auto 0;
          background-color: #e75c1a;
          color: white;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 10px;
          font-size: 1.2rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .btn-submit:hover {
          background-color: #d24f13;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 3rem;
          border-radius: 1rem;
          text-align: center;
          max-width: 450px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.25);
        }
        .modal-title {
          font-size: 1.8rem;
          color: #2c3e3b;
          margin-bottom: 1rem;
        }
        .modal-text {
          font-size: 1rem;
          color: #555;
          margin-bottom: 2rem;
        }
        .modal-button {
          padding: 0.8rem 1.5rem;
          font-size: 1rem;
          background-color: #2c3e3b;
          color: white;
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
        }
        .modal-button:hover {
          background-color: #1f2b29;
        }
      `}</style>
    </div>
  );
};

export default Checkout;