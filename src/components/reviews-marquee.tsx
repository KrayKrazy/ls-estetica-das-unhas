"use client";

const reviews = [
  {
    name: "Camila Rodrigues",
    text: "Atendimento impecável! Fiz meu primeiro alongamento de fibra com a Lu e durou intacto quase um mês. O acabamento fino e natural é incomparável.",
    tag: "Fibra de Vidro"
  },
  {
    name: "Juliana Mendes",
    text: "Espaço super aconchegante, higiênico e acolhedor em Águas Lindas. As decorações e nail arts são de altíssimo nível. Recomendo de olhos fechados!",
    tag: "Nail Art & Gel"
  },
  {
    name: "Patrícia Souza",
    text: "O banho de gel recuperou totalmente minhas unhas que quebravam direto. Hoje são fortes e lindas. Profissionalismo e carinho em cada detalhe.",
    tag: "Banho de Gel"
  },
  {
    name: "Fernanda Alencar",
    text: "A delicadeza e a precisão do formato são perfeitas. Já frequento há meses e não troco por nada! Sempre saio me sentindo maravilhosa.",
    tag: "Esmaltação em Gel"
  },
  {
    name: "Aline Ferreira",
    text: "Pontualidade, materiais esterilizados e café delicioso. Trabalho com excelência que valoriza a beleza da mulher. Nota 10!",
    tag: "Manutenção & Spa"
  }
];

export function MarqueeDemo() {
  return (
    <div className="relative flex overflow-x-hidden group bg-[#120b0e] py-10 border-y border-[#c9828f]/20">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...reviews, ...reviews].map((r, i) => (
          <div
            key={i}
            className="inline-block w-84 mx-4 bg-gradient-to-b from-[#1b1015] to-[#140b10] border border-[#c9828f]/25 hover:border-[#d4af37]/60 p-6 rounded-2xl whitespace-normal shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex text-[#d4af37] text-sm tracking-widest">
                ★★★★★
              </div>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-[#c9828f]/20 text-[#f5c6d0] border border-[#c9828f]/30">
                {r.tag}
              </span>
            </div>
            <p className="text-sm text-gray-200 italic mb-4 leading-relaxed">
              "{r.text}"
            </p>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#c9828f] to-[#d4af37] flex items-center justify-center text-xs font-bold text-black">
                {r.name[0]}
              </div>
              <p className="text-xs font-bold tracking-wider text-[#e6b8c2]">
                {r.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#0d080a] to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#0d080a] to-transparent z-10"></div>
    </div>
  );
}
