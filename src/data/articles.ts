export type Editoria = "TECNOLOGIA" | "CULTURA" | "FUTURO" | "OPINIÃO";

export type Article = {
  slug: string;
  title: string;
  dek: string;
  editoria: Editoria;
  tag: string;
  date: string;
  readingTime: string;
  author: string;
  body: string[];
  pull?: string;
};

export const articles: Article[] = [
  {
    slug: "o-novo-chip-que-promete-acelerar-a-era-da-ia",
    title: "O novo chip que promete acelerar a era da IA",
    dek: "Com mais eficiência e menor consumo de energia, o novo processador pode mudar o jogo para os modelos de linguagem.",
    editoria: "TECNOLOGIA",
    tag: "HARDWARE",
    date: "12 AGO 2025",
    readingTime: "05 MIN",
    author: "Redação Baixa Resolução",
    pull: "Eficiência energética tornou-se o novo gargalo da revolução algorítmica.",
    body: [
      "A indústria de semicondutores acaba de dar uma guinada crucial. A nova arquitetura desenvolvida especificamente para inferência local de modelos generativos reduz drasticamente o consumo de energia sem abrir mão da largura de banda necessária para bilhões de parâmetros.",
      "Para os data centers globais, que hoje enfrentam restrições severas de fornecimento elétrico e arrefecimento, a novidade representa uma extensão de fôlego. Para o usuário comum, significa que interfaces inteligentes podem finalmente rodar em hardware convencional com latência imperceptível.",
      "A promessa agora sai das bancadas de teste e vai para a linha de produção em massa, com expectativas de reordenar a disputa entre as fabricantes de chips.",
    ],
  },
  {
    slug: "como-a-tecnologia-esta-mudando-o-jeito-que-a-gente-cria",
    title: "Como a tecnologia está mudando o jeito que a gente cria",
    dek: "Da música ao cinema, passando pelos games, a IA já é parte do processo criativo — e levanta novas perguntas sobre originalidade.",
    editoria: "CULTURA",
    tag: "CRIAÇÃO",
    date: "10 AGO 2025",
    readingTime: "06 MIN",
    author: "Redação Baixa Resolução",
    pull: "A ferramenta deixou de ser passiva para se tornar interlocutora do autor.",
    body: [
      "Da composição de trilhas sonoras à renderização em tempo real de cenários hiper-realistas para games, os algoritmos generativos deixaram de ser ferramentas secundárias e passaram a ocupar o centro do fluxo de produção artística.",
      "Criadores relatam que a velocidade de iteração aumentou exponencialmente, mas com isso surgiu uma ansiedade inédita sobre identidade, estilo e a fronteira entre inspiração humana e sintetização computacional.",
      "O debate sobre direitos autorais e remuneração justa ganha contornos práticos em estúdios pelo mundo, enquanto novas linguagens estéticas começam a nascer das próprias imperfeições das máquinas.",
    ],
  },
  {
    slug: "cidades-inteligentes-realidade-ou-so-mais-um-hype",
    title: "Cidades inteligentes: realidade ou só mais um hype?",
    dek: "Com sensores, dados e IA, as cidades prometem ser mais eficientes. Mas na prática, ainda há muitos desafios — e poucos resultados concretos.",
    editoria: "FUTURO",
    tag: "URBANISMO",
    date: "08 AGO 2025",
    readingTime: "07 MIN",
    author: "Redação Baixa Resolução",
    pull: "A promessa de cidades perfeitas esbarra na complexidade caótica da vida urbana real.",
    body: [
      "Há mais de uma década, promessas de metrópoles totalmente integradas por sensores IoT, semáforos autônomos e gestão preditiva de trânsito povoam o marketing de empresas de tecnologia e discursos públicos.",
      "Contudo, os testes em cidades de médio e grande porte têm esbarrado em problemas fundamentais: alto custo de manutenção de infraestrutura física, vulnerabilidades de cibersegurança e uma vigilância massiva que desperta resistência social.",
      "Em vez de utopias centralizadas, o que tem demonstrado eficácia são soluções pontuais e de baixa complexidade técnica voltadas diretamente às necessidades dos cidadãos.",
    ],
  },
  {
    slug: "a-gente-ainda-controla-a-tecnologia",
    title: "A gente ainda controla a tecnologia?",
    dek: "Entre facilidades e dependência, vale refletir: estamos usando a IA como ferramenta ou já estamos sendo usados por ela?",
    editoria: "OPINIÃO",
    tag: "FILOSOFIA",
    date: "06 AGO 2025",
    readingTime: "05 MIN",
    author: "Redação Baixa Resolução",
    pull: "O limite entre conveniência e abdicação da autonomia cognitiva é invisível até ser ultrapassado.",
    body: [
      "Cada automação bem-sucedida nos poupa tempo para que possamos gastá-lo em novas interfaces de engajamento contínuo. Esse ciclo de dependência funcional altera sutilmente nossa relação com o trabalho e o pensamento crítico.",
      "Quando algoritmos decidem o que lemos, como formulamos respostas e quais rotas tomamos, a sensação de livre-arbítrio se mantém, mas as opções disponíveis foram rigorosamente pré-computadas.",
      "Resgatar uma postura crítica em relação à tecnologia não significa rejeitá-la, mas sim exigir transparência sobre os incentivos econômicos que operam por trás de cada tela.",
    ],
  },
  {
    slug: "a-internet-esta-quebrada",
    title: "A internet está quebrada?",
    dek: "Plataformas fechadas, busca degradada e conteúdo sintético: um diagnóstico do que sobrou da web aberta.",
    editoria: "OPINIÃO",
    tag: "WEB",
    date: "07 SET 2026",
    readingTime: "06 MIN",
    author: "Redação Baixa Resolução",
    pull: "A web não morreu. Ela foi cercada, dividida em lotes e vendida por assinatura.",
    body: [
      "Durante duas décadas, a promessa da internet foi a de um espaço comum: qualquer pessoa poderia publicar, qualquer página poderia ser encontrada. Essa promessa não desapareceu de uma vez. Ela foi sendo desmontada em pequenas decisões de produto, quase todas defensáveis isoladamente.",
      "O resultado é uma rede em que a maior parte do tráfego circula dentro de cinco ou seis aplicativos, onde links são penalizados, arquivos são efêmeros e a busca devolve páginas escritas para agradar sistemas de ranqueamento, não pessoas.",
      "A camada de inteligência artificial acelerou o processo. Quando o custo de produzir texto tende a zero, o valor migra para a curadoria — e a curadoria voltou a ser humana, lenta e editorial. É uma ironia difícil de ignorar.",
      "Não se trata de nostalgia. A web dos anos 2000 era mais lenta, mais feia e menos acessível. O ponto é outro: perdemos a capacidade de sair. Cada plataforma resolveu um problema real e, em troca, cobrou a portabilidade do que produzimos nela.",
      "Consertar isso não depende de uma tecnologia nova. Depende de decisões chatas: padrões abertos, exportação de dados, feeds legíveis por máquina, financiamento direto de publicações pequenas. Baixa tecnologia para um problema de alta tecnologia.",
    ],
  },
  {
    slug: "o-futuro-nao-precisa-de-telas",
    title: "O futuro não precisa de telas",
    dek: "Assistentes de voz, wearables e interfaces ambientes prometem devolver a atenção. A conta ainda não fecha.",
    editoria: "FUTURO",
    tag: "INTERFACES",
    date: "02 SET 2026",
    readingTime: "08 MIN",
    author: "Redação Baixa Resolução",
    pull: "Toda interface que promete desaparecer acaba pedindo mais atenção do que a anterior.",
    body: [
      "A indústria repete um ciclo previsível: alguém anuncia o fim do smartphone, apresenta um objeto sem tela e, dois anos depois, adiciona uma tela a ele.",
      "O problema não é técnico. Voz é ambígua, gestos são cansativos e contexto é caro de manter. Telas venceram porque são densas em informação e baratas em atenção — você olha e entende.",
      "Ainda assim, há um caminho legítimo: interfaces que fazem menos. Um dispositivo que só lê e responde, sem feed, sem loja, sem notificação de engajamento. Não é o futuro brilhante das apresentações; é o futuro modesto que talvez funcione.",
      "Enquanto isso, o que se vende como pós-tela costuma ser a mesma economia da atenção em outro formato de plástico.",
    ],
  },
  {
    slug: "por-que-todo-app-parece-uma-rede-social",
    title: "Por que todo aplicativo agora parece uma rede social?",
    dek: "Do banco ao app de corrida: como o feed virou o formato padrão de qualquer produto digital.",
    editoria: "CULTURA",
    tag: "PRODUTO",
    date: "28 AGO 2026",
    readingTime: "05 MIN",
    author: "Redação Baixa Resolução",
    body: [
      "Feeds são fáceis de justificar em uma reunião: aumentam sessão, retenção e espaço publicitário. Nenhuma dessas métricas descreve utilidade.",
      "O efeito colateral é a homogeneização. Produtos com propósitos completamente diferentes adotam o mesmo esqueleto — cartão, avatar, curtida, rolagem infinita — porque é o padrão que a indústria sabe implementar e medir.",
      "Quando tudo vira rede social, nada é. O usuário aprende a rolar sem ler, e a empresa comemora um número que já não significa nada.",
    ],
  },
  {
    slug: "modelos-menores-hardware-comum",
    title: "Modelos menores, hardware comum",
    dek: "A corrida por escala perdeu força. O interesse agora é rodar IA localmente, com pouca memória e sem nuvem.",
    editoria: "TECNOLOGIA",
    tag: "IA",
    date: "24 AGO 2026",
    readingTime: "07 MIN",
    author: "Redação Baixa Resolução",
    body: [
      "Modelos compactos deixaram de ser curiosidade acadêmica e viraram estratégia de custo. Rodar no dispositivo elimina latência, reduz gasto por requisição e resolve boa parte das perguntas sobre privacidade.",
      "A limitação é conhecida: menos parâmetros, menos memória de contexto, mais erro em tarefas longas. Para a maioria dos usos reais — resumir, classificar, transcrever, completar — isso importa menos do que a indústria sugeria.",
      "É uma mudança de infraestrutura antes de ser uma mudança de produto. E infraestrutura, historicamente, é o que decide qual estética de software vence.",
    ],
  },
  {
    slug: "quem-ganha-quando-um-app-e-gratuito",
    title: "Quem realmente ganha quando um aplicativo é gratuito?",
    dek: "Publicidade, dados e trabalho não remunerado: a contabilidade escondida dos serviços sem preço.",
    editoria: "OPINIÃO",
    tag: "ECONOMIA",
    date: "19 AGO 2026",
    readingTime: "06 MIN",
    author: "Redação Baixa Resolução",
    body: [
      "Gratuito nunca significou sem custo. Significa que o custo foi transferido para outro lugar da planilha — geralmente para a atenção do usuário e para o trabalho de quem produz conteúdo dentro da plataforma.",
      "O modelo funciona enquanto o crescimento paga a conta. Quando para, o serviço piora de forma deliberada: mais anúncios, menos alcance orgânico, recursos básicos movidos para a assinatura.",
      "A pergunta útil não é se algo é caro ou barato, mas quem tem poder de mudar as regras depois que você já depende do serviço.",
    ],
  },
  {
    slug: "a-internet-esta-ficando-silenciosa",
    title: "A internet está ficando silenciosa?",
    dek: "Fóruns fecham, comentários somem e a conversa migra para grupos privados. O que se perde quando a web deixa de ser pública.",
    editoria: "CULTURA",
    tag: "COMUNIDADES",
    date: "12 AGO 2026",
    readingTime: "05 MIN",
    author: "Redação Baixa Resolução",
    body: [
      "A conversa não acabou; mudou de endereço. Saiu de páginas indexáveis e foi para grupos fechados, servidores privados e mensagens que desaparecem.",
      "Para quem participa, é mais confortável. Para a memória coletiva da rede, é uma perda difícil de reverter: o arquivo público da internet está encolhendo pela primeira vez.",
      "O silêncio aparente é, na verdade, uma privatização da conversa.",
    ],
  },
  {
    slug: "design-contra-o-usuario",
    title: "O design contra o usuário",
    dek: "Padrões obscuros, cancelamentos impossíveis e interfaces feitas para exaurir antes de ajudar.",
    editoria: "OPINIÃO",
    tag: "UX",
    date: "05 AGO 2026",
    readingTime: "04 MIN",
    author: "Redação Baixa Resolução",
    body: [
      "Houve um tempo em que o bom design era invisível, focando apenas em guiar o usuário de forma fluida. Hoje, a invisibilidade serve para esconder os botões de cancelar assinatura.",
      "A métrica de engajamento corrompeu a interface: o objetivo não é mais resolver o problema de quem usa, mas extrair a maior quantidade de tempo, dados ou dinheiro possível antes que a frustração vença a conveniência.",
    ],
  },
  {
    slug: "o-impacto-da-ia-no-mercado-de-trabalho",
    title: "O impacto da IA no mercado de trabalho",
    dek: "Automação, requalificação e novos papéis: como a inteligência artificial está transformando a dinâmica profissional global.",
    editoria: "TECNOLOGIA",
    tag: "TRABALHO",
    date: "11 AGO 2025",
    readingTime: "06 MIN",
    author: "Redação Baixa Resolução",
    body: [
      "A transição provocada por agentes autônomos e assistentes de código tem redefinido atribuições em equipes técnicas e operacionais.",
      "Mais do que substituir funções inteiras, a tecnologia tem redistribuído o valor das competências: tarefas rotineiras de escrita e síntese passam para a máquina, enquanto discernimento arquitetural e curadoria humana ganham protagonismo.",
    ],
  },
  {
    slug: "open-source-por-que-ainda-importa",
    title: "Open source: por que ainda importa?",
    dek: "Transparência, soberania digital e modelos abertos: a relevância do código aberto em um cenário dominado por ecossistemas fechados.",
    editoria: "CULTURA",
    tag: "OPEN SOURCE",
    date: "09 AGO 2025",
    readingTime: "05 MIN",
    author: "Redação Baixa Resolução",
    body: [
      "O ecossistema open source segue sendo a espinha dorsal de quase toda a infraestrutura digital contemporânea.",
      "Em um momento em que grandes conglomerados tentam cercar a inteligência artificial com barreiras de acesso e patentes restritivas, a comunidade aberta reage oferecendo pesos livres, dados auditáveis e ferramentas soberanas.",
    ],
  },
  {
    slug: "elon-musk-e-o-futuro-da-internet",
    title: "Elon Musk e o futuro da internet",
    dek: "Satélites de órbita baixa, redes sociais centralizadas e interfaces cérebro-computador: o impacto das apostas do magnata na infraestrutura global.",
    editoria: "FUTURO",
    tag: "INFRAESTRUTURA",
    date: "07 AGO 2025",
    readingTime: "08 MIN",
    author: "Redação Baixa Resolução",
    body: [
      "Das constelações de satélites que levam conectividade a regiões isoladas às transformações no modelo de distribuição de notícias em plataformas sociais.",
      "A concentração de infraestrutura crítica nas mãos de poucas corporações levanta dilemas regulatórios e geopolíticos sem precedentes históricos.",
    ],
  },
  {
    slug: "o-que-esperar-das-proximas-geracoes-de-chips",
    title: "O que esperar das próximas gerações de chips",
    dek: "Litografias subnanométricas, empilhamento 3D e novas arquiteturas térmicas: os limites físicos da computação moderna.",
    editoria: "TECNOLOGIA",
    tag: "HARDWARE",
    date: "04 AGO 2025",
    readingTime: "06 MIN",
    author: "Redação Baixa Resolução",
    body: [
      "Os desafios térmicos e quânticos nos nós de processo menores que 2nm exigem soluções radicais de empilhamento vertical e novos materiais semicondutores.",
      "As próximas gerações prometem densidade de transistores antes considerada teórica, redefinindo o que dispositivos portáteis conseguem processar localmente.",
    ],
  },
  {
    slug: "brasil-no-radar-da-tecnologia-global",
    title: "Brasil no radar da tecnologia global",
    dek: "Centros de excelência em IA, energia limpa para data centers e talentos locais posicionam o país na nova geografia tecnológica.",
    editoria: "OPINIÃO",
    tag: "BRASIL",
    date: "01 AGO 2025",
    readingTime: "05 MIN",
    author: "Redação Baixa Resolução",
    body: [
      "Com matriz energética predominantemente renovável e uma das maiores comunidades de desenvolvedores do mundo, o Brasil desponta como candidato natural para sediar infraestruturas verdes de IA.",
      "O desafio permanece na retenção de pesquisadores e no estímulo a ecossistemas locais de venture capital com visão de longo prazo.",
    ],
  },
];

export const editorias: Editoria[] = ["TECNOLOGIA", "CULTURA", "FUTURO", "OPINIÃO"];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
