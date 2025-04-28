import { Link } from 'react-router-dom';
import armario from "../assets/armario.png";
import cadeiracouro from "../assets/cadeiradecouro.png";
import cadeiraergonomica from "../assets/cadeira_ergonomica.png";
import cadeiraforttmilao from "../assets/cadeiraforttmilao.png";
import escrivaninha from "../assets/escrivaninha.png";
import gaveteiroextensor from "../assets/gaveteiroestendido.png";
import gaveteirooffice from "../assets/gaveteirooffice.png";
import gaveteiroyaris from "../assets/gaveteiroyaris.png";
import grampeador from "../assets/grampeador.png";
import grampos from "../assets/grampos.png";
import kittecladomouse from "../assets/KitTM.png";
import marcatexto from "../assets/Marca texto.png";
import mesaexecutiva from "../assets/mesamadeira.png";
import mesaeml from "../assets/MesaL.png";
import mouse from "../assets/mouse.png";
import cadeiraeduarda from "../assets/cadeiraeduarda.png";
import postit from "../assets/Post it.png";
import reguatomada from "../assets/reguadetomada.png";
import suportenote from "../assets/Suporte.png";
import borracha from "../assets/Borrachas.png";
import lapisgrafite from "../assets/lápis_grafite.png";
import folhasA3 from "../assets/Folhas_A3.png";
import canetasbic from "../assets/Canetas_bic.png";
import papel from "../assets/papel.png";
import tintas from "../assets/Tintas.png";
import tecladocomfio from "../assets/teclado_com_fio.png";
import telefone from "../assets/telefone.png";
import ssd from "../assets/ssd.png";
import webcam from "../assets/Webcam.png";
import impressora from "../assets/impressora.png";

const Lista_produtos =
[
    {
      id: 1,
      nome: "Armário de Escritório Yaris com Nichos",
      preco: 779.99,
      categoria: ['Móveis', 'Armário'],
      imagem: armario,
      link: "/armario",
      descricao: `O Armário Yaris oferece praticidade com um visual moderno, ideal para escritórios, home offices ou ambientes corporativos. Possui 2 portas e nichos abertos, permite armazenar documentos, livros, materiais e objetos decorativos com fácil acesso e discrição.`,
      features: `<li>Nichos abertos funcionais para itens de uso frequente ou decoração</li>
              <li>Estrutura em MDP resistente e durável</li>
              <li>Design moderno em nogal sevilha e preto</li>
              <li>Ideal para compor conjuntos com mesas e gaveteiros da linha Yaris</li>`
    },
    {
      id: 2,
      nome: "Cadeira de Escritório de couro",
      preco: 599.99,
      categoria: ['Móveis', 'Cadeiras'],
      imagem: cadeiracouro,
      link: "/cadeiracouro",
      descricao: `Essa cadeira é ideal para escritórios, salas de reunião ou home office sofisticado. Revestida em couro preto com acabamento acolchoado, proporciona excelente apoio para longas jornadas de trabalho.Sua base e o ajuste de altura garantem mobilidade e ergonomia no uso diário, enquanto os braços curvados oferecem um maior conforto.`,
      features: `<li>Encosto alto com apoio lombar e design acolchoado</li>
              <li>Sistema reclinável com ajuste de pressão</li>
              <li>Apoios de braço fixos com acabamento metálico</li>`
    },
    {
      id: 3,
      nome: "Cadeira de Escritório Comfy Stance Plus",
      preco: 721.99,
      categoria: ['Móveis', 'Cadeiras'],
      imagem: cadeiraergonomica,
      link: "/cadeiraergonomica",
      descricao: `A cadeira foi desenvolvida para oferecer suporte adequado à postura, com design moderno e materiais respiráveis que proporcionam bem-estar durante todo o dia.
              Seu encosto permite maior ventilação, enquanto o assento estofado garante conforto prolongado.`,
      features: `<li>Encosto em tela mesh preta – respirável e resistente</li>
              <li>Assento estofado com espuma de alta densidade</li>
              <li>Base giratória com rodízios</li>
              <li>Inclinação com relax com trava – intensidade controlável</li>`
    },
    {
      id: 4,
      nome: "Cadeira Fortt Milão Giratória",
      preco: 799.99,
      categoria: ['Móveis', 'Cadeiras'],
      imagem: cadeiraforttmilao,
      link: "/cadeiraforttmilao",
      descricao: `A Cadeira Fortt Milão é sinônimo de praticidade e sofisticação. Com um design moderno e estrutura resistente, é ideal para ambientes corporativos e escritórios que exigem conforto e estilo durante o trabalho.`,
      features: `<li>Assento e encosto com revestimento resistente e elegante</li>
              <li>Base giratória com rodízios para fácil movimentação</li>
              <li>Altura ajustável para melhor ergonomia</li>
              <li>Design versátil que combina com diversos espaços</li>`
    },
    {
      id: 5,
      nome: "Escrivaninha Office 3 GV Grafite e Mel",
      preco: 724.99,
      categoria: ['Móveis', 'Mesas'],
      imagem: escrivaninha,
      link: "/escrivaninha",
      descricao: `A Escrivaninha Office é a escolha ideal para quem busca praticidade, organização e um visual moderno. Conta com 3 gavetas que ajudam a manter tudo no lugar, desde materiais de escritório até objetos pessoais.`,
      features: `<li>Acabamento moderno em grafite e mel</li>
              <li>Estrutura em MDF de qualidade, resistente e fácil de limpar</li>
              <li>Tamanho compacto, ideal para ambientes pequenos</li>
              <li>Superfície ampla para notebook, livros e materiais de apoio</li>`
    },
    {
      id: 6,
      nome: "Gaveteiro com Extensor Yaris 4 GV",
      preco: 619.99,
      categoria: ['Móveis', 'Gaveteiro'],
      imagem: gaveteiroextensor,
      link: "/gaveteiroextensor",
      descricao: `O Gaveteiro Yaris com extensor é ideal para quem precisa de espaço extra para organização sem abrir mão da elegância. 
              Com 4 gavetas espaçosas e um extensor lateral, oferece área adicional para apoio de objetos ou ampliação da superfície de trabalho.`,
      features: `<li>4 gavetas com corrediças metálicas e puxadores discretos</li>
              <li>Extensor lateral funcional: ideal para impressoras, pastas ou itens decorativos</li>
              <li>Produzido em MDP de alta resistência e durabilidade</li>
              <li>Design versátil para otimizar o espaço e complementar mesas</li>`
    },
    {
      id: 7,
      nome: "Gaveteiro Office 4 GV Grafite e Mel",
      preco: 649.99,
      categoria: ['Móveis', 'Gaveteiro'],
      imagem: gaveteirooffice,
      link: "/gaveteirooffice",
      descricao: `O Gaveteiro Office com 4 gavetas é perfeito para complementar sua mesa de escritório ou home office, oferecendo espaço extra para armazenar documentos, materiais e itens pessoais. 
              Com estrutura robusta e acabamento em grafite e mel, ele une funcionalidade e elegância em um só móvel.`,
      features: `<li>4 gavetas espaçosas com corrediças metálicas</li>
              <li>Fechamento simples e puxadores discretos</li>
              <li>Produzido em MDP de alta resistência</li>`
    },
    {
      id: 8,
      nome: "Gaveteiro Yaris 4 GV Nogal e Preto",
      preco: 584.99,
      categoria: ['Móveis', 'Gaveteiro'],
      imagem: gaveteiroyaris,
      link: "/gaveteiroyaris",
      descricao: `O Gaveteiro Yaris oferece funcionalidade e elegância para compor seu escritório ou home office com estilo. Com 4 gavetas espaçosas, é ideal para organizar itens com praticidade. 
              Sua combinação de cores proporciona um visual moderno e sofisticado.`,
      features: `<li>Primeira gaveta possui tranca com chave. Todas com puxadores discretos e corrediça metálica</li>
              <li>Estrutura em MDP de excelente durabilidade</li>
              <li>Design compacto e versátil</li>
              <li>Acabamento em nogal sevilha e preto – elegante e contemporâneo</li>`
    },
    {
      id: 9,
      nome: "Grampeador de mesa, Cis First Line",
      preco: 29.99,
      categoria: ['Papelaria', 'Grampeador'],
      imagem: grampeador,
      link: "/grampeador",
      descricao: `O grampeador Cis First Line é ideal para quem busca eficiência e durabilidade. Possui uma estrutura metálica e uma base estável.`,
      features: `<li>Capacidade para grampear até 20 folhas (papel 75g/m²)</li>
              <li>Capacidade interna para 20 grampos</li>
              <li>Compatível com grampos 26/6</li>
              <li>Base antiderrapante que evita deslizamentos</li>`
    },
    {
      id: 10,
      nome: "Cis Grampos 5000 Un.",
      preco: 25.99,
      categoria: ['Papelaria', 'Grampeador'],
      imagem: grampos,
      link: "/grampos",
      descricao: `Grampos metálicos tipo 26/6 ideais para grampeadores de mesa. Fabricados em aço galvanizado, oferecem firmeza e durabilidade na fixação de documentos.`,
      features: `<li>Compatíveis com a maioria dos grampeadores padrão</li>
              <li>Grampeiam até 20 folhas (75g/m²)</li>
              <li>Alta resistência à oxidação</li>
              <li>Embalagem com 5.000 unidades</li>`
    },
    {
      id: 11,
      nome: "Kit Teclado e Mouse sem fio Logitech MK235",
      preco: 149.99,
      categoria: ['Tecnologia', 'Periféricos'],
      imagem: kittecladomouse,
      link: "/kittecladomouse",
      descricao: `O kit Logitech MK235 oferece um teclado completo com layout ABNT2 e um mouse ergonômico, ambos com conexão sem fio confiável de 2,4GHz via receptor USB.`,
      features: `<li>Teclado de tamanho padrão com teclas silenciosas</li>
              <li>Conexão sem fio estável de até 10 metros</li>
              <li>Receptor USB Plug & Play – fácil instalação</li>
              <li>Pilhas inclusas</li>`
    },
    {
      id: 12,
      nome: "Marca Texto Amarelo, Faber-Castell, 12 Un.",
      preco: 39.99,
      categoria: ['Papelaria', 'Canetas'],
      imagem: marcatexto,
      link: "/marcatexto",
      descricao: `O Marca Texto GriffPen da Faber-Castell oferece precisão para quem precisa
              destacar informações com eficiência no dia a dia. Sua tinta fluorescente
              realça o texto com excelente visibilidade e secagem rápida, sem borrar.`,
      features: `<li>Ideal para papel comum, reciclado ou impressão a laser</li>
              <li>Escrita suave e destacada</li>
              <li>Contém: 12 marca-textos na cor amarela.</li>`
    },
    {
      id: 13,
      nome: "Mesa de Escritório em L Anah",
      preco: 1597.99,
      categoria: ['Móveis', 'Mesas'],
      imagem: mesaeml,
      link: "/mesaeml",
      descricao: `A Mesa Anah em L é perfeita para escritórios, home office ou espaços corporativos que precisam de organização com um toque moderno. Seu design proporciona amplo espaço para computadores, documentos e acessórios.`,
      features: `<li>Formato em L: ideal para aproveitamento de canto ou montagem reversível</li>
              <li>Estrutura em MDF de alta resistência</li>
              <li>Superfície ampla para monitores, documentos e itens de trabalho</li>
              <li>Design versátil para ambientes corporativos ou residenciais</li>`
    },
    {
      id: 14,
      nome: "Mesa de Escritório Executiva 4 GV",
      preco: 1576.99,
      categoria: ['Móveis', 'Mesas'],
      imagem: mesaexecutiva,
      link: "/mesaexecutiva",
      descricao: `A Mesa Executiva é ideal para quem exige funcionalidade e presença. Com 4 gavetas posicionadas no lado direito, oferece amplo espaço para armazenamento e uma superfície de trabalho confortável. A combinação de cores garante um visual elegante.`,
      features: `<li>Lado direito com módulo fixo de armazenamento</li>
              <li>Estrutura em MDP resistente e durável</li>
              <li>Acabamento em marrom e preto, design profissional e elegante</li>
              <li>Superfície ampla para computador, monitor e materiais de apoio</li>`
    },
    {
      id: 15,
      nome: "Mouse com fio USB Logitech M90",
      preco: 33.99,
      categoria: ['Tecnologia', 'Periféricos'],
      imagem: mouse,
      link: "/mouse",
      descricao: `O Logitech M90 é a escolha ideal para quem busca simplicidade, conforto e desempenho no dia a dia. Com conexão USB e design ambidestro, oferece uma experiência de uso prática e eficiente tanto para destros quanto para canhotos.`,
      features: `<li>Rastreamento óptico preciso</li>
              <li>Compatível com Windows, macOS e Linux</li>
              <li>Ideal para uso doméstico, profissional ou escolar</li>`
    },
    {
      id: 16,
      nome: "Poltrona Escritório Eduarda em Linho",
      preco: 899.99,
      categoria: ['Móveis', 'Cadeiras'],
      imagem: cadeiraeduarda,
      link: "/poltronaeduarda",
      descricao: `A Poltrona Eduarda traz um toque moderno e elegante para escritórios, home office ou espaços de estudo. Sua base dourada metálica com rodas garante estabilidade e mobilidade, enquanto o sistema de regulagem de altura proporciona mais ergonomia para o uso diário.`,
      features: `<li>Revestimento em linho rosé – charme e suavidade ao toque</li>
              <li>Base metálica dourada com rodízios – resistente e sofisticada</li>
              <li>Regulagem de altura por pistão a gás</li>
              <li>Assento giratório com estrutura confortável</li>`
    },
    {
      id: 17,
      nome: "Post-it, 76 mm x 76 mm, Amarela, 4 Un x 25 Folhas",
      preco: 33.99,
      categoria: ['Papelaria', 'Papel'],
      imagem: postit,
      link: "/postit",
      descricao: `Notas adesivas práticas e versáteis, ideais para lembretes, recados e anotações rápidas no dia a dia.`,
      features: `<li>Formato pop-up: facilita o uso com suportes</li>
              <li>Tamanho: 76 mm x 76 mm (3” x 3”)</li>
              <li>Cor: Amarelo</li>
              <li>Contém 4 blocos com 25 folhas cada (total: 100 folhas)</li>
              <li>Adesivo de alta qualidade, reposicionável sem danificar o papel</li>`
    },
    {
      id: 18,
      nome: "Régua de tomada Preta Bivolt Fiolux",
      preco: 42.9,
      categoria: ['Tecnologia', 'Utilidades'],
      imagem: reguatomada,
      link: "/reguatomada",
      descricao: `A régua de tomadas Fiolux é ideal para organizar e expandir o número de conexões elétricas em ambientes residenciais ou corporativos. 
              Com design compacto e acabamento resistente, oferece praticidade e segurança no uso do dia a dia.`,
      features: `<li>6 tomadas no padrão brasileiro (2P+T)</li>
              <li>Bivolt (127V / 220V) – compatível com diferentes tensões</li>
              <li>Cabo com bom comprimento para alcance facilitado</li>
              <li>Proteção contra sobretensão</li>`
    },
    {
      id: 19,
      nome: "Suporte para notebook, portátil, NTB8520B, Elg",
      preco: 32.6,
      categoria: ['Tecnologia', 'Suporte'],
      imagem: suportenote,
      link: "/suportenote",
      descricao: `O suporte NTB8520B da Elg é ideal para quem busca mais conforto e ergonomia no uso diário do notebook. Portátil e dobrável, é perfeito para escritórios ou home office.`,
      features: `<li>Compatível com notebooks de até 15,6”</li>
              <li>Ajuste de inclinação em múltiplos níveis para melhor postura e ventilação</li>
              <li>Estrutura leve, dobrável e fácil de transportar</li>
              <li>Embalagem com 1 unidade</li>`
    },
    {
        id: 20,
        nome: "Pacote de Borrachas Pequenas, Faber-Castell, 24 Un",
        preco: 84.99,
        categoria: ['Papelaria', 'Borracha'],
        imagem: borracha, 
        link: "/borracha",
        descricao: `As borrachas pequenas da Faber-Castell são macias e eficientes, garantindo uma boa apagabilidade sem danificar o papel. Perfeitas para quem busca qualidade e praticidade no dia a dia.`,
        features: `<li>Apagam com facilidade e sem deixar resíduos</li>
                   <li>Tamanho compacto: práticas para estojos e mesas de trabalho</li>
                   <li>Embalagem com 24 unidades</li>`
      },
      {
        id: 21,
        nome: "Lápis Grafite 2B Preto, Faber-Castell, 14 Un.",
        preco: 95.99,
        categoria: ['Papelaria', 'Lápis'],
        imagem: lapisgrafite,
        link: "/lapisgrafite",
        descricao: `O Ecolápis Grafite Faber-Castell Nº 2B possui alta qualidade e maciez. Sua ponta resistente proporciona escrita suave e precisa.`,
        features: `<li>Grafite nº 2B: escuro, macio e fácil de apagar</li>
                   <li>Ponta resistente e escrita suave</li>
                   <li>Formato sextavado: mais firmeza e conforto ao escrever</li>
                   <li>Caixa com 144 lápis + 24 unidades grátis (total: 168 unidades)</li>
                   <li>Cor do corpo: preta</li>`
      },
      {
        id: 22,
        nome: "Papel Sulfite A3 – 10 Pacotes x 250 Folhas",
        preco: 269.99,
        categoria: ['Papelaria', 'Papel'],
        imagem: folhasA3,
        link: "/folhasa3",
        descricao: `Papel sulfite de alta qualidade, ideal para impressões coloridas, relatórios gráficos, projetos arquitetônicos e apresentações com acabamento profissional. Com gramatura de 90g/m², garante maior resistência e excelente desempenho em impressoras jato de tinta e laser.`,
        features: `<li>Formato: A3 – 297 x 420 mm</li>
                   <li>Embalagem com 10 pacotes de 250 folhas (total: 2.500 folhas)</li>`
      },
      {
        id: 23,
        nome: "Caneta Esferográfica Preta, Bic, 50 Un.",
        preco: 36.99,
        categoria: ['Papelaria', 'Canetas'],
        imagem: canetasbic,
        link: "/canetasbic",
        descricao: `A Bic Cristal é sinônimo de praticidade, economia e confiabilidade. Essa caneta esferográfica é perfeita para quem busca uma escrita suave, limpa e de alta durabilidade. Com a tecnologia Dura+, proporciona ainda mais rendimento e resistência, sendo ideal para o uso intenso.`,
        features: `<li>Escrita macia e fluida, com tinta de secagem rápida</li>
                   <li>Ponta média (1.0mm): equilíbrio ideal entre precisão e conforto</li>
                   <li>Cor da tinta: preta</li>
                   <li>Contém: 50 unidades</li>`
      },
      {
        id: 24,
        nome: "Papel Sulfite A4 – 10 Pacotes x 500 Folhas",
        preco: 239.99,
        categoria: ['Papelaria', 'Papel'],
        imagem: papel,
        link: "/papel",
        descricao: `Ideal para quem busca eficiência e praticidade no dia a dia. Excelente para escritórios, home office e estudos, com ótimo desempenho e compatibilidade com impressoras e copiadoras.`,
        features: `<li>Excelente desempenho</li>
                   <li>Alta brancura</li>
                   <li>Compatível com impressoras e copiadoras</li>
                   <li>Indicado para escritórios, home office e estudos</li>
                   <li>Contém 5.000 folhas A4 (10 pacotes de 500 folhas)</li>`
      },
      {
        id: 25,
        nome: "Kit com 4 Garrafas de Tinta Epson",
        preco: 189.99,
        categoria: ['Papelaria', 'Tinta'],
        imagem: tintas,
        link: "/tintas",
        descricao: `Tinta original Epson compatível com a EcoTank L5590. Garante impressões com cores vivas, secagem rápida e alto rendimento. Ideal para quem busca desempenho, economia e qualidade nas impressões do dia a dia.`,
        features: `<li>Contém: 4 frascos (T544120, T544220, T544320, T544420)</li>
                   <li>Cores: Preto, Ciano, Magenta e Amarelo</li>
                   <li>Compatível com: Epson EcoTank L5590</li>
                   <li>Embalagem com 1 kit (4 unidades)</li>`
      },
      {
        id: 26,
        nome: "Teclado Dell com fio - KB216",
        preco: 99.99,
        categoria: ['Tecnologia', 'Periféricos'],
        imagem: tecladocomfio,
        link: "/tecladocomfio",
        descricao: `O teclado Dell KB216 combina praticidade, conforto e durabilidade para o uso diário. Com layout brasileiro (ABNT2) e conexão via cabo USB, é ideal para quem busca desempenho e digitação silenciosa. Perfeito para ambientes corporativos, escolares ou home office.`,
        features: `<li>Teclas silenciosas: digitação mais confortável</li>
                   <li>Teclado numérico integrado</li>
                   <li>Compatível com Windows, Linux e outros sistemas via USB</li>
                   <li>Cor: Preto</li>`
      },
      {
        id: 27,
        nome: "Telefone OpenScape Deskphone CP400",
        preco: 849.99,
        categoria: ['Tecnologia', 'Telefonia'],
        imagem: telefone,
        link: "/telefone",
        descricao: `O OpenScape CP400 é um telefone IP corporativo ideal para empresas que exigem qualidade de áudio, praticidade e recursos avançados de comunicação. Com design elegante e interface intuitiva, ele é perfeito para ambientes profissionais dinâmicos.`,
        features: `<li>Display gráfico de 3,7” com iluminação de fundo</li>
                   <li>16 teclas programáveis com LED tricolor</li>
                   <li>Conexão via Ethernet (10/100/1000 Mbps)</li>
                   <li>Viva-voz em alta qualidade (HD Áudio)</li>`
      },
      {
        id: 28,
        nome: "SSD Externo Portátil Sandisk, 1TB",
        preco: 509.99,
        categoria: ['Tecnologia', 'Periféricos'],
        imagem: ssd,
        link: "/ssd",
        descricao: `O SSD portátil SanDisk combina velocidade, durabilidade e praticidade em um design compacto. Com 1TB de capacidade e velocidade de leitura de até 800MB/s, é ideal para transferir grandes arquivos, executar backups e transportar dados com segurança.`,
        features: `<li>Capacidade: 1TB</li>
                   <li>Velocidade de leitura: até 800MB/s</li>
                   <li>Conexão USB 3.2 Gen 2 (acompanha cabo USB-C e adaptador USB-A)</li>
                   <li>Resistente a quedas de até 2 metros</li>
                   <li>Design leve e portátil com gancho para transporte</li>
                   <li>Cor: Preto com detalhes em laranja</li>`
      },
      {
        id: 29,
        nome: "Webcam Logitech C270 HD",
        preco: 179.99,
        categoria: ['Tecnologia', 'Periféricos'],
        imagem: webcam,
        link: "/webcam",
        descricao: `A Logitech C270 é a webcam ideal para videochamadas com imagem clara e som nítido. Com resolução HD 720p e microfone embutido com redução de ruído, proporciona uma comunicação eficiente e com qualidade profissional para o dia a dia.`,
        features: `<li>Resolução HD 720p (1280 × 720) a 30 fps</li>
                   <li>Conexão fácil via USB 2.0 – Plug & Play</li>
                   <li>Clipe universal para fixação em notebooks e monitores</li>
                   <li>Cor: Cinza/Preta</li>`
      },
      {
        id: 30,
        nome: "Impressora Multifuncional Epson Ecotank L5590",
        preco: 1709.99,
        categoria: ['Tecnologia', 'Impressoras'],
        imagem: impressora,
        link: "/impressora",
        descricao: `A Epson EcoTank L5590 é uma impressora completa. Possui o sistema EcoTank, eliminando o uso de cartuchos e reduzindo drasticamente o custo por página. Possui conectividade Wi-Fi, Wi-Fi Direct e USB.`,
        features: `<li>Impressão, cópia, digitalização e fax</li>
                   <li>Alimentador automático de documentos (ADF) para até 30 páginas</li>
                   <li>Compatível com app Epson Smart Panel (configuração e impressão via celular)</li>`
      }
  ];
  


export default Lista_produtos;