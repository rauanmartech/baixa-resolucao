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
];

export const editorias: Editoria[] = ["TECNOLOGIA", "CULTURA", "FUTURO", "OPINIÃO"];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
