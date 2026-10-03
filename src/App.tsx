/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Gift,
  Instagram,
  MessageCircle,
  ShieldCheck,
  Star,
  X,
  ZoomIn,
  Zap,
  ArrowRight,
} from 'lucide-react';

const CHECKOUT_URL = 'https://checkout.escalepay.com/7028080';

const PRODUCT_CONFIG = {
  product: 'Universo da Química',
  price: '9,90€',
  guaranteeDays: 7,
};

const HERO_BULLETS = [
  'Para o 10.º, 11.º e 12.º ano do Ensino Secundário',
  '300 atividades prontas a utilizar, adaptar ou imprimir',
  'Material organizado por temas',
  '4 bónus exclusivos incluídos',
  'Material digital com acesso imediato após a compra',
];

const FEATURE_STRIP = [
  {
    icon: '🧪',
    title: '300 Atividades',
    text: 'Material completo de Química',
  },
  {
    icon: '🎁',
    title: '4 Bónus Exclusivos',
    text: 'Mais recursos para as suas aulas',
  },
  {
    icon: '♾️',
    title: 'Acesso Vitalício',
    text: 'Compre uma vez e utilize sempre',
  },
  {
    icon: '📚',
    title: 'Organizado por Temas',
    text: 'Encontre rapidamente o conteúdo',
  },
  {
    icon: '🛡️',
    title: 'Garantia de 7 Dias',
    text: 'Compra 100% protegida',
  },
];

const PAIN_SEQUENCE = [
  'Pesquisar',
  'Encontrar ideias',
  'Adaptar',
  'Criar perguntas',
  'Organizar',
  'Começar novamente',
];

const BEFORE_ITEMS = [
  'Pesquisar na internet durante horas',
  'Procurar ideias e criar atividades do zero',
  'Adaptar atividades e criar perguntas para cada aula',
  'Organizar materiais à noite ou ao fim de semana',
  'Ter pouca variedade pronta a utilizar',
];

const AFTER_ITEMS = [
  'Escolher o tema da aula em segundos',
  'Abrir a atividade pronta a utilizar',
  'Utilizar, adaptar ao nível da turma ou imprimir',
  'Projetar no ecrã/quadro ou distribuir em papel',
  'Menos tempo a preparar atividades. Mais opções para as suas aulas.',
];

const BENEFITS = [
  {
    icon: '🧫',
    title: 'Aulas mais práticas',
    text: 'Atividades que saem do quadro e vão diretamente para os seus alunos.',
  },
  {
    icon: '🎯',
    title: 'Maior variedade',
    text: 'Tenha mais variedade para trabalhar os conteúdos das suas aulas.',
  },
  {
    icon: '🙋',
    title: 'Mais participação',
    text: 'Dinâmicas e fichas que abrem espaço para a turma participar.',
  },
  {
    icon: '🔄',
    title: 'Opções prontas',
    text: 'Mais opções para escolher sem precisar de criar tudo do zero.',
  },
  {
    icon: '🗂️',
    title: 'Material organizado',
    text: 'Encontre rapidamente uma atividade relacionada com o conteúdo que está a trabalhar.',
  },
  {
    icon: '⏱️',
    title: 'Poupança de tempo',
    text: 'Escolha o tema, abra a atividade e utilize na sua aula.',
  },
  {
    icon: '🖼️',
    title: 'Recursos visuais',
    text: 'Esquemas e diagramas que facilitam a compreensão dos conteúdos.',
  },
  {
    icon: '📌',
    title: 'Para cada momento da aula',
    text: 'Introdução, prática, consolidação, revisão ou apoio ao estudo.',
  },
];

const THEMES = [
  {
    icon: '⚛️',
    title: 'Fundamentos da Química',
    text: 'Conceitos essenciais para introduzir e rever os conteúdos da disciplina.',
  },
  {
    icon: '🔗',
    title: 'Ligações e Estruturas',
    text: 'Atividades sobre ligações iónicas, covalentes, metálicas e representação de estruturas.',
  },
  {
    icon: '🧪',
    title: 'Reações Químicas',
    text: 'Propostas para identificar reagentes, produtos e transformações químicas.',
  },
  {
    icon: '🧮',
    title: 'Cálculos Químicos',
    text: 'Exercícios para praticar os cálculos trabalhados no 10.º, 11.º e 12.º ano do Ensino Secundário.',
  },
  {
    icon: '💧',
    title: 'Soluções',
    text: 'Atividades sobre concentração, misturas, diluições e preparação de soluções.',
  },
  {
    icon: '🔥',
    title: 'Termoquímica',
    text: 'Conteúdos sobre processos endotérmicos, exotérmicos e variação de energia.',
  },
  {
    icon: '🧬',
    title: 'Química Orgânica',
    text: 'Recursos para apoiar o estudo dos principais conteúdos de Química Orgânica.',
  },
  {
    icon: '📊',
    title: 'Tabela Periódica',
    text: 'Atividades de leitura, organização e identificação dos elementos químicos.',
  },
];

const PREVIEW_PAGES = [
  {
    src: '/assets/evidencia-ou-nao.webp',
    title: 'Evidência ou Não?',
    alt: 'Página real da Dinâmica 35 sobre evidências de transformações químicas',
    number: '01',
  },
  {
    src: '/assets/reagente-ou-produto.webp',
    title: 'Reagente ou Produto?',
    alt: 'Página real da Dinâmica 36 sobre reagentes e produtos',
    number: '02',
  },
  {
    src: '/assets/bingo-tabela-periodica.webp',
    title: 'Bingo da Tabela Periódica',
    alt: 'Página real da Dinâmica 02, Bingo da Tabela Periódica',
    number: '03',
  },
  {
    src: '/assets/familia-periodica.webp',
    title: 'Família Periódica em Ação',
    alt: 'Página real da Dinâmica 05 sobre famílias da tabela periódica',
    number: '04',
  },
  {
    src: '/assets/caca-aos-ions.webp',
    title: 'Caça aos Iões',
    alt: 'Página real da Dinâmica 07 sobre catiões e aniões',
    number: '05',
  },
  {
    src: '/assets/batalha-dos-elementos.webp',
    title: 'Batalha dos Elementos',
    alt: 'Página real da Dinâmica 08 sobre tendências periódicas',
    number: '06',
  },
  {
    src: '/assets/memoria-quimica.webp',
    title: 'Memória Química',
    alt: 'Página real da Dinâmica 13, jogo de memória química',
    number: '07',
  },
  {
    src: '/assets/quantas-fases.webp',
    title: 'Quantas Fases Vê?',
    alt: 'Página real da Dinâmica 62 sobre fases e componentes',
    number: '08',
  },
];

const WHY_REASONS = [
  {
    title: 'Pronto a utilizar',
    text: 'Menos tempo a preparar atividades do zero.',
  },
  {
    title: 'Organizado por temas',
    text: 'Encontre rapidamente o conteúdo para a sua aula.',
  },
  {
    title: 'Visual e didático',
    text: 'Atividades claras e fáceis de compreender pelos alunos.',
  },
  {
    title: 'Versátil',
    text: 'Utilize em aula, revisão, consolidação ou apoio.',
  },
  {
    title: 'Adaptável',
    text: 'Decida como aplicar ou adaptar ao perfil da sua turma.',
  },
  {
    title: 'Acesso vitalício',
    text: 'Aceda ao ficheiro digital sempre que precisar.',
  },
];

const MECHANISM_STEPS = [
  {
    n: '01',
    title: 'Escolha o tema',
    text: 'Encontre rapidamente o tema que pretende trabalhar com os seus alunos.',
    accent: 'text-royal',
    tint: 'bg-royal/5',
    ring: 'border-royal/25',
  },
  {
    n: '02',
    title: 'Abra a atividade',
    text: 'Aceda diretamente ao ficheiro correspondente e veja como utilizar na sua aula.',
    accent: 'text-cta',
    tint: 'bg-cta/5',
    ring: 'border-cta/25',
  },
  {
    n: '03',
    title: 'Utilize, adapte ou imprima',
    text: 'Utilize o material da forma mais adequada ao seu planeamento.',
    accent: 'text-cyan',
    tint: 'bg-cyan/5',
    ring: 'border-cyan/25',
  },
];

const BONUSES = [
  {
    cover: '/assets/bonus-flashcards.webp',
    title: 'FlashCards de Química',
    text: 'Cartões rápidos para revisão e consolidação de conceitos.',
    alt: 'Flashcards ilustrados com símbolos de átomos, moléculas e laboratório',
  },
  {
    cover: '/assets/bonus-exercicios.webp',
    title: 'Exercícios Pedagógicos',
    text: 'Atividades complementares para praticar e consolidar conteúdos.',
    alt: 'Folhas de exercícios de Química com moléculas e materiais escolares',
  },
  {
    cover: '/assets/bonus-quizzes.webp',
    title: 'Quizzes de Química',
    text: 'Perguntas prontas para revisão e verificação de compreensão.',
    alt: 'Ilustração de quiz com símbolos químicos e opções de resposta',
  },
  {
    cover: '/assets/bonus-bingo.webp',
    title: 'Bingo de Química',
    text: 'Dinâmica em grupo para rever conteúdos de forma leve e participativa.',
    alt: 'Tabuleiro de bingo ilustrado com elementos de Química',
  },
];

const TESTIMONIALS: [string, string, string][] = [
  [
    'Prof.ª Ana C.',
    'Professora de Química',
    'Gostei muito da organização por temas. Os exemplos tornam muito mais simples escolher uma atividade adequada para cada aula.',
  ],
  [
    'Prof. Marcos R.',
    'Professor do ensino público',
    'O formato visual facilita bastante no momento de apresentar o conteúdo e envolver os alunos.',
  ],
  [
    'Prof.ª Camila S.',
    'Explicadora e professora',
    'Encontrei ideias variadas para rever conceitos sem repetir sempre o mesmo tipo de ficha ou exercício.',
  ],
  [
    'Prof. Renato M.',
    'Professor do Ensino Secundário',
    'O material está muito bem dividido e consigo localizar rapidamente o tema que estou a trabalhar com o 10.º e 11.º ano.',
  ],
  [
    'Prof.ª Luciana P.',
    'Professora do ensino público',
    'As atividades ajudam a tornar conteúdos mais abstratos em experiências mais visuais para os alunos.',
  ],
  [
    'Prof. Daniel F.',
    'Professor de Química',
    'Utilizei como apoio no planeamento e consegui preparar uma aula diferente em muito menos tempo.',
  ],
  [
    'Prof.ª Patrícia L.',
    'Professora do Ensino Secundário',
    'Achei excelente poder adaptar as propostas de acordo com o ritmo e o nível de cada turma.',
  ],
  [
    'Prof. Eduardo N.',
    'Professor de Física e Química',
    'A variedade é o ponto forte. Há opções para introdução, prática e revisão dos conteúdos.',
  ],
  [
    'Prof.ª Juliana A.',
    'Professora do Ensino Secundário',
    'Os meus alunos participaram muito mais quando utilizei uma dinâmica visual durante a aula de revisão.',
  ],
  [
    'Prof. André V.',
    'Professor de Química',
    'O acesso ao ficheiro foi imediato e o conteúdo está organizado de uma forma muito prática de consultar.',
  ],
  [
    'Prof.ª Beatriz T.',
    'Professora do ensino público',
    'Gostei especialmente das propostas de Tabela Periódica e ligações químicas para o 10.º ano.',
  ],
  [
    'Prof. Carlos H.',
    'Professor e explicador',
    'É um excelente apoio para variar as atividades e sair um pouco do formato tradicional.',
  ],
  [
    'Prof.ª Fernanda G.',
    'Professora de Química',
    'As páginas são claras e funcionam muito bem tanto projetadas no quadro como impressas em papel.',
  ],
  [
    'Prof. Gustavo B.',
    'Professor do Ensino Secundário',
    'As atividades deram-me novas ideias para trabalhar conteúdos do 11.º e 12.º ano que costumam gerar dúvidas.',
  ],
  [
    'Prof.ª Helena D.',
    'Professora do Ensino Secundário',
    'A separação por temas tornou o planeamento da sequência de aulas muito mais rápido e prático.',
  ],
  [
    'Prof. Igor C.',
    'Professor de Química',
    'Consegui selecionar atividades perfeitamente compatíveis com o tempo disponível em cada aula.',
  ],
  [
    'Prof.ª Joana M.',
    'Professora de Química',
    'O material complementa as minhas explicações com propostas mais práticas e participativas.',
  ],
  [
    'Prof. Leandro P.',
    'Professor do ensino público',
    'Gostei da possibilidade de utilizar diretamente ou adaptar as ideias para diferentes turmas.',
  ],
  [
    'Prof.ª Marina R.',
    'Professora de Química',
    'Os 4 bónus também são muito úteis para revisão e para os momentos de consolidação da aula.',
  ],
  [
    'Prof. Paulo S.',
    'Professor do Ensino Secundário',
    'As atividades têm uma apresentação cuidada e as instruções são muito fáceis de compreender pelos alunos.',
  ],
  [
    'Prof.ª Renata V.',
    'Professora do ensino público',
    'É uma biblioteca que oferece diferentes caminhos para trabalhar o mesmo conteúdo sem perder horas a criar do zero.',
  ],
];

const SOCIAL_PLATFORMS = [
  { name: 'WhatsApp', Icon: MessageCircle, color: 'text-cta', surface: 'bg-cta/10' },
  { name: 'Instagram', Icon: Instagram, color: 'text-royal', surface: 'bg-royal/10' },
  { name: 'Facebook', Icon: Facebook, color: 'text-primary', surface: 'bg-primary/10' },
];

const OFFER_ITEMS = [
  { label: '300 atividades de Química organizadas por temas', bonus: false },
  { label: 'Conteúdos destinados ao 10.º, 11.º e 12.º ano do Ensino Secundário', bonus: false },
  { label: 'Material digital em PDF pronto a utilizar, adaptar ou imprimir', bonus: false },
  { label: 'Acesso imediato ao material após a compra (acesso vitalício)', bonus: false },
  { label: 'FlashCards de Química', bonus: true },
  { label: 'Exercícios Pedagógicos de Química', bonus: true },
  { label: 'Quizzes de Química', bonus: true },
  { label: 'Bingo de Química', bonus: true },
];

const FAQS = [
  {
    q: 'Para que anos do Ensino Secundário servem as atividades?',
    a: 'O material contempla conteúdos destinados ao 10.º, 11.º e 12.º ano do Ensino Secundário. Pode escolher as atividades de acordo com o tema que está a trabalhar em cada aula.',
  },
  {
    q: 'Como recebo o material após a compra?',
    a: 'Após a confirmação do pagamento, o acesso ao material digital é enviado de imediato para o endereço de e-mail indicado no momento da compra.',
  },
  {
    q: 'O acesso ao material é vitalício?',
    a: 'Sim. Faz um pagamento único de 9,90€ e pode aceder, guardar o ficheiro e utilizar o material sempre que precisar.',
  },
  {
    q: 'Preciso de internet para utilizar as atividades?',
    a: 'A internet é necessária apenas para aceder e descarregar o ficheiro digital. Depois de guardado no seu dispositivo, pode consultar as atividades e imprimir quando quiser.',
  },
  {
    q: 'Preciso de algum equipamento específico?',
    a: 'Não. Basta um telemóvel, tablet ou computador para aceder aos ficheiros em PDF. Para imprimir, pode utilizar qualquer impressora comum.',
  },
  {
    q: 'Posso imprimir ou adaptar as atividades?',
    a: 'Sim. As atividades estão prontas a utilizar no ecrã/quadro interativo, podem ser adaptadas ao seu planeamento ou impressas para distribuir aos seus alunos.',
  },
  {
    q: 'Como funciona a garantia?',
    a: `Dispõe de ${PRODUCT_CONFIG.guaranteeDays} dias para aceder e conhecer o conteúdo. Caso o material não corresponda às suas expectativas, poderá acionar a garantia e solicitar o reembolso conforme as condições indicadas na compra.`,
  },
  {
    q: 'Preciso de ter experiência prévia com atividades interativas?',
    a: 'Não. Todas as propostas foram organizadas para facilitar a utilização. Basta escolher o tema, abrir a atividade, ler as orientações e utilizar ou adaptar à realidade da sua turma.',
  },
];

function CtaButton({
  children,
  className = '',
  size = 'lg',
  href = CHECKOUT_URL,
}: {
  children: React.ReactNode;
  className?: string;
  size?: 'lg' | 'md';
  href?: string;
}) {
  const isExternal = href.startsWith('http');
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={`inline-flex w-full items-center justify-center rounded-full bg-cta text-center font-heading font-extrabold uppercase tracking-wide text-cta-foreground shadow-cta transition-transform duration-200 hover:-translate-y-0.5 hover:bg-cta-hover sm:w-auto ${
        size === 'lg' ? 'px-8 py-4 text-base sm:text-lg' : 'px-6 py-3 text-sm'
      } ${className}`}
    >
      {children}
    </a>
  );
}

function HeroChecklist() {
  return (
    <div>
      <ul className="grid gap-2.5 text-left">
        {HERO_BULLETS.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2.5 text-sm font-semibold text-navy-foreground/90 sm:text-base"
          >
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cta text-cta-foreground">
              <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <CtaButton href="#oferta" className="w-full sm:w-auto">
          QUERO AS 300 ATIVIDADES
        </CtaButton>
        <p className="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs font-semibold text-navy-foreground/70 sm:text-sm lg:justify-start">
          <span>🔒 Compra segura</span>
          <span>•</span>
          <span>⚡ Acesso imediato</span>
          <span>•</span>
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Garantia de {PRODUCT_CONFIG.guaranteeDays} dias
          </span>
        </p>
      </div>
    </div>
  );
}

function SectionContainer({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`performance-section px-5 py-12 sm:px-8 sm:py-18 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

function SectionHeading({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-heading text-center text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-left sm:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

function SectionSubheading({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed sm:mx-0 sm:text-left sm:text-lg ${className}`}
    >
      {children}
    </p>
  );
}

export default function App() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [selectedPreview, setSelectedPreview] = useState<(typeof PREVIEW_PAGES)[0] | null>(null);
  const [openFaq, setOpenFaq] = useState<string | null>(FAQS[0].q);
  const [legalModal, setLegalModal] = useState<'privacidade' | 'termos' | 'suporte' | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPreview(null);
        setLegalModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollCarousel = (dir: number) => {
    const el = carouselRef.current;
    if (el) {
      el.scrollBy({ left: dir * el.clientWidth * 0.88, behavior: 'smooth' });
    }
  };

  return (
    <main className="overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <header className="relative overflow-hidden bg-gradient-navy text-navy-foreground">
        <div className="grid-lab absolute inset-0" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-28 top-16 hidden size-80 rounded-full bg-cyan/15 blur-3xl sm:block"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-24 bottom-0 hidden size-72 rounded-full bg-highlight/10 blur-3xl sm:block"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid min-h-[720px] w-full max-w-6xl items-center gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:min-h-[690px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:py-16">
          <div className="min-w-0 text-center lg:text-left">
            <span className="inline-flex items-center rounded-full border border-highlight/35 bg-highlight/15 px-4 py-2 font-heading text-xs font-extrabold uppercase tracking-[0.12em] text-highlight shadow-card sm:text-sm">
              🧪 Universo da Química • Ensino Secundário
            </span>

            <h1 className="mt-5 font-heading text-[2.15rem] font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-[3.45rem]">
              Pare de perder horas a{' '}
              <span className="text-highlight">criar atividades de Química do zero.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-navy-foreground/82 sm:text-lg lg:mx-0">
              Tenha 300 atividades prontas a utilizar, adaptar ou imprimir — organizadas por temas
              para encontrar rapidamente o que precisa para cada aula.
            </p>

            <div className="mt-7 hidden max-w-xl lg:block">
              <HeroChecklist />
            </div>
          </div>

          <div className="relative min-w-0">
            <div
              className="absolute inset-6 hidden rounded-[3rem] bg-cyan/15 blur-3xl sm:block"
              aria-hidden="true"
            />
            <img
              src="/assets/mockup-hero-pt.webp"
              alt="Mockup do material Universo da Química — 300 Atividades de Química"
              width={1024}
              height={768}
              loading="eager"
              fetchPriority="high"
              referrerPolicy="no-referrer"
              className="relative mx-auto w-full max-w-2xl rounded-[1.75rem] shadow-float"
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-highlight px-4 py-2 font-heading text-xs font-extrabold text-highlight-foreground shadow-card sm:text-sm">
              300 atividades + 4 bónus • 9,90€
            </div>
          </div>

          <div className="lg:hidden">
            <HeroChecklist />
          </div>
        </div>
      </header>

      {/* 2. FEATURE STRIP */}
      <div className="border-b border-border bg-secondary px-5 py-5 sm:px-8">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {FEATURE_STRIP.map((item, idx) => (
            <div
              key={item.title}
              className={`flex items-start gap-3 rounded-2xl bg-card p-4 shadow-card lg:flex-col lg:items-center lg:text-center ${
                idx === FEATURE_STRIP.length - 1 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <span className="text-2xl leading-none" aria-hidden="true">
                {item.icon}
              </span>
              <div className="min-w-0">
                <p className="font-heading text-sm font-extrabold text-foreground sm:text-base">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. PAIN & BEFORE/AFTER SECTION */}
      <SectionContainer className="bg-background">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading className="sm:text-center">
            Quantas horas perde a{' '}
            <span className="text-mark">preparar atividades de Química do zero?</span>
          </SectionHeading>
          <SectionSubheading className="mx-auto text-muted-foreground sm:mx-auto sm:text-center">
            Entre preparar as aulas, corrigir trabalhos e lidar com toda a rotina escolar, ainda
            existe uma tarefa que pode consumir bastante tempo: encontrar ou criar uma atividade
            adequada para cada aula.
          </SectionSubheading>

          {/* Pain Sequence Flow */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-border bg-secondary/50 px-4 py-3.5 text-xs font-bold text-foreground/80 sm:text-sm">
            {PAIN_SEQUENCE.map((step, index) => (
              <React.Fragment key={step}>
                <span>{step}</span>
                {index < PAIN_SEQUENCE.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="mt-6 font-heading text-lg font-extrabold text-royal sm:text-xl">
            E se, em vez de começar do zero, pudesse começar com uma atividade pronta?
          </p>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-secondary/70 p-5 sm:p-7">
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
              Sem o material (Antes)
            </p>
            <ul className="mt-5 space-y-3.5">
              {BEFORE_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-foreground/75 sm:text-base"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-destructive/10 text-xs font-bold text-destructive">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-navy p-5 text-navy-foreground shadow-float sm:p-7">
            <p className="font-heading text-xs font-extrabold uppercase tracking-[0.16em] text-cyan">
              Com o Universo da Química (Depois)
            </p>
            <ul className="mt-5 space-y-3.5">
              {AFTER_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cta text-xs font-bold text-cta-foreground">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionContainer>

      {/* 4. PRODUCT PRESENTATION & BENEFITS */}
      <SectionContainer className="bg-secondary">
        <div className="max-w-3xl">
          <p className="font-heading text-xs font-extrabold uppercase tracking-[0.15em] text-royal sm:text-sm">
            Conheça o Universo da Química
          </p>
          <SectionHeading className="mt-2">
            Mais variedade para as suas aulas.{' '}
            <span className="text-mark">Menos tempo a começar do zero.</span>
          </SectionHeading>
          <SectionSubheading className="text-muted-foreground">
            Uma biblioteca com 300 atividades de Química, organizadas por temas, criada para ajudar
            a encontrar rapidamente uma atividade para diferentes momentos das suas aulas no 10.º,
            11.º e 12.º ano do Ensino Secundário.
          </SectionSubheading>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((item) => (
            <div key={item.title} className="rounded-2xl bg-card p-5 shadow-card">
              <span className="text-2xl" aria-hidden="true">
                {item.icon}
              </span>
              <p className="mt-3 font-heading text-base font-extrabold text-foreground">
                {item.title}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 5. THEMES SECTION */}
      <SectionContainer className="bg-background">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading className="sm:text-center">
            Tudo o que precisa <span className="text-mark">num só lugar.</span>
          </SectionHeading>
          <SectionSubheading className="mx-auto text-muted-foreground sm:mx-auto sm:text-center">
            Encontre rapidamente atividades para os diferentes conteúdos do 10.º, 11.º e 12.º ano do
            Ensino Secundário.
          </SectionSubheading>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {THEMES.map((theme) => (
            <article
              key={theme.title}
              className="rounded-2xl border border-border bg-card p-5 shadow-card transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="text-3xl" aria-hidden="true">
                {theme.icon}
              </span>
              <h3 className="mt-4 font-heading text-base font-extrabold text-foreground">
                {theme.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{theme.text}</p>
            </article>
          ))}
        </div>
      </SectionContainer>

      {/* 6. INSIDE THE PRODUCT — REAL PAGES GALLERY */}
      <SectionContainer className="bg-secondary">
        <div className="flex items-end justify-between gap-4">
          <div className="max-w-3xl">
            <SectionHeading>Veja uma amostra do material</SectionHeading>
            <SectionSubheading className="text-muted-foreground">
              Consulte páginas reais das atividades, fichas, jogos e exercícios e toque para
              ampliar.
            </SectionSubheading>
          </div>

          <div className="hidden shrink-0 gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollCarousel(-1)}
              aria-label="Ver páginas anteriores"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-input bg-background shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel(1)}
              aria-label="Ver próximas páginas"
              className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-input bg-background shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:px-0"
        >
          {PREVIEW_PAGES.map((page) => (
            <figure
              key={page.title}
              className="group w-[84vw] max-w-[22rem] shrink-0 snap-center sm:w-[45%] sm:max-w-none lg:w-[31%]"
            >
              <button
                type="button"
                onClick={() => setSelectedPreview(page)}
                aria-label={`Ampliar atividade: ${page.title}`}
                className="block h-auto w-full cursor-pointer p-0 text-left"
              >
                <span className="block w-full">
                  <span className="relative block aspect-[7/10] overflow-hidden rounded-lg border border-border bg-card p-2 shadow-card transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-float">
                    <span
                      className="absolute left-4 top-4 z-20 rounded-md bg-royal px-2 py-1 font-heading text-xs font-extrabold text-primary-foreground shadow-card"
                      aria-hidden="true"
                    >
                      {page.number}
                    </span>
                    <span
                      className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-card text-royal shadow-card"
                      aria-hidden="true"
                    >
                      <ZoomIn className="h-4 w-4" />
                    </span>
                    <img
                      src={page.src}
                      alt={page.alt}
                      width={900}
                      height={1260}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-full w-full rounded-md object-contain"
                    />
                  </span>
                  <span className="block px-2 pt-4 text-center font-heading text-base font-extrabold text-foreground">
                    <span className="block text-xs uppercase text-royal">
                      Página real do material
                    </span>
                    <span className="mt-1 block">{page.title}</span>
                  </span>
                </span>
              </button>
            </figure>
          ))}
        </div>

        <div className="mt-1 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => scrollCarousel(-1)}
            aria-label="Ver página anterior"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-input bg-background shadow-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="font-heading text-xs font-bold text-muted-foreground">
            Deslize para ver as 8 páginas
          </span>
          <button
            type="button"
            onClick={() => scrollCarousel(1)}
            aria-label="Ver próxima página"
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-input bg-background shadow-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </SectionContainer>

      {/* 7. WHY IT MAKES ROUTINE EASIER */}
      <SectionContainer className="bg-gradient-navy text-navy-foreground">
        <div className="max-w-3xl">
          <SectionHeading>
            Porque é que este material{' '}
            <span className="text-highlight">facilita tanto a rotina</span> do professor?
          </SectionHeading>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_REASONS.map((item, idx) => (
            <div
              key={item.title}
              className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6 backdrop-blur-sm"
            >
              <span className="font-heading text-sm font-extrabold text-cyan">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p className="mt-3 font-heading text-lg font-extrabold uppercase tracking-tight">
                {item.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">{item.text}</p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 8. MECHANISM: ESCOLHA. ABRA. UTILIZE. */}
      <SectionContainer className="bg-background">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading className="sm:text-center">
            ESCOLHA. ABRA. <span className="text-mark">UTILIZE.</span>
          </SectionHeading>
          <SectionSubheading className="mx-auto text-muted-foreground sm:mx-auto sm:text-center">
            Três passos simples para deixar de perder tempo à procura e chegar rapidamente à
            atividade de que precisa para a sua aula.
          </SectionSubheading>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-3">
          {MECHANISM_STEPS.map((step) => (
            <div
              key={step.n}
              className={`relative overflow-hidden rounded-3xl border ${step.ring} ${step.tint} bg-card p-6 shadow-card`}
            >
              <span className={`font-heading text-5xl font-extrabold ${step.accent}`}>
                {step.n}
              </span>
              <p className="mt-3 font-heading text-xl font-extrabold text-foreground">
                {step.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* 9. 4 BONUSES SECTION */}
      <SectionContainer className="bg-background">
        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading className="sm:text-center">
            E ainda recebe 4 bónus para tornar as suas aulas{' '}
            <span className="text-mark">ainda mais completas.</span>
          </SectionHeading>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Quatro recursos complementares incluídos na mesma oferta.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {BONUSES.map((bonus) => (
            <article
              key={bonus.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={bonus.cover}
                  alt={bonus.alt}
                  loading="lazy"
                  width={720}
                  height={720}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-highlight px-2.5 py-1 font-heading text-[0.62rem] font-extrabold uppercase tracking-wide text-highlight-foreground shadow-card">
                  Bónus
                </span>
              </div>
              <div className="p-3 sm:p-5">
                <h3 className="font-heading text-sm font-extrabold text-foreground sm:text-base">
                  {bonus.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{bonus.text}</p>
                <p className="mt-3 text-xs font-extrabold uppercase tracking-wide text-cta">
                  Incluído na oferta
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionContainer>

      {/* 10. TESTIMONIALS */}
      <SectionContainer className="bg-muted/55">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading className="mt-4 sm:text-center">
            +1.541 professores transformaram as suas aulas
          </SectionHeading>
        </div>

        <div
          className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-5 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5"
          aria-label="Testemunhos de professores"
        >
          {TESTIMONIALS.map(([name, role, quote], idx) => {
            const platform = SOCIAL_PLATFORMS[idx % SOCIAL_PLATFORMS.length];
            const Icon = platform.Icon;
            return (
              <article
                key={name}
                className="w-[84vw] max-w-[340px] shrink-0 snap-center rounded-2xl border border-border bg-card p-5 text-card-foreground shadow-card"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${platform.surface}`}
                  >
                    <Icon className={`h-5 w-5 ${platform.color}`} aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-4 flex gap-0.5" aria-label="Avaliação de cinco estrelas">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="h-4 w-4 fill-highlight text-highlight"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 min-h-28 text-sm font-semibold leading-relaxed text-foreground">
                  “{quote}”
                </blockquote>

                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-heading text-sm font-extrabold text-foreground">{name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {role} • {platform.name}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="text-center text-xs font-bold text-muted-foreground">
          Testemunhos de professores que já adquiriram o material
        </p>
      </SectionContainer>

      {/* 11. SINGLE OFFER SECTION — UNIVERSO DA QUÍMICA (9,90€) */}
      <SectionContainer id="oferta" className="scroll-mt-4 bg-gradient-navy text-navy-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading className="sm:text-center">
            Leve o <span className="text-highlight">Universo da Química</span> para as suas próximas
            aulas.
          </SectionHeading>
          <p className="mx-auto mt-3 max-w-2xl text-base text-navy-foreground/80 sm:text-lg">
            Menos tempo a preparar atividades. Mais opções para as suas aulas do 10.º, 11.º e 12.º
            ano do Ensino Secundário.
          </p>
        </div>

        <div className="mx-auto mt-9 grid max-w-5xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Product Bundle Image */}
          <div className="mx-auto w-full max-w-xl">
            <img
              src="/assets/pacote-completo.webp"
              alt="Universo da Química — 300 atividades de Química, 4 bónus e material digital"
              loading="lazy"
              decoding="async"
              width={960}
              height={960}
              referrerPolicy="no-referrer"
              className="w-full rounded-2xl shadow-float"
            />
          </div>

          {/* Single Unified Plan Card */}
          <div className="rounded-3xl border border-navy-foreground/15 bg-card p-6 text-card-foreground shadow-float sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="inline-flex rounded-full bg-royal px-3.5 py-1 font-heading text-xs font-extrabold uppercase tracking-[0.14em] text-royal-foreground">
                UNIVERSO DA QUÍMICA
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-cta/15 px-3 py-1 text-xs font-bold text-cta">
                <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                Edição Portugal
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {OFFER_ITEMS.map((item) => {
                const Icon = item.bonus ? Gift : Check;
                return (
                  <li
                    key={item.label}
                    className="flex items-start gap-3 text-sm font-bold sm:text-base"
                  >
                    <Icon
                      className="mt-0.5 h-5 w-5 shrink-0 text-cta"
                      strokeWidth={2.3}
                      aria-hidden="true"
                    />
                    <span className="min-w-0 leading-snug">
                      {item.bonus && <strong className="font-extrabold text-royal">BÓNUS: </strong>}
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="mt-7 border-t border-border pt-6">
              <p className="mb-3 rounded-xl bg-highlight/20 px-3 py-2 text-sm font-bold text-highlight-foreground">
                Acesso imediato ao ficheiro digital. Utilize hoje mesmo nas suas aulas.
              </p>
              <p className="text-sm font-semibold text-muted-foreground">
                300 atividades de Química + 4 bónus + acesso vitalício por apenas
              </p>
              <div className="mt-2 flex items-baseline gap-3">
                <p className="font-heading text-5xl font-extrabold leading-none text-foreground sm:text-6xl">
                  {PRODUCT_CONFIG.price}
                </p>
                <span className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  Pagamento único
                </span>
              </div>
            </div>

            <div className="mt-6">
              <CtaButton href={CHECKOUT_URL} className="w-full sm:w-full">
                QUERO AS 300 ATIVIDADES
              </CtaButton>

              <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-sm font-bold text-cta">
                <ShieldCheck className="h-5 w-5 shrink-0" aria-hidden="true" />
                Garantia de {PRODUCT_CONFIG.guaranteeDays} dias
              </p>

              <p className="mt-2 text-center text-xs text-muted-foreground sm:text-sm">
                🔒 Ambiente seguro • MB WAY, Multibanco ou Cartão • Acesso imediato
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* 12. GUARANTEE SECTION */}
      <SectionContainer className="bg-background">
        <div className="grid items-center gap-6 rounded-3xl border border-border bg-secondary/60 p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:gap-10">
          <div className="mx-auto grid h-32 w-32 shrink-0 place-items-center rounded-full bg-gradient-royal text-center shadow-float sm:h-40 sm:w-40">
            <div className="text-royal-foreground">
              <p className="font-heading text-4xl font-extrabold leading-none sm:text-5xl">
                {PRODUCT_CONFIG.guaranteeDays}
              </p>
              <p className="mt-1 font-heading text-[0.65rem] font-bold uppercase tracking-[0.18em] sm:text-xs">
                dias de garantia
              </p>
            </div>
          </div>

          <div className="min-w-0">
            <SectionHeading className="text-3xl sm:text-4xl">
              Conheça o material sem correr riscos.
            </SectionHeading>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Tem {PRODUCT_CONFIG.guaranteeDays} dias para aceder e conhecer todo o conteúdo do{' '}
              <strong>Universo da Química</strong>. Caso o material não corresponda às suas
              expectativas, poderá utilizar a garantia e solicitar o reembolso integral conforme as
              condições indicadas na compra.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* 13. FAQ SECTION */}
      <SectionContainer className="bg-secondary">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading className="sm:text-center">Perguntas frequentes</SectionHeading>
        </div>

        <div className="mx-auto mt-8 w-full max-w-4xl">
          {FAQS.map((item) => {
            const isOpen = openFaq === item.q;
            return (
              <div
                key={item.q}
                className="mb-3 rounded-2xl border border-border bg-card px-5 shadow-card"
              >
                <h3 className="flex">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : item.q)}
                    aria-expanded={isOpen}
                    className="flex flex-1 cursor-pointer items-center justify-between py-4 text-left font-heading text-base font-bold text-foreground transition-all"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div className="pb-4 pt-0 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* 14. FINAL CTA SECTION */}
      <SectionContainer className="bg-background">
        <div className="rounded-3xl border border-border bg-secondary/70 p-7 text-center shadow-card sm:p-12">
          <SectionHeading className="mx-auto max-w-4xl sm:text-center">
            Na próxima vez que precisar de preparar uma aula,{' '}
            <span className="text-mark">comece com uma atividade pronta.</span>
          </SectionHeading>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tenha a sua biblioteca de 300 atividades de Química disponível sempre que precisar.
          </p>
          <div className="mx-auto mt-7 max-w-md">
            <CtaButton href={CHECKOUT_URL} className="w-full sm:w-full">
              QUERO AS 300 ATIVIDADES
            </CtaButton>
            <p className="mt-3 text-sm font-bold text-foreground">
              {PRODUCT_CONFIG.price} • pagamento único
            </p>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              🔒 Compra segura • ⚡ Acesso imediato • 🛡️ Garantia de {PRODUCT_CONFIG.guaranteeDays}{' '}
              dias
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* 15. FOOTER */}
      <footer className="bg-navy px-5 pb-28 pt-14 text-navy-foreground sm:px-8 lg:pb-14">
        <div className="mx-auto w-full max-w-6xl">
          <p className="font-heading text-lg font-extrabold">{PRODUCT_CONFIG.product}</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-navy-foreground/70">
            Produto digital educativo desenvolvido para apoiar professores de Química do 10.º, 11.º
            e 12.º ano do Ensino Secundário no planeamento e na aplicação de atividades em sala de
            aula.
          </p>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-navy-foreground/65">
            <button
              type="button"
              onClick={() => setLegalModal('privacidade')}
              className="cursor-pointer hover:text-navy-foreground hover:underline"
            >
              Política de Privacidade
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('termos')}
              className="cursor-pointer hover:text-navy-foreground hover:underline"
            >
              Termos de Utilização
            </button>
            <button
              type="button"
              onClick={() => setLegalModal('suporte')}
              className="cursor-pointer hover:text-navy-foreground hover:underline"
            >
              Contacto / Suporte
            </button>
          </div>
        </div>

        <div className="mx-auto mt-10 w-full max-w-6xl border-t border-navy-foreground/15 pt-6 text-xs leading-relaxed text-navy-foreground/55">
          © {new Date().getFullYear()} {PRODUCT_CONFIG.product} — Edição Portugal. Todos os direitos
          reservados. Material digital educativo. Os resultados de aprendizagem variam conforme o
          contexto, a aplicação e o perfil da turma.
        </div>
      </footer>

      {/* 16. MOBILE STICKY BOTTOM BAR */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy/15 bg-card px-4 py-2.5 lg:hidden">
        <div className="mx-auto flex max-w-lg items-center gap-3">
          <div className="shrink-0">
            <p className="text-[0.65rem] font-bold uppercase tracking-wide text-muted-foreground">
              Oferta única
            </p>
            <p className="font-heading text-lg font-extrabold leading-none text-foreground">
              {PRODUCT_CONFIG.price}
            </p>
          </div>
          <a
            href="#oferta"
            className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-cta px-5 py-3 text-center font-heading text-sm font-extrabold uppercase tracking-wide text-cta-foreground shadow-cta"
          >
            QUERO AS 300 ATIVIDADES
          </a>
        </div>
      </div>

      {/* ACTIVITY PAGE PREVIEW LIGHTBOX MODAL */}
      {selectedPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPreview.title}
          onClick={() => setSelectedPreview(null)}
        >
          <div
            className="relative max-h-[94dvh] w-[calc(100%-1rem)] max-w-3xl overflow-y-auto rounded-xl border border-border bg-card p-3 pt-12 shadow-2xl sm:p-5 sm:pt-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPreview(null)}
              aria-label="Fechar pré-visualização"
              className="absolute right-3 top-3 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-accent"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="pr-10 font-heading text-lg font-extrabold text-foreground">
              {selectedPreview.title}
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Página real incluída no material Universo da Química.
            </p>
            <img
              src={selectedPreview.src}
              alt={selectedPreview.alt}
              width={900}
              height={1260}
              referrerPolicy="no-referrer"
              className="mx-auto mt-3 h-auto w-full rounded-md object-contain"
            />
          </div>
        </div>
      )}

      {/* FOOTER LEGAL / SUPPORT MODAL */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setLegalModal(null)}
        >
          <div
            className="relative max-w-lg rounded-2xl bg-card p-6 text-card-foreground shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLegalModal(null)}
              aria-label="Fechar"
              className="absolute right-3 top-3 inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-secondary text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
            <h3 className="font-heading text-lg font-extrabold text-foreground">
              {legalModal === 'privacidade' && 'Política de Privacidade (RGPD)'}
              {legalModal === 'termos' && 'Termos de Utilização'}
              {legalModal === 'suporte' && 'Contacto e Suporte — Portugal'}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {legalModal === 'privacidade' &&
                'Os seus dados pessoais são tratados em estrita conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) em vigor em Portugal e na União Europeia, destinando-se exclusivamente ao envio imediato do material digital Universo da Química e ao apoio ao cliente.'}
              {legalModal === 'termos' &&
                'O Universo da Química é um material digital educativo destinado ao uso pedagógico por professores de Química do Ensino Secundário (10.º, 11.º e 12.º ano). O acesso é vitalício mediante pagamento único de 9,90€, incluindo garantia de satisfação de 7 dias.'}
              {legalModal === 'suporte' &&
                'Para qualquer questão sobre o acesso aos ficheiros digitais, faturação ou garantia de 7 dias, contacte a nossa equipa de suporte através do e-mail suporte@universodaquimica.pt. Tempo médio de resposta: menos de 24 horas úteis.'}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}

