import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const removed = [
  "pensar no que postar todos os dias",
  "criar conteúdo do zero, sem inspiração",
  "perder horas tentando deixar bonito",
  "investir em vários apps e cursos diferentes",
];

const included = [
  "estética profissional, pronta para usar",
  "consistência visual em todos os Stories",
  "uma rotina simples e organizada",
  "tudo em um único acervo, para sempre",
];

const SolutionSection = () => {
  return (
    <section className="bg-secondary/60 section-padding relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose/30 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
              — A solução completa
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 mb-6 leading-[1.05] tracking-tight">
              Conheça o <span className="italic text-primary">Pacote Aesthetic Completo</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Não é apenas um pack de figurinhas. É um ecossistema completo, pensado para que você tenha — em um único lugar — tudo o que precisa para transformar seu Instagram em uma vitrine profissional, elegante e desejável.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
          <AnimatedSection direction="left">
            <motion.div
              className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-border h-full"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Você não precisa mais
              </p>
              <ul className="space-y-4">
                {removed.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-foreground/70 font-light">
                    <span className="font-serif italic text-2xl text-muted-foreground leading-none mt-1">×</span>
                    <span className="line-through decoration-muted-foreground/40">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <motion.div
              className="bg-foreground text-background rounded-3xl p-8 lg:p-10 shadow-elevated h-full"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-[10px] tracking-[0.3em] uppercase text-primary mb-6">
                Você passa a ter
              </p>
              <ul className="space-y-4">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-background/90 font-light">
                    <Check className="w-4 h-4 text-primary mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
