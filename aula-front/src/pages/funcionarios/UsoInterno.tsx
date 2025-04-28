import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar,
} from 'recharts';
import avatar1 from '../../assets/avatar1.png';
import calendario from '../../assets/calendario.png';

function handleDownloadClick(e: MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  alert('O arquivo foi baixado no seu computador.');
}

const UsoInterno = () => {
  const [abaAtiva, setAbaAtiva] = useState('calendario');
  const [ordenarPorPrazo, setOrdenarPorPrazo] = useState<'asc' | 'desc'>('asc');
  const navigate = useNavigate();

  const faturamentoData = [
    { mes: 'Jan', valor: 17650 },
    { mes: 'Fev', valor: 25600 },
    { mes: 'Mar', valor: 37500 },
    { mes: 'Abr', valor: 31340},
  ];

  const orcamentosData = [
    { mes: 'Jan', total: 8 },
    { mes: 'Fev', total: 12 },
    { mes: 'Mar', total: 18 },
    { mes: 'Abr', total: 15 },
  ];

  const orcamentos = [
    { nome: 'Marcos Silva', email: 'marcos@xxxx.com.br', prazo: '12' },
    { nome: 'Maria Clara Silvestre', email: 'mcsilvestre@xxxx.com.br', prazo: '20' },
  ];

  const orcamentosOrdenados = [...orcamentos].sort((a, b) => {
    const prazoA = parseInt(a.prazo);
    const prazoB = parseInt(b.prazo);
    return ordenarPorPrazo === 'asc' ? prazoA - prazoB : prazoB - prazoA;
  });

  return (
    <Container>
      <TopBar>
        <UserInfo>
          <Avatar src={avatar1} alt="Avatar" />
          <div>
            <div>Nome: Roberto Martins</div>
            <div>Cargo: Gerente de vendas</div>
            <div>Nº de funcionário: 00134</div>
          </div>
        </UserInfo>
        <ButtonWrapper>
          <BotaoEdicao onClick={() => navigate('/editar-produtos')}>Edição de Produto</BotaoEdicao>
          <SairButton onClick={() => navigate('/funcionarios')}>Sair</SairButton>
        </ButtonWrapper>
      </TopBar>

      <PageContent>
        <TabMenu>
          <Tab selected={abaAtiva === 'calendario'} onClick={() => setAbaAtiva('calendario')}>Calendário</Tab>
          <Tab selected={abaAtiva === 'orcamentos'} onClick={() => setAbaAtiva('orcamentos')}>Orçamentos</Tab>
          <Tab selected={abaAtiva === 'lembretes'} onClick={() => setAbaAtiva('lembretes')}>Lembretes</Tab>
          <Tab selected={abaAtiva === 'dashboard'} onClick={() => setAbaAtiva('dashboard')}>Dashboard</Tab>
        </TabMenu>

        <ContentBox>
          {abaAtiva === 'calendario' && (
            <>
              <CalendarWrapper>
                <ImgCalendario src={calendario} alt="Calendário" />
              </CalendarWrapper>
              <Eventos>
                <TituloEventos>Eventos do mês:</TituloEventos>
                <Secao>
                  <Subtitulo>Feriados</Subtitulo>
                  <Descricao>18/04 → Sexta feira Santa</Descricao>
                  <Descricao>20/04 → Domingo de Páscoa</Descricao>
                  <Descricao>21/04 → Tiradentes</Descricao>
                </Secao>
                <Secao>
                  <Subtitulo>Reuniões</Subtitulo>
                  <Descricao>28/04 → Reunião com Marcos</Descricao>
                  <Descricao>30/04 → Reunião com Maria</Descricao>
                </Secao>
              </Eventos>
            </>
          )}

          {abaAtiva === 'orcamentos' && (
            <div style={{ width: '100%' }}>
              <OrdenacaoWrapper>
                <label htmlFor="ordenar">Ordenar por prazo:</label>
                <select
                  id="ordenar"
                  onChange={(e) => setOrdenarPorPrazo(e.target.value as 'asc' | 'desc')}
                  value={ordenarPorPrazo}
                >
                  <option value="asc">Crescente</option>
                  <option value="desc">Decrescente</option>
                </select>
              </OrdenacaoWrapper>
              <TableWrapper>
                <Table>
                  <tbody>
                    <tr>
                      <Td><strong>Cliente</strong></Td>
                      <Td><strong>Email para contato</strong></Td>
                      <Td><strong>Detalhes</strong></Td>
                      <Td><strong>Prazo</strong></Td>
                    </tr>
                    {orcamentosOrdenados.map((orc, idx) => (
                      <tr key={idx}>
                        <Td>{orc.nome}</Td>
                        <Td>{orc.email}</Td>
                        <Td><a href="#" onClick={handleDownloadClick}>Clique aqui para ver o orçamento</a></Td>
                        <Td>{orc.prazo} dias para entrega</Td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </TableWrapper>
            </div>
          )}

          {abaAtiva === 'lembretes' && (
            <LembreteWrapper>
              <LembreteCard>
                🔴 <strong>Orçamento Marcos Silva</strong>
                <p>12 dias para a entrega do orçamento</p>
              </LembreteCard>
              <LembreteCard>
                🔴 <strong>Orçamento Maria Clara Silvestre</strong>
                <p>20 dias para a entrega do orçamento</p>
              </LembreteCard>
            </LembreteWrapper>
          )}

          {abaAtiva === 'dashboard' && (
            <>
              <IndicadorWrapper>
                <Indicador><h4>Orçamentos Pendentes</h4><p>2</p></Indicador>
                <Indicador><h4>Faturamento do mês</h4><p>R$ 31.340</p></Indicador>
                <Indicador><h4>Reuniões</h4><p>2 agendadas</p></Indicador>
                <Indicador><h4>Feedbacks</h4><p>14 positivos</p></Indicador>
              </IndicadorWrapper>
              <GraficosWrapper>
                <GraphBox>
                  <h4>Faturamento Mensal (2024/2025)</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={faturamentoData}>
                      <Line type="monotone" dataKey="valor" stroke="#8884d8" />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis dataKey="mes" />
                      <YAxis />
                      <Tooltip />
                    </LineChart>
                  </ResponsiveContainer>
                </GraphBox>
                <GraphBox>
                  <h4>Orçamentos Fechados(2024/2025)</h4>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={orcamentosData}>
                      <Bar dataKey="total" fill="#82ca9d" barSize={20} />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis dataKey="mes" />
                      <YAxis ticks={[0, 5, 10, 15, 20, 25]} />
                      <Tooltip cursor={false} />
                    </BarChart>
                  </ResponsiveContainer>
                </GraphBox>
              </GraficosWrapper>
            </>
          )}
        </ContentBox>
      </PageContent>
    </Container>
  );
};

const Container = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f9f9f9;
  min-height: 100vh;
`;

const TopBar = styled.div`
  background-color: #243436;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 10;
  box-sizing: border-box;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    padding: 12px 16px;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

const BotaoEdicao = styled.button`
  background-color: #007BFF;
  border: none;
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SairButton = styled(BotaoEdicao)`
  background-color: #F95400;

  &:hover {
    background-color: #c13e00;
  }
`;

const PageContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 150px 24px 24px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 130px 16px 24px; /* Aumenta o espaço no topo e ajusta o padding lateral */
  }
`;

const TabMenu = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  background: #fff;
`;

const Tab = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 12px;
  min-width: 120px;
  background-color: ${({ selected }) => (selected ? '#243436' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#243436')};
  border: 2px solid #243436;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#1a2526' : '#e5e7eb')};
  }
`;

const ContentBox = styled.div`
  margin-top: 16px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 24px;
`;

const CalendarWrapper = styled.div`
  flex: 1 1 60%;
  min-width: 300px;
`;

const ImgCalendario = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;

const Eventos = styled.div`
  flex: 1 1 35%;
  min-width: 260px;
  border-left: 1px solid #ccc;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid #ccc;
    padding-left: 0;
    padding-top: 16px;
  }
`;

const TituloEventos = styled.h3`
  font-size: 24px;
  margin-bottom: 12px;
  margin-top: 0;
`;

const Secao = styled.div`
  margin-bottom: 16px;
`;

const Subtitulo = styled.h4`
  font-size: 18px;
  color: #111827;
`;

const Descricao = styled.p`
  color: #374151;
  font-size: 16px;
  margin: 4px 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
`;

const Td = styled.td`
  border: 1px solid #d1d5db;
  padding: 10px;
  text-align: left;
  font-size: 15px;
`;

const LembreteCard = styled.div`
  background: #fff;
  padding: 16px;
  margin: 12px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  width: 280px;
  border: 1px solid #ccc;
`;

const LembreteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const IndicadorWrapper = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

const Indicador = styled.div`
  flex: 1;
  min-width: 200px;
  padding: 16px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
  text-align: center;
`;

const GraficosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const GraphBox = styled.div`
  flex: 1 1 400px;
  background: #fff;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const OrdenacaoWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  margin: 16px 0;

  label {
    font-size: 16px;
    color: #111;
  }

  select {
    font-size: 16px;
    padding: 6px 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;


const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export default UsoInterno;