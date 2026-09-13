import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Search, X, ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { articles, editorias } from "@/data/articles";

export function Masthead() {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Determine active editoria: default to TECNOLOGIA on home page or read from search param
  const searchParams = new URLSearchParams(location.search);
  const activeEditoria =
    searchParams.get("editoria") || (location.pathname === "/" ? "TECNOLOGIA" : "");

  // Filter articles for search overlay
  const filteredArticles = searchQuery.trim()
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.dek.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.editoria.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  // Close overlays on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header className="w-full select-none">
        {/* UPPER DARK EDITORIAL BRAND BANNER */}
        <div className="relative w-full dark-grid border-b border-[#1E1E1E] overflow-hidden">
          {/* Subtle vignette glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 35% 45%, rgba(45, 45, 45, 0.4) 0%, rgba(15, 15, 15, 0.95) 100%)",
            }}
          />

          {/* Floating pixel particles between logo and manifesto (matching reference dissolve aesthetic) */}
          <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
            {/* Clustered floating amber pixels */}
            <span className="absolute top-[48px] left-[520px] h-[3px] w-[3px] bg-[#F59E0B] opacity-70" />
            <span className="absolute top-[52px] left-[535px] h-[4px] w-[4px] bg-[#D97706] opacity-85" />
            <span className="absolute top-[76px] left-[560px] h-[3px] w-[3px] bg-[#F59E0B] opacity-60" />
            <span className="absolute top-[42px] left-[580px] h-[2px] w-[2px] bg-[#FBBF24] opacity-80" />
            <span className="absolute top-[88px] left-[610px] h-[4px] w-[4px] bg-[#EA580C] opacity-75" />
            <span className="absolute top-[64px] left-[640px] h-[3px] w-[3px] bg-[#F59E0B] opacity-65" />
            <span className="absolute top-[100px] left-[670px] h-[3px] w-[3px] bg-[#D97706] opacity-50" />
            <span className="absolute top-[56px] left-[700px] h-[2px] w-[2px] bg-[#F59E0B] opacity-70" />
          </div>

          <div className="relative mx-auto flex max-w-[1400px] flex-col md:flex-row items-center justify-between gap-5 px-5 py-5 sm:py-6 md:px-8 md:py-7">
            {/* Left: Brand Identity Logo */}
            <Link
              to="/"
              className="group relative flex items-center focus:outline-none transition-transform active:scale-[0.99]"
              title="Baixa Resolução — Início"
            >
              <img
                src="/logo-baixa-resolucao.png"
                alt="Baixa Resolução por origemdev"
                className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain transition-opacity group-hover:opacity-95"
              />
            </Link>

            {/* Right: Manifesto Tagline & Diagonal Arrow */}
            <div className="flex items-center gap-3.5 sm:gap-4 md:gap-5 self-end md:self-center">
              {/* Vibrant Orange Diagonal Arrow */}
              <div className="shrink-0 text-[#FF7A00]" aria-hidden="true">
                <svg
                  className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.75"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </div>

              {/* Slogan Lines */}
              <div className="font-mono text-[10.5px] sm:text-[11.5px] md:text-[12.5px] font-medium uppercase tracking-[0.15em] leading-[1.25] text-[#C4C4C4]">
                <div>TECNOLOGIA</div>
                <div>É GENTE,</div>
                <div>IDEIAS E</div>
                <div>O QUE VEM</div>
                <div>DEPOIS.</div>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER EDITORIAL NAVIGATION BAR */}
        <div className="w-full border-t border-b border-[#181818] bg-[#EFECE6] text-[#141414]">
          <div className="mx-auto flex h-[46px] sm:h-[48px] max-w-[1400px] items-stretch justify-between px-0 sm:px-4 md:px-8">
            {/* Left: Editorias Tabs */}
            <nav
              className="flex items-stretch overflow-x-auto scrollbar-none"
              aria-label="Editorias"
            >
              {editorias.map((e) => {
                const isActive = activeEditoria === e;
                return (
                  <Link
                    key={e}
                    to="/noticias"
                    search={{ editoria: e }}
                    className={`flex items-center justify-center font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] px-4 sm:px-6 transition-colors border-r border-black/15 shrink-0 ${
                      isActive
                        ? "bg-[#F5A623] text-[#121212] shadow-inner"
                        : "text-[#1E1E1E] hover:bg-black/5 hover:text-black"
                    }`}
                  >
                    {e}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Search & Menu Actions */}
            <div className="flex items-stretch shrink-0">
              {/* Search Toggle Button */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="flex w-11 sm:w-12 items-center justify-center border-l border-black/20 text-[#1A1A1A] hover:bg-black/5 transition-colors cursor-pointer"
                title="Buscar artigos (Pressione Esc para fechar)"
                aria-label="Abrir busca"
              >
                <Search className="h-4 w-4 sm:h-[18px] sm:w-[18px] stroke-[2.2]" />
              </button>

              {/* Hamburger Menu Button */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="flex w-11 sm:w-12 items-center justify-center border-l border-black/20 text-[#1A1A1A] hover:bg-black/5 transition-colors cursor-pointer"
                title="Abrir menu da publicação"
                aria-label="Abrir menu"
              >
                <div className="flex flex-col justify-center gap-[4px] w-4 sm:w-[18px]">
                  <span className="block h-[2px] w-full bg-[#1A1A1A]" />
                  <span className="block h-[2px] w-full bg-[#1A1A1A]" />
                  <span className="block h-[2px] w-full bg-[#1A1A1A]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* SEARCH MODAL OVERLAY */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 backdrop-blur-xs px-4 pt-16 sm:pt-24 animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-2xl border-2 border-[#181818] bg-[#EFECE6] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/20 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#8C2525]">
                <Terminal className="h-4 w-4 text-[#FF7A00]" />
                <span>BUSCA EDITORIAL / BAIXA RESOLUÇÃO</span>
              </div>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-black/60 hover:text-black cursor-pointer p-1"
                aria-label="Fechar busca"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="relative mt-5">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-black/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                placeholder="Buscar por assunto, título, autor ou tag..."
                className="w-full border-2 border-[#181818] bg-white py-3 pl-11 pr-4 font-mono text-sm tracking-wide text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
              />
            </div>

            <div className="mt-5 max-h-[340px] overflow-y-auto space-y-2">
              {searchQuery.trim() === "" ? (
                <div className="py-8 text-center font-mono text-xs text-black/50 tracking-wider">
                  DIGITE UM TERMO PARA BUSCAR NAS MATÉRIAS PUBLICADAS.
                </div>
              ) : filteredArticles.length > 0 ? (
                filteredArticles.map((art) => (
                  <Link
                    key={art.slug}
                    to="/noticias/$slug"
                    params={{ slug: art.slug }}
                    onClick={() => setSearchOpen(false)}
                    className="group block border border-black/10 bg-white/70 p-3.5 hover:border-black hover:bg-white transition-all"
                  >
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#FF7A00]">
                      <span>{art.editoria}</span>
                      <span>•</span>
                      <span>{art.date}</span>
                    </div>
                    <h3 className="mt-1 font-serif text-lg leading-snug group-hover:text-[#B91C1C] transition-colors">
                      {art.title}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-xs text-black/70">{art.dek}</p>
                  </Link>
                ))
              ) : (
                <div className="py-8 text-center font-mono text-xs text-black/50 tracking-wider">
                  NENHUMA MATÉRIA ENCONTRADA PARA "{searchQuery.toUpperCase()}".
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-black/20 pt-3 font-mono text-[10px] uppercase tracking-widest text-black/50">
              <span>ESC PARA SAIR</span>
              <span>ORIGEMDEV 2026</span>
            </div>
          </div>
        </div>
      )}

      {/* EDITORIAL MENU DRAWER OVERLAY */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
        >
          <div className="h-full w-full max-w-md border-l-2 border-[#181818] bg-[#EFECE6] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-200">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between border-b border-black/20 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#FF7A00]">
                  <Sparkles className="h-4 w-4" />
                  <span>ÍNDICE DA PUBLICAÇÃO</span>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="text-black/60 hover:text-black cursor-pointer p-1"
                  aria-label="Fechar menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Sections list */}
              <div className="mt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/40">
                  Editorias
                </p>
                <div className="mt-3 divide-y divide-black/10 border-y border-black/10">
                  {editorias.map((e) => (
                    <Link
                      key={e}
                      to="/noticias"
                      search={{ editoria: e }}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between py-3 font-mono text-sm font-bold uppercase tracking-[0.14em] text-black hover:text-[#FF7A00] transition-colors"
                    >
                      <span>{e}</span>
                      <ArrowUpRight className="h-4 w-4 text-black/40 group-hover:text-[#FF7A00]" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="mt-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-black/40">
                  Navegação
                </p>
                <div className="mt-3 space-y-2 font-mono text-xs uppercase tracking-wider">
                  <Link
                    to="/"
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 hover:text-[#FF7A00]"
                  >
                    → Capa / Início
                  </Link>
                  <Link
                    to="/noticias"
                    onClick={() => setMenuOpen(false)}
                    className="block py-1 hover:text-[#FF7A00]"
                  >
                    → Todas as Notícias ({articles.length} matérias)
                  </Link>
                </div>
              </div>

              {/* Manifesto Callout */}
              <div className="mt-8 border border-black/20 bg-black/5 p-4 font-mono text-xs">
                <p className="font-bold text-[#FF7A00] uppercase tracking-wider">
                  Manifesto Baixa Resolução
                </p>
                <p className="mt-2 text-black/80 leading-relaxed">
                  "Tecnologia é gente, ideias e o que vem depois. Olhamos de perto o suficiente
                  para enxergar suas contradições."
                </p>
              </div>
            </div>

            {/* Footer inside drawer */}
            <div className="border-t border-black/20 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-black/50">
              <div className="flex justify-between">
                <span>SYSTEM 04</span>
                <span>ORIGEMDEV 2026</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Colophon() {
  return (
    <footer className="border-t border-ink bg-[#121212] text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <img
            src="/logo-baixa-resolucao.png"
            alt="Baixa Resolução"
            className="h-14 w-auto object-contain"
          />
          <p className="mt-3 max-w-sm text-sm opacity-70">
            Editorial de tecnologia da origemdev. Olhar para a tecnologia de perto o suficiente para
            enxergar suas contradições.
          </p>
          <p className="mt-6 font-pixel text-xl leading-none text-[#F5A623]">
            198.42 MB / SIGNAL OK
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5A623]">
            Editorias
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {editorias.map((e) => (
              <li key={e}>
                <Link to="/noticias" search={{ editoria: e }} className="hover:text-[#F5A623]">
                  {e}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#F5A623]">
            Contato
          </p>
          <ul className="mt-4 space-y-2 text-sm opacity-80 font-mono text-xs">
            <li>contato@origemdev.com</li>
            <li>Publicação independente</li>
            <li>2026 — edição contínua</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-2 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.2em] opacity-60 md:px-8">
          <span>© 2026 origemdev</span>
          <span>PAPEL + PIXEL</span>
        </div>
      </div>
    </footer>
  );
}
