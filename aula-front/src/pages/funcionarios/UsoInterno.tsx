import React, { useState, useEffect, MouseEvent } from 'react';
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
    { mes: 'Set', valor: 10300 },
    { mes: 'Out', valor: 12000 },
    { mes: 'Nov', valor: 9500 },
    { mes: 'Dez', valor: 13300 },
    { mes: 'Jan', valor: 8700 },
    { mes: 'Fev', valor: 11200 },
    { mes: 'Mar', valor: 12300 },
    { mes: 'Abr', valor: 9800 },
  ];

  const orcamentosData = [
    { mes: 'Set', total: 14 },
    { mes: 'Out', total: 18 },
    { mes: 'Nov', total: 15 },
    { mes: 'Dez', total: 22 },
    { mes: 'Jan', total: 9 },
    { mes: 'Fev', total: 12 },
    { mes: 'Mar', total: 17 },
    { mes: 'Abr', total: 11 },
  ];

  const orcamentos = [
    { nome: 'Marcos Silva', email: 'marcos@xxxx.com.br', prazo: '12' },
    { nome: 'Maria Clara Silvestre', email: 'mcsilvestre@xxxx.com.br', prazo: '20' },
  ];

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
        <div style={{ display: 'flex', gap: '12px' }}>
          <BotaoEdicao>Edição de Produto</BotaoEdicao>
          <SairButton onClick={() => navigate('/funcionarios')}>Sair</SairButton>
        </div>
      </TopBar>

      <Spacer />

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
              <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
                <label htmlFor="ordenar">Ordenar por prazo:</label>{' '}
                <select
                  id="ordenar"
                  onChange={(e) => setOrdenarPorPrazo(e.target.value as 'asc' | 'desc')}
                  value={ordenarPorPrazo}
                >
                  <option value="asc">Crescente</option>
                  <option value="desc">Decrescente</option>
                </select>
              </div>
              <Table>
                <tbody>
                  <tr>
                    <Td><strong>Cliente</strong></Td>
                    <Td><strong>Email para contato</strong></Td>
                    <Td><strong>Detalhes</strong></Td>
                    <Td><strong>Prazo</strong></Td>
                  </tr>
                  {[...orcamentos].sort((a, b) => {
                    const diasA = parseInt(a.prazo);
                    const diasB = parseInt(b.prazo);
                    return ordenarPorPrazo === 'asc' ? diasA - diasB : diasB - diasA;
                  }).map((orc, idx) => (
                    <tr key={idx}>
                      <Td>{orc.nome}</Td>
                      <Td>{orc.email}</Td>
                      <Td><a href="#" onClick={handleDownloadClick}>Clique aqui para ver o orçamento</a></Td>
                      <Td>{orc.prazo} dias para entrega</Td>
                    </tr>
                  ))}
                </tbody>
              </Table>
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
                <Indicador>
                  <h4>Orçamentos Pendentes</h4>
                  <p>2</p>
                </Indicador>
                <Indicador>
                  <h4>Faturamento do mês</h4>
                  <p>R$ 9.800</p>
                </Indicador>
                <Indicador>
                  <h4>Reuniões</h4>
                  <p>2 agendadas</p>
                </Indicador>
                <Indicador>
                  <h4>Feedbacks</h4>
                  <p>3 positivos</p>
                </Indicador>
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
                      <Tooltip cursor={false} />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <XAxis dataKey="mes" />
                      <YAxis ticks={[0, 5, 10, 15, 20, 25]} />
                      <Tooltip />
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
  font-family: Arial, sans-serif;
  background: #fff;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const TopBar = styled.div`
  width: 100%;
  background-color: #243436;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Spacer = styled.div`
  height: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Avatar = styled.img`
  width: 66px;
  height: 66px;
  border-radius: 50%;
`;

const SairButton = styled.button`
  background-color: #F95400;
  color: white;
  width: 120px;
  height: 40px;
  font-size: 18px;
  border: none;
  font-weight: bold;
  cursor: pointer;
`;

const PageContent = styled.div`
  max-width: 1208px;
  margin: 0 auto;
  padding-top: 0;
`;

const TabMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

const Tab = styled.button<{ selected: boolean }>`
  flex: 1;
  padding: 20px;
  background-color: white;
  border: 1px solid #000;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #000;
  text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ selected }) => (selected ? 'white' : '#f0f0f0')};
  }
`;


const ContentBox = styled.div`
  background: #D9D9D9;
  border: 1px solid #000;
  padding: 0;
  border-top: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 16px;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CalendarWrapper = styled.div`
  width: 820px;
  height: auto;
  flex-shrink: 0;

  img {
    width: 100%;
    height: auto;
  }
`;

const ImgCalendario = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Eventos = styled.div`
  padding: 0;
  max-width: 300px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-shrink: 0;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const TituloEventos = styled.h3`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const Secao = styled.div`
  margin-bottom: 24px;
`;

const Subtitulo = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const Descricao = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 2px 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Td = styled.td`
  border: 1px solid #999;
  padding: 8px;
`;

const LembreteCard = styled.div`
  background: white;
  padding: 12px;
  margin: 12px;
  border-radius: 8px;
  display: inline-block;
  width: 240px;
`;

const LembreteWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BotaoEdicao = styled.div`
  background-color: #007BFF;
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
  margin-left: 12px;
  font-size: 16px;
  font-weight: 500;
  display: inline-block;
`;

const IndicadorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;
  background-color: #eeeeee;
  width: 100%;
  box-sizing: border-box;
`;

const Indicador = styled.div`
  background: white;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  flex: 1 1 200px;
  min-width: 200px;
  max-width: 250px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.1);
`;

const GraficosWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
  margin-top: 24px;
`;

const GraphBox = styled.div`
  flex: 1 1 400px;
  background: #fff;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export default UsoInterno;