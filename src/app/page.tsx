import Image from 'next/image';
import { MarqueeDemo } from '@/components/reviews-marquee';
import { BeforeAfter } from '@/components/before-after';
import { MapPin, Phone, Sparkles, Clock, Heart, Award, CheckCircle2, Star, Instagram } from 'lucide-react';

export default function Home() {
  const whatsappNumber = "5561999999999"; // Link do WhatsApp profissional
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C+Lu%21+Vim+pelo+site+da+Ls+Est%C3%A9tica+das+Unhas+e+gostaria+de+agendar+um+hor%C3%A1rio.`;
  const gmbUrl = "https://share.google/keyGDqrhqdFJLYTxq";
  const mapsRouteUrl = "https://www.google.com/maps/dir/-15.9467942,-48.284375/Ls+est%C3%A9tica+das+unhas,+Perola+02,+lote+06+-+perola,+2+-+P%C3%A9rola+2,+%C3%81guas+Lindas+de+Goi%C3%A1s+-+GO,+72911-250/@-15.9467942,-48.284375,15z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x935bb97190daff17:0xaaadecc4f66cd3fe!2m2!1d-48.256207!2d-15.7285285";

  const services = [
    {
      title: "Alongamento em Fibra de Vidro",
      desc: "Unhas longas, com curvatura acentuada e estrutura ultrafina. Resistência superior e visual 100% natural.",
      badge: "Mais Pedido",
      icon: Sparkles,
    },
    {
      title: "Alongamento em Gel Moldado",
      desc: "Modelagem sob medida para a anatomia de cada dedo, garantindo harmonia, brilho duradouro e elegância.",
      badge: "Premium",
      icon: Award,
    },
    {
      title: "Banho de Gel & Blindagem",
      desc: "Camada protetora fortificante para unhas naturais que descamam ou quebram. Crescimento saudável e esmalte impecável.",
      badge: "Fortalecimento",
      icon: Heart,
    },
    {
      title: "Nail Art & Decorações Exclusivas",
      desc: "Francesa reversa, babyboomer, encapsuladas com glitter rosê/dourado, pedrarias e acabamento de luxo.",
      badge: "Exclusivo",
      icon: Star,
    },
  ];

  const galleryImages = [
    { src: "/imgi_25_783126058_18617808214034989_7776561168332735249_n.jpg", title: "Babyboomer Rosê & Dourado" },
    { src: "/imgi_27_771823013_18063549989772031_3713045491827911757_n.jpg", title: "Alongamento Clássico & Brilho" },
    { src: "/imgi_29_762178834_18611266006034989_2472924061464923196_n.jpg", title: "Acabamento Fino e Natural" },
    { src: "/imgi_6_724261737_18110786765509991_1418401014925081258_n.jpg", title: "Encapsulada com Detalhes Ouro" },
  ];

  return (
    <div className="min-h-screen bg-[#0d080a] text-[#fcf8f9] font-sans">
      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#0d080a]/85 backdrop-blur-md border-b border-[#c9828f]/20">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-serif tracking-wider bg-gradient-to-r from-[#f5d77f] via-[#c9828f] to-[#f5d77f] bg-clip-text text-transparent font-bold">
              LS ESTÉTICA DAS UNHAS
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#e6b8c2] uppercase font-light">
              Nail Studio & Designer
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#c9828f] to-[#d4af37] text-[#0d080a] px-5 py-2.5 rounded-full font-semibold text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(201,130,143,0.3)] flex items-center gap-2"
            >
              <Phone size={16} /> <span className="hidden sm:inline">Agendar</span> Horário
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/identidade_visual.jpg"
            alt="Ls Estética das Unhas Espaço"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d080a]/70 via-[#0d080a]/90 to-[#0d080a]"></div>
        </div>

        {/* Ambient Glows */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-[#c9828f]/20 to-[#d4af37]/20 blur-[130px] pointer-events-none"></div>

        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9828f]/15 border border-[#c9828f]/30 mb-8 backdrop-blur-sm">
            <Sparkles size={14} className="text-[#f5d77f]" />
            <span className="text-xs font-semibold tracking-[0.18em] text-[#fce4ec] uppercase">
              Águas Lindas de Goiás • Pérola 2
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif mb-8 leading-[1.15] font-light">
            Unhas Perfeitas, <br />
            <span className="font-serif italic font-normal bg-gradient-to-r from-[#f5d77f] via-[#c9828f] to-[#f5d77f] bg-clip-text text-transparent">
              Elegância & Naturalidade
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Especialista em alongamentos finos, blindagem e nail design sofisticado. O cuidado minucioso e o acabamento de luxo que suas mãos merecem.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-[#c9828f] via-[#d4af37] to-[#c9828f] text-[#0d080a] px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase hover:brightness-110 transition-all shadow-[0_0_25px_rgba(201,130,143,0.4)] flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Agendar Atendimento VIP
            </a>
            <a
              href="#antes-depois"
              className="w-full sm:w-auto bg-[#1b1015]/80 hover:bg-[#25151e] border border-[#c9828f]/40 text-[#fcf8f9] px-8 py-4 rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2"
            >
              Ver Antes & Depois
            </a>
          </div>

          {/* Highlights Mini Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto border-t border-[#c9828f]/20 pt-10">
            <div className="p-3">
              <p className="text-2xl font-serif font-bold text-[#f5d77f]">100%</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Higiene & Biossegurança</p>
            </div>
            <div className="p-3">
              <p className="text-2xl font-serif font-bold text-[#f5d77f]">Alta</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Durabilidade em Gel</p>
            </div>
            <div className="p-3">
              <p className="text-2xl font-serif font-bold text-[#f5d77f]">Fino</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Acabamento Natural</p>
            </div>
            <div className="p-3">
              <p className="text-2xl font-serif font-bold text-[#f5d77f]">5.0 ★</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Avaliação Clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER SLIDER */}
      <section id="antes-depois" className="py-24 bg-[#120b0e] border-y border-[#c9828f]/20 overflow-hidden relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#f5d77f] uppercase tracking-[0.2em] text-xs font-bold block mb-3">
              Comparativo Real
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Transformação das Unhas
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Arraste o cursor para comparar o resultado antes e depois do nosso procedimento de alongamento e esmaltação em tom rosê com acabamento ouro.
            </p>
          </div>

          <div className="max-w-[700px] mx-auto">
            <BeforeAfter beforeImage="/antes.jpg" afterImage="/depois.jpg" />
            <p className="text-center text-xs text-gray-400 mt-4 italic">
              * Arraste a linha central para a esquerda ou direita para ver a transformação
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#f5d77f] uppercase tracking-[0.2em] text-xs font-bold block mb-3">
              Procedimentos Exclusivos
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Especialidades do Studio
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Materiais importados de alta qualidade que preservam a integridade e saúde da sua lâmina ungueal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-[#180e14] to-[#120a0f] border border-[#c9828f]/25 hover:border-[#d4af37]/60 p-8 rounded-2xl relative group transition-all duration-300 shadow-xl"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#c9828f] to-[#d4af37] flex items-center justify-center text-black shadow-md">
                      <Icon size={22} />
                    </div>
                    <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#c9828f]/20 text-[#fce4ec] border border-[#c9828f]/30 font-semibold">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif mb-3 text-[#fcf8f9] group-hover:text-[#f5d77f] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#e6b8c2] group-hover:text-[#f5d77f] transition-colors"
                  >
                    Consultar Valores & Horários →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY FROM REAL CLIENTS */}
      <section className="py-24 bg-[#120b0e] border-y border-[#c9828f]/20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-[#f5d77f] uppercase tracking-[0.2em] text-xs font-bold block mb-3">
              Portfólio Real
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Trabalhos Recentes
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              Fotos reais dos atendimentos realizados no espaço Ls Estética das Unhas.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-square rounded-2xl overflow-hidden border border-[#c9828f]/30 bg-[#1b1015] shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                  <p className="text-xs font-medium text-[#f5d77f] leading-snug">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS MARQUEE */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#f5d77f] mb-3">
            <Star size={16} fill="#f5d77f" />
            <Star size={16} fill="#f5d77f" />
            <Star size={16} fill="#f5d77f" />
            <Star size={16} fill="#f5d77f" />
            <Star size={16} fill="#f5d77f" />
          </div>
          <h2 className="text-3xl font-serif mb-4">Depoimentos & Experiências</h2>
          <p className="text-gray-400 text-sm md:text-base">
            O carinho e a satisfação de quem confia na Ls Estética das Unhas.
          </p>
        </div>
        <MarqueeDemo />
      </section>

      {/* LOCATION / ABOUT SECTION */}
      <section className="py-24 bg-[#120b0e] border-t border-[#c9828f]/20">
        <div className="container mx-auto px-6 max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c9828f]/15 border border-[#c9828f]/30 mb-4">
              <MapPin size={12} className="text-[#f5d77f]" />
              <span className="text-[11px] font-semibold tracking-wider text-[#e6b8c2] uppercase">
                Studio & Localização
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif mb-6 text-[#fcf8f9]">
              Conforto & Bem-Estar no <br />
              <span className="bg-gradient-to-r from-[#f5d77f] to-[#c9828f] bg-clip-text text-transparent">
                Pérola 2, Águas Lindas
              </span>
            </h2>

            <p className="text-gray-300 mb-6 font-light leading-relaxed text-sm md:text-base">
              Nosso espaço foi planejado para oferecer uma experiência relaxante e acolhedora. Cada detalhe, desde o café até a esterilização rigorosa de cada instrumento em autoclave, reflete nosso compromisso com sua saúde e autoestima.
            </p>

            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#d4af37] shrink-0 mt-1" size={18} />
                <span>
                  <strong>Ls Estética das Unhas</strong><br />
                  Pérola 02, Lote 06 - Pérola 2<br />
                  Águas Lindas de Goiás - GO, 72911-250
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-[#d4af37] shrink-0" size={18} />
                <span>Atendimento com horário agendado de Terça a Sábado</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-[#d4af37] shrink-0" size={18} />
                <span>Ambiente climatizado e materiais 100% descartáveis e esterilizados</span>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={mapsRouteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#c9828f] to-[#d4af37] text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-md"
              >
                <MapPin size={16} /> Como Chegar no Maps
              </a>
              <a
                href={gmbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1b1015] border border-[#c9828f]/40 hover:border-[#f5d77f] text-white px-6 py-3 rounded-full font-medium text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                Perfil no Google Meu Negócio
              </a>
            </div>
          </div>

          {/* GOOGLE MAPS EMBED */}
          <div className="relative aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border border-[#c9828f]/30 bg-[#0d080a] shadow-2xl">
            <iframe
              src="https://maps.google.com/maps?q=-15.7285285,-48.256207&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 contrast-[1.05] brightness-95 hover:filter-none transition-all duration-700"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-[#090507] text-center border-t border-[#c9828f]/15 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-xl font-serif font-bold text-[#f5d77f] mb-2">
            LS ESTÉTICA DAS UNHAS
          </div>
          <p className="text-xs text-gray-400 mb-6 max-w-md mx-auto">
            Beleza, refinamento e cuidado em cada detalhe. Transformando olhares através da arte das unhas em Águas Lindas de Goiás.
          </p>
          <div className="flex justify-center gap-6 text-xs text-gray-400 mb-8">
            <a href={gmbUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#f5d77f] transition-colors">
              Google Perfil
            </a>
            <a href={mapsRouteUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#f5d77f] transition-colors">
              Como Chegar
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#f5d77f] transition-colors">
              WhatsApp
            </a>
          </div>
          <div className="text-[11px] text-gray-400 border-t border-white/5 pt-6">
            &copy; {new Date().getFullYear()} Ls Estética das Unhas. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar via WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-5 py-3.5 rounded-full font-bold shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:scale-105 hover:brightness-110 transition-all flex items-center gap-3 group"
      >
        <div className="bg-white/20 rounded-full p-1.5">
          <Phone size={18} />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] uppercase tracking-wider text-green-100 font-normal">Online Agora</span>
          <span className="text-xs font-bold leading-tight">Agendar no WhatsApp</span>
        </div>
      </a>
    </div>
  );
}
