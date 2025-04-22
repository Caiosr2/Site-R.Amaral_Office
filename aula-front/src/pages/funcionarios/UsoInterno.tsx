import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import avatar1 from '../../assets/avatar1.png';
import calendario from '../../assets/calendario.png';


function handleDownloadClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  alert('O arquivo foi baixado no seu computador.');
}

const UsoInterno = () => {
  const [abaAtiva, setAbaAtiva] = useState('calendario');
  const navigate = useNavigate();

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
        <SairButton onClick={() => navigate('/funcionarios')}>Sair</SairButton>
      </TopBar>

      <Spacer />

      <PageContent>
        <TabMenu>
          <Tab selected={abaAtiva === 'calendario'} onClick={() => setAbaAtiva('calendario')}>Calendário</Tab>
          <Tab selected={abaAtiva === 'orcamentos'} onClick={() => setAbaAtiva('orcamentos')}>Orçamentos</Tab>
          <Tab selected={abaAtiva === 'lembretes'} onClick={() => setAbaAtiva('lembretes')}>Lembretes</Tab>
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
                  <Descricao>Sem eventos de reunião para esse mês</Descricao>
                </Secao>
              </Eventos>
            </>
          )}

          {abaAtiva === 'orcamentos' && (
            <Table>
              <tbody>
                <tr>
                  <Td><strong>Cliente</strong></Td>
                  <Td><strong>Email para contato</strong></Td>
                  <Td><strong>Detalhes</strong></Td>
                  <Td><strong>Prazo</strong></Td>
                </tr>
                <tr>
                  <Td>Marcos Silva</Td>
                  <Td>marcos@xxxx.com.br</Td>
                  <Td><a href="#" onClick={handleDownloadClick}>Clique aqui para ver o orçamento</a></Td>
                  <Td>X dias para entrega</Td>
                </tr>
                <tr>
                  <Td>Maria Clara Silvestre</Td>
                  <Td>mcsilvestre@xxxx.com.br</Td>
                  <Td><a href="#" onClick={handleDownloadClick}>Clique aqui para ver o orçamento</a></Td>
                  <Td>X dias para entrega</Td>
                </tr>
              </tbody>
            </Table>
          )}

          {abaAtiva === 'lembretes' && (
            <LembreteWrapper>
              <LembreteCard>
                🔴 <strong>Orçamento Marcos Silva</strong>
                <p>X dias para a entrega do orçamento</p>
              </LembreteCard>
              <LembreteCard>
                🔴 <strong>Orçamento Maria Clara Silvestre</strong>
                <p>X dias para a entrega do orçamento</p>
              </LembreteCard>
            </LembreteWrapper>
          )}
        </ContentBox>
      </PageContent>
    </Container>
  );
}

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
  padding: 24px 32px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

const Spacer = styled.div`
  height: 96px;
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
  width: 100%;
  max-width: 820px;
  height: auto;

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

export default UsoInterno;