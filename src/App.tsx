/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Layers,
  LayoutTemplate,
  PlayCircle,
  Users,
  MessageCircle,
  Check,
  Sparkles,
} from 'lucide-react';

const KIWIFY_CHECKOUT_URL = 'https://pay.kiwify.com.br/BrLFSYA';
const LOGO_URL = 'https://i.postimg.cc/J73h8Srr/BF.png';

const NICHE_LIST = [
  'Barbearias',
  'Salões de beleza',
  'Restaurantes',
  'Clínicas',
  'Profissionais autônomos',
  'Lojas',
  'Prestadores de serviços',
  'Infoprodutores',
  'E muitos outros',
];

export default function App() {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA on mobile after scrolling past hero
      if (window.scrollY > 380) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white selection:bg-[#33f17c] selection:text-black">
      {/* Top Header with Logo */}
      <header className="w-full pt-8 pb-4 px-6 max-w-5xl mx-auto flex justify-center items-center">
        <a href="#hero" className="inline-block transition-opacity hover:opacity-90">
          <img
            src={LOGO_URL}
            alt="Biofácil"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            loading="eager"
          />
        </a>
      </header>

      <main className="max-w-4xl mx-auto px-5 sm:px-6 divide-y divide-white/5">
        {/* 1. HERO / PRIMEIRA DOBRA */}
        <section id="hero" className="py-12 sm:py-16 md:py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#33f17c]/20 bg-[#33f17c]/5 text-[#33f17c] text-xs sm:text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#33f17c]" />
            Biblioteca de BioSites Profissionais
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] max-w-3xl mx-auto text-white">
            Mais de <span className="text-[#33f17c]">100 BioSites</span> prontos para você editar e usar
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Tenha acesso a uma biblioteca com mais de 100 BioSites editáveis para diversos nichos, de forma simples, rápida e profissional.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col items-center">
            <a
              href={KIWIFY_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl bg-[#33f17c] text-black font-extrabold text-base sm:text-lg tracking-wide uppercase shadow-[0_0_24px_rgba(51,241,124,0.35)] hover:shadow-[0_0_36px_rgba(51,241,124,0.55)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
            >
              <span>QUERO TER ACESSO</span>
              <ArrowRight className="w-5 h-5 text-black stroke-[2.5]" />
            </a>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-400 max-w-md">
              <MessageCircle className="w-4 h-4 text-[#33f17c] shrink-0" />
              <span>Após a compra, chame nossa equipe no WhatsApp para liberar seu acesso.</span>
            </div>
          </div>
        </section>

        {/* 2. O QUE VOCÊ RECEBE */}
        <section className="py-14 sm:py-20">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              O que você recebe
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Bloco 1 */}
            <div className="p-6 rounded-2xl bg-[#090909] border border-white/10 hover:border-[#33f17c]/40 transition-colors duration-200 flex flex-col">
              <div className="w-11 h-11 rounded-lg bg-[#33f17c]/10 border border-[#33f17c]/20 flex items-center justify-center mb-4">
                <LayoutTemplate className="w-5 h-5 text-[#33f17c]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Mais de 100 BioSites
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                BioSites editáveis para diferentes nichos e tipos de negócio.
              </p>
            </div>

            {/* Bloco 2 */}
            <div className="p-6 rounded-2xl bg-[#090909] border border-white/10 hover:border-[#33f17c]/40 transition-colors duration-200 flex flex-col">
              <div className="w-11 h-11 rounded-lg bg-[#33f17c]/10 border border-[#33f17c]/20 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-[#33f17c]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Modelos prontos
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Tenha uma base pronta para editar, personalizar e utilizar.
              </p>
            </div>

            {/* Bloco 3 */}
            <div className="p-6 rounded-2xl bg-[#090909] border border-white/10 hover:border-[#33f17c]/40 transition-colors duration-200 flex flex-col">
              <div className="w-11 h-11 rounded-lg bg-[#33f17c]/10 border border-[#33f17c]/20 flex items-center justify-center mb-4">
                <PlayCircle className="w-5 h-5 text-[#33f17c]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                2 aulas práticas
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Aprenda como acessar, editar e utilizar os BioSites corretamente.
              </p>
            </div>

            {/* Bloco 4 */}
            <div className="p-6 rounded-2xl bg-[#090909] border border-white/10 hover:border-[#33f17c]/40 transition-colors duration-200 flex flex-col">
              <div className="w-11 h-11 rounded-lg bg-[#33f17c]/10 border border-[#33f17c]/20 flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-[#33f17c]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Grupo de membros
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Faça parte do grupo exclusivo de membros e tenha acesso às orientações e novidades.
              </p>
            </div>
          </div>
        </section>

        {/* 3. MAIS DE 100 NICHOS */}
        <section className="py-14 sm:py-20">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              BioSites para diversos nichos
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Você encontra modelos prontos para diferentes tipos de profissionais, empresas e negócios. Escolha um modelo, edite as informações e deixe o BioSite com a identidade do seu cliente.
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-[#090909] border border-white/10 rounded-2xl p-6 sm:p-8">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#33f17c] mb-4">
              Exemplos de nichos atendidos:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {NICHE_LIST.map((niche, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-neutral-200 text-sm sm:text-base py-1"
                >
                  <div className="w-5 h-5 rounded-full bg-[#33f17c]/15 text-[#33f17c] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className={index === NICHE_LIST.length - 1 ? 'text-[#33f17c] font-medium' : ''}>
                    {niche}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. COMO FUNCIONA */}
        <section className="py-14 sm:py-20">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Como funciona
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Passo 1 */}
            <div className="p-6 rounded-2xl bg-[#090909] border border-white/10 flex flex-col relative">
              <span className="text-xs font-mono font-bold text-[#33f17c] uppercase tracking-widest mb-3">
                Passo 01
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                1. Compre o acesso
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Adquira o produto pelo botão de compra.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="p-6 rounded-2xl bg-[#090909] border border-white/10 flex flex-col relative">
              <span className="text-xs font-mono font-bold text-[#33f17c] uppercase tracking-widest mb-3">
                Passo 02
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                2. Chame nossa equipe
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Após a compra, entre em contato conosco pelo WhatsApp.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="p-6 rounded-2xl bg-[#090909] border border-white/10 flex flex-col relative">
              <span className="text-xs font-mono font-bold text-[#33f17c] uppercase tracking-widest mb-3">
                Passo 03
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                3. Receba seu acesso
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Nossa equipe libera o acesso à plataforma e você poderá começar a utilizar os BioSites.
              </p>
            </div>
          </div>

          {/* Destaque visual importante */}
          <div className="mt-8 p-4 sm:p-5 rounded-xl border border-[#33f17c]/30 bg-[#33f17c]/5 flex items-center justify-center text-center gap-3">
            <MessageCircle className="w-5 h-5 text-[#33f17c] shrink-0" />
            <p className="text-sm sm:text-base font-medium text-neutral-200">
              O acesso é liberado após a confirmação da compra e contato pelo WhatsApp.
            </p>
          </div>
        </section>

        {/* 5. AULAS */}
        <section className="py-14 sm:py-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              Aprenda a usar
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Você terá acesso a 2 aulas práticas para aprender a acessar a plataforma, editar os BioSites e utilizar tudo da maneira correta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Aula 1 */}
            <div className="p-6 rounded-2xl bg-[#090909] border border-white/10 flex flex-col">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#33f17c] mb-3 uppercase tracking-wider">
                <PlayCircle className="w-4 h-4 text-[#33f17c]" />
                Conteúdo Prático
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Aula 1 — Acessando a plataforma
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Aprenda como acessar a plataforma e encontrar os BioSites disponíveis.
              </p>
            </div>

            {/* Aula 2 */}
            <div className="p-6 rounded-2xl bg-[#090909] border border-white/10 flex flex-col">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#33f17c] mb-3 uppercase tracking-wider">
                <PlayCircle className="w-4 h-4 text-[#33f17c]" />
                Conteúdo Prático
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Aula 2 — Editando seu BioSite
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                Aprenda como editar, personalizar e utilizar os modelos disponíveis.
              </p>
            </div>
          </div>
        </section>

        {/* 6. CHAMADA FINAL */}
        <section className="py-16 sm:py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Tenha acesso a mais de <span className="text-[#33f17c]">100 BioSites</span> editáveis
            </h2>

            <p className="mt-5 text-base sm:text-lg text-neutral-300 leading-relaxed">
              Comece agora e tenha uma biblioteca de modelos prontos para facilitar a criação de BioSites para você ou para seus clientes.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col items-center">
              <a
                href={KIWIFY_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-4.5 rounded-xl bg-[#33f17c] text-black font-extrabold text-base sm:text-lg tracking-wide uppercase shadow-[0_0_24px_rgba(51,241,124,0.35)] hover:shadow-[0_0_36px_rgba(51,241,124,0.55)] hover:scale-[1.02] active:scale-[0.99] transition-all duration-200"
              >
                <span>QUERO MEU ACESSO</span>
                <ArrowRight className="w-5 h-5 text-black stroke-[2.5]" />
              </a>

              <p className="mt-4 text-xs sm:text-sm text-neutral-400">
                Comprou? Chame nossa equipe no WhatsApp para liberar seu acesso.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 7. RODAPÉ */}
      <footer className="w-full py-12 px-6 border-t border-white/5 bg-[#000000] text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4">
          <img
            src={LOGO_URL}
            alt="Biofácil"
            className="h-9 sm:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            loading="lazy"
          />
          <p className="text-xs sm:text-sm text-neutral-500 font-normal">
            Biofácil — BioSites simples, rápidos e profissionais.
          </p>
        </div>
      </footer>

      {/* Floating CTA for Mobile Conversion */}
      {showStickyCta && (
        <div className="sm:hidden fixed bottom-0 left-0 right-0 p-3 bg-black/90 backdrop-blur-md border-t border-white/10 z-50">
          <a
            href={KIWIFY_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-[#33f17c] text-black font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(51,241,124,0.4)] active:scale-[0.98] transition-transform"
          >
            <span>QUERO TER ACESSO</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      )}
    </div>
  );
}
