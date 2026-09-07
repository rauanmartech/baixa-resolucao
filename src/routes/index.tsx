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
  const lead = articles[0]!;
  const rest = articles.slice(1);
  const featured = rest.slice(0, 3);
  const opinion = articles.filter((a) => a.editoria === "OPINIÃO").slice(0, 3);
  const latest = rest.slice(3);

  return (
    <div className="min-h-screen bg-paper">
      <Masthead />

      {/* HERO */}
      <section className="grain border-b border-ink">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-5 py-8 md:grid-cols-12 md:px-8 md:py-10">
          <div className="md:col-span-7 flex flex-col justify-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-red">
              EDIÇÃO CONTÍNUA / 07.09.2026
            </p>
            <div className="relative inline-block mt-4">
              <h1 className="text-[13vw] leading-[0.9] md:text-[6rem]">
                BAIXA
                <br />
                <span className="text-signal-red">RESOLUÇÃO.</span>
              </h1>
            </div>
            <p className="mt-6 max-w-md text-[17px] text-muted-foreground">
              O editorial de tecnologia da origemdev. Olhamos para a tecnologia de perto o
              suficiente para enxergar suas contradições.
            </p>
            <Link
              to="/noticias"
              className="mt-8 self-start bg-signal-yellow px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-paper"
            >
              LER A EDIÇÃO →
            </Link>
          </div>

          <div className="md:col-span-5 flex flex-col justify-center">
            <div className="border border-ink">
              <div className="flex items-center justify-between border-b border-ink bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-paper">
                <span>MATÉRIA DE CAPA</span>
                <span className="font-pixel text-base leading-none tracking-normal text-signal-yellow">
                  LOADING...
                </span>
              </div>
              <div className="halftone h-24 border-b border-ink opacity-30" />
              <Link to="/noticias/$slug" params={{ slug: lead.slug }} className="group block p-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-red">
                  {lead.editoria} / {lead.tag}
                </span>
                <h2 className="mt-3 text-4xl leading-[0.92] group-hover:text-signal-red">
                  {lead.title}
                </h2>
                <p className="mt-3 text-[15px] text-muted-foreground">{lead.dek}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em]">
                  {lead.date} / LEITURA — {lead.readingTime} / LER →
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="border-b border-ink bg-paper overflow-hidden">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-12 border-x border-transparent md:border-ink">
          {/* Imagem */}
          <div className="hidden md:block md:col-span-3 relative bg-ink/5 border-r border-ink aspect-[16/9]">
            <div className="absolute inset-0 halftone opacity-20"></div>
            <div className="absolute inset-0 flex items-center justify-center font-mono text-[9px] uppercase tracking-[0.2em] opacity-40">
              [ FOTO ]
            </div>
          </div>

          {/* Conteúdo */}
          <div className="col-span-12 md:col-span-9 p-5 md:px-8 md:py-8 flex items-center justify-between gap-6">
            <div className="flex-1">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-signal-red font-bold">
                SOBRE O EDITORIAL
              </p>
              <h2 className="mt-1 font-display text-2xl md:text-3xl leading-none">
                Tecnologia com propósito. Análises com{" "}
                <span className="text-signal-red italic relative inline-block">
                  alma.
                  <svg
                    className="absolute -bottom-0.5 left-0 w-full h-1.5 text-ink"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 10 Q 50 20 100 5"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </span>
              </h2>
              <p className="mt-2 text-[13px] text-muted-foreground leading-snug max-w-2xl">
                Editorial independente dedicado a observar a tecnologia além do entusiasmo. Ensaios,
                críticas e reportagens traduzindo o impacto digital na nossa cultura.
              </p>
            </div>

            <a
              href="https://origemdev.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex flex-col items-center justify-center w-20 h-20 rounded-full bg-signal-yellow text-ink font-mono text-[8px] uppercase tracking-[0.1em] text-center p-2 border border-ink transform rotate-3 shadow-[2px_2px_0_0_var(--color-ink)] hover:bg-ink hover:text-signal-yellow hover:rotate-0 hover:scale-105 transition-all cursor-pointer hidden sm:flex leading-tight"
              title="Acessar origemdev.com.br"
            >
              <span className="font-bold">ORIGEM DEV</span>
              <span className="text-[7px] mt-0.5 opacity-80">.com.br ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* EDITORIAS */}
      <section className="border-b border-ink bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] gap-px px-5 md:grid-cols-5 md:px-8">
          <div className="py-8 md:py-10">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-yellow">
              EDITORIAS
            </p>
            <p className="mt-3 font-display text-4xl leading-[0.9]">
              Quatro
              <br />
              frentes
            </p>
          </div>
          {[
            {
              name: "TECNOLOGIA",
              desc: "Lançamentos, IA, big techs, software e hardware. O núcleo noticioso.",
              Icon: Cpu,
            },
            {
              name: "CULTURA",
              desc: "Internet, comportamento, comunidades e o impacto social da tecnologia.",
              Icon: Globe,
            },
            {
              name: "FUTURO",
              desc: "Robótica, interfaces, automação e tecnologias emergentes.",
              Icon: Eye,
            },
            {
              name: "OPINIÃO",
              desc: "Ensaios, críticas e as contradições da indústria.",
              Icon: MessageSquare,
            },
          ].map(({ name, desc, Icon }, index) => {
            const colorClass = index % 2 === 0 ? "text-signal-yellow" : "text-signal-red";
            const hoverColorClass =
              index % 2 === 0 ? "group-hover:text-signal-yellow" : "group-hover:text-signal-red";
            return (
              <Link
                key={name}
                to="/noticias"
                search={{ editoria: name as (typeof editorias)[number] }}
                className="group border-l border-paper/25 py-8 pl-5 md:py-10 flex flex-col items-start"
              >
                <Icon
                  strokeWidth={1.5}
                  className={`w-8 h-8 mb-4 opacity-70 group-hover:opacity-100 transition-opacity ${colorClass}`}
                />
                <p className={`font-display text-3xl ${hoverColorClass}`}>{name}</p>
                <p className="mt-3 max-w-[22ch] text-sm opacity-70 flex-1">{desc}</p>
                <p
                  className={`mt-6 font-mono text-[10px] uppercase tracking-[0.2em] ${colorClass}`}
                >
                  VER →
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink pb-6">
          <h2 className="text-6xl leading-[0.9] md:text-7xl">Selecionadas</h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-red">
            [ 03 ] DESTAQUES DA SEMANA
          </span>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {featured.map((a, i) => (
            <Link key={a.slug} to="/noticias/$slug" params={{ slug: a.slug }} className="group">
              <div
                className={`h-44 border border-ink ${
                  i === 0 ? "bg-signal-red" : i === 1 ? "bg-signal-yellow" : "halftone opacity-40"
                }`}
              />
              <span className="mt-4 block font-mono text-[10px] uppercase tracking-[0.2em] text-signal-red">
                {a.editoria} / {a.tag}
              </span>
              <h2 className="mt-2 text-3xl leading-[0.98] group-hover:text-signal-red">
                {a.title}
              </h2>
              <p className="mt-3 text-[16px] text-muted-foreground">{a.dek}</p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {a.date} — {a.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* OPINIÃO */}
      <section className="border-y border-ink bg-signal-red text-paper overflow-hidden relative">
        <div className="mx-auto flex flex-col lg:flex-row max-w-[1400px] lg:items-stretch">
          {/* Título (Esquerda) */}
          <div className="p-8 md:p-14 lg:w-[30%] relative flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-paper/20">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-yellow font-bold">
              OPINIÃO
            </p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[0.9] relative inline-block">
              Contra
              <br />a corrente
              <svg
                className="absolute -bottom-3 left-0 w-32 h-3 text-signal-yellow"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 10 Q 25 20 50 10 T 100 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
            </h2>
            <span className="font-display text-8xl leading-none text-ink absolute bottom-0 right-4 lg:bottom-4 lg:right-6 opacity-60">
              “
            </span>
          </div>

          {/* Artigos (Direita) */}
          <div className="lg:w-[70%] flex flex-col md:flex-row relative">
            {opinion.map((a, i) => (
              <Link
                key={a.slug}
                to="/noticias/$slug"
                params={{ slug: a.slug }}
                className={`flex-1 p-8 md:p-10 hover:bg-ink/5 transition-colors flex flex-col justify-between ${
                  i !== 0 ? "border-t md:border-t-0 md:border-l border-paper/20" : ""
                }`}
              >
                <p className="text-[17px] leading-snug">"{a.title}"</p>
                <div className="mt-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-yellow font-bold">
                    {a.date}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-80 mt-1">
                    LEITURA — {a.readingTime}
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
