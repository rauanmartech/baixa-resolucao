import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Masthead, Colophon } from "@/components/site-chrome";
import { articles, getArticle } from "@/data/articles";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Matéria não encontrada — Baixa Resolução" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — Baixa Resolução` },
        { name: "description", content: article.dek },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.dek },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-paper">
      <Masthead />

      <article className="mx-auto max-w-[1400px] px-5 md:px-8">
        <div className="grid gap-8 border-b border-ink py-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-red">
              {article.editoria} / {article.tag}
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              {article.date}
              <br />
              LEITURA — {article.readingTime}
              <br />
              {article.author}
            </p>
            <div className="mt-6 h-24 w-full halftone opacity-40" />
          </div>
          <div className="md:col-span-9">
            <h1 className="text-6xl leading-[0.88] md:text-8xl">{article.title}</h1>
            <p className="mt-6 max-w-3xl text-xl text-muted-foreground md:text-2xl">
              {article.dek}
            </p>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-12">
          <div className="md:col-span-2">
            <div className="border border-ink p-3 font-mono text-[10px] uppercase tracking-[0.16em]">
              <p className="text-signal-red">// COMPARTILHAR</p>
              <p className="mt-2">COPIAR LINK</p>
              <p>ENVIAR</p>
            </div>
          </div>

          <div className="md:col-span-7">
            {article.body.map((p, i) => (
              <div key={i}>
                <p className="mb-6 text-[18px] leading-[1.6]">{p}</p>
                {i === 1 && article.pull && (
                  <blockquote className="my-10 border-y border-ink py-6">
                    <p className="font-display text-4xl leading-[1] md:text-5xl">
                      “{article.pull}”
                    </p>
                  </blockquote>
                )}
              </div>
            ))}
            <p className="mt-10 border-t border-ink pt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              FIM // BAIXA RESOLUÇÃO — {article.date}
            </p>
          </div>

          <aside className="md:col-span-3">
            <div className="bg-signal-yellow p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em]">ASSINATURA</p>
              <p className="mt-3 font-display text-3xl leading-[0.95]">
                Alta tecnologia. Baixa resolução.
              </p>
            </div>
            <div className="mt-6 border border-ink p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-red">
                DADOS DA MATÉRIA
              </p>
              <dl className="mt-3 space-y-1 font-mono text-[11px] uppercase tracking-[0.12em]">
                <div className="flex justify-between">
                  <dt>EDITORIA</dt>
                  <dd>{article.editoria}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>TAG</dt>
                  <dd>{article.tag}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>PALAVRAS</dt>
                  <dd>{article.body.join(" ").split(" ").length}</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </article>

      <section className="mx-auto max-w-[1400px] border-t border-ink px-5 py-12 md:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-red">
          CONTINUE LENDO
        </p>
        <div className="mt-6 grid gap-px border border-ink bg-ink md:grid-cols-3">
          {related.map((a) => (
            <Link
              key={a.slug}
              to="/noticias/$slug"
              params={{ slug: a.slug }}
              className="group bg-paper p-6 hover:bg-signal-yellow"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-red">
                {a.editoria}
              </span>
              <h2 className="mt-3 text-3xl leading-[0.95]">{a.title}</h2>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {a.date} / {a.readingTime}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Colophon />
    </div>
  );
}
