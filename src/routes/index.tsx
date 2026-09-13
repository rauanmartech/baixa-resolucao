import { createFileRoute, Link } from "@tanstack/react-router";
import { Masthead, Colophon } from "@/components/site-chrome";
import { articles, editorias } from "@/data/articles";
import { Globe, MessageSquare, Eye, Cpu } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Baixa Resolução — editorial de tecnologia da origemdev" },
      {
        name: "description",
        content:
          "Alta tecnologia. Baixa resolução. Editorial independente sobre tecnologia, cultura, futuro e opinião, publicado pela origemdev.",
      },
      { property: "og:title", content: "Baixa Resolução — alta tecnologia, baixa resolução" },
      {
        property: "og:description",
        content: "Editorial independente sobre tecnologia, cultura, futuro e opinião.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = articles.slice(0, 4);
  const opinion = articles.filter((a) => a.editoria === "OPINIÃO").slice(0, 3);
  const latest = articles.slice(4);

  return (
    <div className="min-h-screen bg-paper">
      <Masthead />

      {/* HERO / MANCHETE PRINCIPAL */}
      <section className="border-b border-ink bg-paper py-5 sm:py-7 md:py-8">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8">
          <div className="relative w-full overflow-hidden bg-[#121212] border border-[#262626] shadow-2xl min-h-[460px] md:min-h-0 md:aspect-[8/3] flex flex-col md:flex-row justify-between">
            {/* Lado Esquerdo: Conteúdo Editorial */}
            <div className="relative z-10 flex flex-col justify-between p-6 sm:p-8 md:p-9 lg:p-11 w-full md:w-[52%] lg:w-[50%] shrink-0 gap-6 md:gap-3">
              {/* Linha Superior: Categoria / Edição */}
              <div className="flex items-center gap-2 sm:gap-3 text-[#FF7A00] font-mono text-[10.5px] sm:text-xs font-bold uppercase tracking-[0.18em]">
                <span className="h-[1px] w-5 sm:w-7 bg-[#FF7A00] shrink-0" />
                <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#FF7A00] shrink-0 inline-block" />
                <span className="shrink-0">EDIÇÃO CONTÍNUA / 07.09.2026</span>
                <span className="h-[1px] flex-1 max-w-[120px] bg-[#FF7A00]" />
                <span className="shrink-0 text-sm leading-none font-bold">↗</span>
              </div>

              {/* Título da Manchete em Tipografia Pixelada */}
              <div className="my-auto py-2">
                <h1 className="font-pixel text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold tracking-tight text-white leading-[1.04]">
                  BAIXA
                  <br />
                  RESOLUÇÃO.
                </h1>

                {/* Descrição Editorial */}
                <p className="mt-4 sm:mt-5 max-w-md font-sans text-xs sm:text-sm md:text-[14.5px] leading-relaxed text-[#B8B8B8]">
                  O editorial de tecnologia da origemdev. Olhamos para a tecnologia de perto o
                  suficiente para enxergar suas contradições.
                </p>
              </div>

              {/* CTA Link / Ação */}
              <div className="flex items-center gap-3 pt-1">
                <span className="h-[1px] w-6 sm:w-8 bg-[#FF7A00] shrink-0" />
                <Link
                  to="/noticias"
                  className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#FF7A00] hover:text-white transition-colors"
                >
                  <span className="text-sm sm:text-base leading-none transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                  <span>LER A EDIÇÃO →</span>
                </Link>
              </div>
            </div>

            {/* Lado Direito: Ilustração da Manchete */}
            <div className="relative md:absolute md:top-0 md:right-0 w-full md:w-[54%] lg:w-[52%] h-72 sm:h-84 md:h-full overflow-hidden">
              <img
                src="/manchete-principal.png"
                alt="Manchete Principal — Baixa Resolução"
                className="h-full w-full object-cover object-center"
              />
              {/* Fade suave à esquerda para fundir com a área de texto escuro */}
              <div className="hidden md:block absolute inset-y-0 left-0 w-28 lg:w-44 bg-gradient-to-r from-[#121212] via-[#121212]/50 to-transparent pointer-events-none" />
              {/* Fade superior em mobile para transição suave com o texto */}
              <div className="md:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#121212] via-[#121212]/60 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAS / QUATRO FRENTES (ARCADE PIXEL REDESIGN) */}
      <section className="border-b border-[#1E1E1E] bg-[#121212] text-white">
        <div className="mx-auto grid max-w-[1400px] divide-y divide-[#262626] md:divide-y-0 md:grid-cols-5 px-4 sm:px-6 md:px-8">
          {/* Coluna 1: Cabeçalho das Editorias */}
          <div className="py-8 md:py-10 pr-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#FF7A00]">
                <span className="inline-block h-1.5 w-1.5 bg-[#FF7A00]" />
                <span>EDITORIAS</span>
              </div>
              <h2 className="mt-4 font-pixel text-4xl md:text-[2.65rem] leading-[0.95] text-white tracking-tight">
                QUATRO
                <br />
                FRENTES.
              </h2>
              <p className="mt-4 font-sans text-xs text-neutral-400 leading-relaxed max-w-[22ch]">
                Cobertura editorial independente e crítica sobre tecnologia e sociedade.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#FF7A00]/80 pt-6">
              <span className="h-px w-4 bg-[#FF7A00]/50" />
              <span>SISTEMA // 04 CANAIS</span>
            </div>
          </div>

          {/* Colunas 2 a 5: As Quatro Editorias */}
          {[
            {
              name: "TECNOLOGIA",
              code: "01",
              desc: "Lançamentos, IA, big techs, software e hardware. O núcleo noticioso.",
              Icon: Cpu,
            },
            {
              name: "CULTURA",
              code: "02",
              desc: "Internet, comportamento, comunidades e o impacto social da tecnologia.",
              Icon: Globe,
            },
            {
              name: "FUTURO",
              code: "03",
              desc: "Robótica, interfaces, automação e tecnologias emergentes.",
              Icon: Eye,
            },
            {
              name: "OPINIÃO",
              code: "04",
              desc: "Ensaios, críticas e as contradições da indústria digital.",
              Icon: MessageSquare,
            },
          ].map(({ name, code, desc, Icon }) => {
            return (
              <Link
                key={name}
                to="/noticias"
                search={{ editoria: name as (typeof editorias)[number] }}
                className="group relative border-l-0 md:border-l border-[#262626] p-6 md:py-10 md:px-6 flex flex-col items-start justify-between transition-colors hover:bg-white/[0.03]"
              >
                {/* Indicador Numérico Arcade */}
                <div className="w-full flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-[#FF7A00]">
                  <span>[ {code} ]</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white/50 text-[9px]">
                    SELECT
                  </span>
                </div>

                {/* Ícone com Moldura Pixelada */}
                <div className="my-5 flex h-11 w-11 items-center justify-center border border-[#2E2E2E] bg-black/50 text-white/80 group-hover:border-[#FF7A00] group-hover:text-[#FF7A00] group-hover:bg-[#FF7A00]/10 transition-all">
                  <Icon strokeWidth={1.8} className="w-5 h-5" />
                </div>

                {/* Nome da Editoria em Tipografia Pixelada */}
                <p className="font-pixel text-2xl md:text-[1.75rem] text-white group-hover:text-[#FF7A00] transition-colors leading-none tracking-wide">
                  {name}
                </p>

                {/* Descrição */}
                <p className="mt-3 text-xs sm:text-[13px] text-neutral-400 leading-relaxed flex-1">
                  {desc}
                </p>

                {/* CTA Arcade */}
                <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[#FF7A00] group-hover:text-white transition-colors">
                  <span className="h-px w-3 bg-[#FF7A00] group-hover:w-5 transition-all" />
                  <span>ACESSAR</span>
                  <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* SELECIONADAS (HORIZONTAL CARDS WITH PIXEL TYPOGRAPHY & WIREFRAME PLACEHOLDERS) */}
      <section id="selecionadas" className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-black pb-5">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#FF7A00] font-bold flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 bg-[#FF7A00]" />
              SELECIONADAS
            </span>
            <h2 className="mt-2 font-pixel text-4xl sm:text-5xl md:text-6xl text-[#141414] leading-none tracking-tight">
              DESTAQUES DA EDIÇÃO.
            </h2>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/60 font-medium">
            [ 04 ] MATÉRIAS EM FOCO
          </span>
        </div>

        {/* GRID PRINCIPAL: NOTÍCIAS (ESQUERDA) + BLOCOS LATERAIS (DIREITA) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Coluna Principal: As 4 Notícias */}
          <div className="lg:col-span-8 divide-y divide-black/15">
            {featured.map((a) => (
              <Link
                key={a.slug}
                to="/noticias/$slug"
                params={{ slug: a.slug }}
                className="group flex flex-col sm:flex-row gap-5 md:gap-7 lg:gap-8 py-6 md:py-8 items-start sm:items-center transition-colors hover:bg-black/[0.02] px-2 sm:px-3 -mx-2 sm:-mx-3"
              >
                {/* Placeholder Cinza com X nas Diagonais */}
                <div className="relative w-full sm:w-[240px] md:w-[280px] lg:w-[310px] shrink-0 aspect-[16/10] bg-[#D6D1C7] border border-black/25 overflow-hidden flex items-center justify-center select-none shadow-xs">
                  <svg
                    className="absolute inset-0 h-full w-full stroke-black/25 pointer-events-none"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <line
                      x1="0"
                      y1="0"
                      x2="100"
                      y2="100"
                      strokeWidth="1.2"
                      vectorEffect="non-scaling-stroke"
                    />
                    <line
                      x1="100"
                      y1="0"
                      x2="0"
                      y2="100"
                      strokeWidth="1.2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  <span className="relative z-10 font-mono text-[9px] uppercase tracking-[0.2em] text-black/35 font-bold">
                    [ PLACEHOLDER ]
                  </span>
                </div>

                {/* Conteúdo Editorial */}
                <div className="flex-1 flex flex-col justify-between self-stretch">
                  <div>
                    {/* Editoria e Seta */}
                    <div className="flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#FF7A00]">
                      <span>{a.editoria}</span>
                      <span className="text-sm leading-none transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </div>

                    {/* Título Pixelado */}
                    <h3 className="mt-2 font-pixel text-xl sm:text-2xl md:text-[1.75rem] font-bold text-[#141414] leading-[1.1] tracking-tight group-hover:text-[#FF7A00] transition-colors">
                      {a.title}
                    </h3>

                    {/* Dek / Descrição */}
                    <p className="mt-2 font-sans text-xs sm:text-sm md:text-[13.5px] leading-relaxed text-black/75 max-w-xl">
                      {a.dek}
                    </p>
                  </div>

                  {/* Linha Inferior: Leia mais & Data */}
                  <div className="flex items-center justify-between pt-4 mt-4 border-t border-black/10">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#FF7A00] group-hover:text-black transition-colors">
                      <span className="text-sm leading-none transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        ↗
                      </span>
                      <span>LEIA MAIS</span>
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.14em] text-black/60">
                      {a.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coluna Lateral: Os 3 Blocos da Referência */}
          <aside className="lg:col-span-4 flex flex-col gap-6">
            {/* Bloco 1: MAIS LIDAS */}
            <div className="border border-[#262626] bg-[#141414] p-5 sm:p-6 shadow-md">
              <div className="pb-3 border-b border-[#262626]">
                <h3 className="font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#FF7A00]">
                  MAIS LIDAS
                </h3>
              </div>

              <div className="divide-y divide-[#222222]">
                {[
                  {
                    rank: "01",
                    title: "O impacto da IA no mercado de trabalho",
                    slug: "o-impacto-da-ia-no-mercado-de-trabalho",
                  },
                  {
                    rank: "02",
                    title: "Open source: por que ainda importa?",
                    slug: "open-source-por-que-ainda-importa",
                  },
                  {
                    rank: "03",
                    title: "Elon Musk e o futuro da internet",
                    slug: "elon-musk-e-o-futuro-da-internet",
                  },
                  {
                    rank: "04",
                    title: "O que esperar das próximas gerações de chips",
                    slug: "o-que-esperar-das-proximas-geracoes-de-chips",
                  },
                  {
                    rank: "05",
                    title: "Brasil no radar da tecnologia global",
                    slug: "brasil-no-radar-da-tecnologia-global",
                  },
                ].map((item) => (
                  <Link
                    key={item.rank}
                    to="/noticias/$slug"
                    params={{ slug: item.slug }}
                    className="group flex items-start gap-4 py-3.5 hover:bg-white/[0.02] transition-colors"
                  >
                    <span className="font-pixel text-2xl font-bold text-white group-hover:text-[#FF7A00] transition-colors shrink-0 w-7 leading-none pt-0.5">
                      {item.rank}
                    </span>
                    <p className="font-sans text-xs sm:text-[13px] text-neutral-300 leading-snug group-hover:text-white transition-colors flex-1">
                      {item.title}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bloco 2: ASSINAR A NEWSLETTER */}
            <div className="border border-black bg-[#F5A623] p-5 sm:p-6 shadow-md text-black">
              <div className="flex items-center gap-3">
                {/* Ícone Pixelado 8-bit */}
                <svg
                  className="w-7 h-7 shrink-0 fill-black"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="4" height="4" />
                  <rect x="18" y="2" width="4" height="4" />
                  <rect x="6" y="6" width="4" height="4" />
                  <rect x="14" y="6" width="4" height="4" />
                  <rect x="10" y="10" width="4" height="4" />
                  <rect x="6" y="14" width="4" height="4" />
                  <rect x="14" y="14" width="4" height="4" />
                  <rect x="2" y="18" width="4" height="4" />
                  <rect x="18" y="18" width="4" height="4" />
                </svg>

                <div className="font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-black leading-tight">
                  <div>RECEBA</div>
                  <div>NOSSA NEWSLETTER</div>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-[13px] text-black/90 leading-snug font-medium">
                As principais notícias de tecnologia, direto no seu e-mail.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Obrigado por assinar a newsletter do Baixa Resolução!");
                }}
                className="mt-4 flex items-stretch border-2 border-black bg-[#141414]"
              >
                <input
                  type="email"
                  required
                  placeholder="Seu e-mail"
                  className="w-full bg-transparent px-3 py-2.5 font-mono text-xs text-white placeholder:text-neutral-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-[#EFECE6] px-3.5 text-black hover:bg-white transition-colors cursor-pointer border-l-2 border-black"
                  aria-label="Assinar newsletter"
                  title="Confirmar assinatura"
                >
                  <span className="font-bold text-sm leading-none">↗</span>
                </button>
              </form>
            </div>

            {/* Bloco 3: CARD INSTITUCIONAL BAIXA RESOLUÇÃO */}
            <Link
              to="/noticias"
              className="group relative border border-[#262626] bg-[#141414] p-6 sm:p-7 shadow-md overflow-hidden block transition-colors hover:border-[#FF7A00]"
            >
              {/* Logotipo */}
              <img
                src="/logo-baixa-resolucao.png"
                alt="Baixa Resolução por origemdev"
                className="h-14 sm:h-16 w-auto object-contain transition-transform group-hover:scale-[1.01]"
              />

              {/* Taglines */}
              <div className="mt-7">
                <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#C4C4C4] leading-relaxed">
                  <div>TECNOLOGIA. CULTURA.</div>
                  <div>FUTURO. OPINIÃO.</div>
                </div>
                <div className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF7A00]">
                  / TUDO CONECTADO
                </div>
              </div>

              {/* Cluster de Pixels Ascendentes no Canto Inferior Direito */}
              <div className="pointer-events-none absolute bottom-0 right-0 w-32 h-32 overflow-hidden" aria-hidden="true">
                <svg className="absolute bottom-0 right-0 w-28 h-28" viewBox="0 0 100 100" fill="none">
                  <rect x="75" y="45" width="14" height="14" fill="#FF7A00" />
                  <rect x="60" y="60" width="16" height="16" fill="#F59E0B" />
                  <rect x="40" y="75" width="18" height="18" fill="#FF7A00" />
                  <rect x="65" y="80" width="16" height="16" fill="#D97706" />
                  <rect x="25" y="88" width="14" height="14" fill="#F59E0B" />
                  <rect x="52" y="70" width="12" height="12" fill="#FFE2B3" />
                  <rect x="85" y="70" width="12" height="12" fill="#E65100" />
                  <rect x="45" y="55" width="8" height="8" fill="#FF7A00" opacity="0.8" />
                  <rect x="80" y="35" width="7" height="7" fill="#F59E0B" opacity="0.7" />
                  <rect x="65" y="42" width="6" height="6" fill="#FFE2B3" opacity="0.9" />
                  <rect x="35" y="84" width="8" height="8" fill="#FFFFFF" opacity="0.85" />
                </svg>
              </div>
            </Link>
          </aside>
        </div>
      </section>

      {/* OPINIÃO / CONTRA A CORRENTE (FUNDO LARANJA + TIPOGRAFIA GRAFITE/PRETO) */}
      <section className="border-y border-black bg-[#D63D00] text-white overflow-hidden relative">
        <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] lg:items-stretch">
          {/* Título e Identidade (Esquerda) */}
          <div className="p-8 md:p-12 lg:w-[30%] relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-black/20">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#121212] font-bold">
                <span className="inline-block h-1.5 w-1.5 bg-[#121212]" />
                <span>OPINIÃO</span>
              </div>
              <h2 className="mt-4 font-pixel text-4xl sm:text-5xl md:text-[3.25rem] leading-[0.95] text-white tracking-tight">
                CONTRA
                <br />
                A CORRENTE.
              </h2>
              <span className="block h-[2px] w-12 bg-[#121212] mt-4" />
              <p className="mt-4 font-sans text-xs sm:text-[13px] text-white/90 leading-relaxed max-w-[24ch]">
                Ensaios, reflexões críticas e as contradições do ecossistema digital.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-[#121212] font-bold pt-8">
              <span>CANAL // 04</span>
              <span className="h-px w-6 bg-black/30" />
              <span>ENSAIOS</span>
            </div>

            {/* Marcador de Aspas Pixeladas Arcade */}
            <span
              className="font-pixel text-7xl md:text-8xl leading-none text-black/10 absolute bottom-2 right-4 pointer-events-none select-none"
              aria-hidden="true"
            >
              “
            </span>
          </div>

          {/* Artigos de Opinião (Direita: 3 Colunas) */}
          <div className="lg:w-[70%] flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-black/20 relative">
            {opinion.map((a) => (
              <Link
                key={a.slug}
                to="/noticias/$slug"
                params={{ slug: a.slug }}
                className="group flex-1 p-7 sm:p-8 md:p-9 hover:bg-black/5 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10.5px] uppercase tracking-widest text-[#121212] font-bold">
                    ENS // {a.tag}
                  </span>
                  <h3 className="mt-3 font-pixel text-xl sm:text-2xl md:text-[1.55rem] text-white leading-snug tracking-wide group-hover:text-[#121212] transition-colors">
                    “{a.title}”
                  </h3>
                  <p className="mt-3 text-xs sm:text-[13px] text-white/85 leading-relaxed line-clamp-3">
                    {a.dek}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-black/15">
                  <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#121212]">
                    <span>{a.date}</span>
                    <span className="text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </div>
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-[#121212]/80 mt-1 font-medium">
                    ace                    LEITURA — {a.readingTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ÚLTIMAS */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-6">
          <h2 className="text-5xl leading-[0.9] md:text-6xl">Últimas entradas</h2>
          <Link
            to="/noticias"
            className="border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-paper"
          >
            VER TODAS →
          </Link>
        </div>
        {latest.map((a, i) => (
          <Link
            key={a.slug}
            to="/noticias/$slug"
            params={{ slug: a.slug }}
            className="group grid gap-3 border-b border-ink py-6 md:grid-cols-12"
          >
            <span className="font-pixel text-2xl leading-none text-muted-foreground md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-red md:col-span-2">
              {a.editoria}
            </span>
            <h2 className="text-3xl leading-[1] group-hover:text-signal-red md:col-span-6">
              {a.title}
            </h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:col-span-3 md:text-right">
              {a.date} / {a.readingTime}
            </span>
          </Link>
        ))}
      </section>

      {/* ASSINATURA */}
      <section className="border-y border-ink bg-signal-yellow">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6 px-5 py-14 md:px-8">
          <h2 className="text-6xl leading-[0.88] md:text-8xl">
            Alta tecnologia.
            <br />
            Baixa resolução.
          </h2>
          <div className="font-mono text-[11px] uppercase tracking-[0.2em]">
            <p>BAIXA RESOLUÇÃO // POR ORIGEMDEV</p>
            <p className="mt-1 text-signal-red">ERROR 404 — O FUTURO NÃO FOI ENCONTRADO</p>
            <p className="mt-4 font-pixel text-3xl leading-none tracking-normal">SIGNAL LOST</p>
          </div>
        </div>
      </section>

      <Colophon />
    </div>
  );
}
