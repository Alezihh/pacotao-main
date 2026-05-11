import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Sparkles, BookOpen, Image as ImageIcon, Layers } from "lucide-react";

const bonuses = [
  {
    num: "01",
    icon: Sparkles,
    title: "Atualizações para sempre",
    desc: "Toda nova coleção e tendência adicionada ao acervo é sua, automaticamente. Sem custo adicional.",
    value: "R$ 297",
  },
  {
    num: "02",
    icon: BookOpen,
    title: "Biblioteca de Fontes Premium",
    desc: "Acesso a fontes exclusivas + aula de criação para personalizar suas figurinhas como ninguém.",
    value: "R$ 97",
  },
  {
    num: "03",
    icon: ImageIcon,
    title: "+100 Fundos Premium",
    desc: "Backgrounds profissionais para Stories e Reels que combinam com qualquer marca.",
    value: "R$ 67",
  },
  {
    num: "04",
    icon: Layers,
    title: "Coleção de Figurinhas 3D",
    desc: "O tipo de visual que faz seguidores pararem o scroll e perguntarem como você fez.",
    value: "R$ 47",
  },
];

const BonusSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
              — Bônus exclusivos
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 mb-6 leading-[1.05] tracking-tight">
              E ainda <span className="italic text-primary">+R$ 508 em bônus</span> para garantir seu sucesso.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-muted-foreground font-light text-lg leading-relaxed">
              Para que você não tenha nenhuma desculpa para não transformar seu Instagram hoje.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {bonuses.map((b, i) => {
            const Icon = b.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <motion.div
                  className="bg-secondary/40 rounded-3xl p-8 border border-border h-full flex flex-col"
                  whileHover={{ y: -8, backgroundColor: "hsl(var(--rose) / 0.3)" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-2xl bg-background flex items-center justify-center border border-border">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="font-serif italic text-primary">{b.num}</span>
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-2 leading-tight">{b.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 flex-1">{b.desc}</p>
                  <div className="pt-4 border-t border-border/60">
                    <p className="text-xs text-muted-foreground">
                      Valor: <span className="line-through">{b.value}</span>
                    </p>
                    <p className="text-sm text-primary font-medium">Incluso gratuitamente</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
