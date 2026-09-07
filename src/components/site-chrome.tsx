import { Link } from "@tanstack/react-router";
import { editorias } from "@/data/articles";

export function Masthead() {
  return (
    <header className="border-b border-ink bg-paper">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.webp" alt="Baixa Resolução" className="h-10 w-auto object-contain" />
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em]">
          {editorias.map((e) => (
            <Link
              key={e}
              to="/noticias"
              search={{ editoria: e }}
              className="border-b border-transparent pb-0.5 hover:border-signal-red hover:text-signal-red"
            >
              {e}
            </Link>
          ))}
          <Link to="/noticias" className="bg-ink px-3 py-1.5 text-paper hover:bg-signal-red">
            TODAS AS NOTÍCIAS →
          </Link>
        </nav>
      </div>
      <div className="border-t border-ink bg-signal-yellow">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] md:px-8">
          <span>ALTA TECNOLOGIA. BAIXA RESOLUÇÃO.</span>
          <span className="font-pixel text-base leading-none tracking-normal">SYSTEM 04</span>
        </div>
      </div>
    </header>
  );
}

export function Colophon() {
  return (
    <footer className="border-t border-ink bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <img
            src="/logo.webp"
            alt="Baixa Resolução"
            className="h-14 w-auto object-contain brightness-0 invert"
          />
          <p className="mt-3 max-w-sm text-sm opacity-70">
            Editorial de tecnologia da origemdev. Olhar para a tecnologia de perto o suficiente para
            enxergar suas contradições.
          </p>
          <p className="mt-6 font-pixel text-xl leading-none text-signal-yellow">
            198.42 MB / SIGNAL OK
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-yellow">
            Editorias
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {editorias.map((e) => (
              <li key={e}>
                <Link to="/noticias" search={{ editoria: e }} className="hover:text-signal-yellow">
                  {e}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal-yellow">
            Contato
          </p>
          <ul className="mt-4 space-y-2 text-sm opacity-80">
            <li>contato@origemdev.com</li>
            <li>Publicação independente</li>
            <li>2026 — edição contínua</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/20">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-2 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] opacity-60 md:px-8">
          <span>© 2026 origemdev</span>
          <span>PAPEL + PIXEL</span>
        </div>
      </div>
    </footer>
  );
}
