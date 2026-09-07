import { createFileRoute, Link } from "@tanstack/react-router";
import { Masthead, Colophon } from "@/components/site-chrome";
import { articles, editorias, type Editoria } from "@/data/articles";

type Search = { editoria?: Editoria };

export const Route = createFileRoute("/noticias/")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const e = search["editoria"] as Editoria | undefined;
    return e && editorias.includes(e) ? { editoria: e } : {};
  },
  head: () => ({
    meta: [
      { title: "Notícias — Baixa Resolução" },
      {
        name: "description",
        content:
          "Todas as matérias da Baixa Resolução: tecnologia, cultura, futuro e opinião, com olhar editorial e crítico.",
      },
      { property: "og:title", content: "Notícias — Baixa Resolução" },
      {
        property: "og:description",
        content: "Tecnologia, cultura, futuro e opinião no editorial da origemdev.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: NoticiasPage,
});

function NoticiasPage() {
  const { editoria } = Route.useSearch();
  const list = editoria ? articles.filter((a) => a.editoria === editoria) : articles;

  return (
    <div className="min-h-screen bg-paper">
      <Masthead />

      <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-red">
          ARQUIVO / {String(list.length).padStart(2, "0")} MATÉRIAS
        </p>
        <h1 className="mt-3 text-6xl md:text-8xl">
          {editoria ?? "Todas as"}
          <br />
          {editoria ? "em pauta" : "notícias"}
        </h1>

        <div className="mt-8 flex flex-wrap gap-2 border-t border-ink pt-6 font-mono text-[11px] uppercase tracking-[0.16em]">
          <Link
            to="/noticias"
            className={`border border-ink px-3 py-1.5 ${!editoria ? "bg-ink text-paper" : "hover:bg-signal-yellow"}`}
          >
            TUDO
          </Link>
          {editorias.map((e) => (
            <Link
              key={e}
              to="/noticias"
              search={{ editoria: e }}
              className={`border border-ink px-3 py-1.5 ${editoria === e ? "bg-ink text-paper" : "hover:bg-signal-yellow"}`}
            >
              {e}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] border-t border-ink px-5 md:px-8">
        {list.map((a, i) => (
          <Link
            key={a.slug}
            to="/noticias/$slug"
            params={{ slug: a.slug }}
            className="group grid gap-4 border-b border-ink py-8 md:grid-cols-12"
          >
            <div className="md:col-span-2">
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal-red">
                {a.editoria}
              </span>
              <p className="mt-1 font-pixel text-2xl leading-none text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
            </div>
            <div className="md:col-span-7">
              <h2 className="text-4xl leading-[0.95] group-hover:text-signal-red md:text-5xl">
                {a.title}
              </h2>
              <p className="mt-3 max-w-2xl text-[17px] text-muted-foreground">{a.dek}</p>
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground md:col-span-3 md:text-right">
              {a.date}
              <br />
              LEITURA — {a.readingTime}
              <br />
              <span className="text-ink">LER →</span>
            </div>
          </Link>
        ))}
      </section>

      <div className="h-16" />
      <Colophon />
    </div>
  );
}
