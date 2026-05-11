import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const benefits = [
  { word: "Elegância", desc: "Cada Story passa a respirar sofisticação." },
  { word: "Profissionalismo", desc: "Seu perfil comunica autoridade real." },
  { word: "Autoridade", desc: "Marcas e clientes percebem você como referência." },
  { word: "Praticidade", desc: "Tudo curado, organizado e pronto para usar." },
  { word: "Consistência", desc: "Identidade visual coerente em todos os posts." },
  { word: "Facilidade", desc: "Sem cursos, sem complicação. Só colar e postar." },
];

const BenefitsSection = () => {
  return (
    <section className="bg-secondary/40 section-padding overflow-hidden">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <AnimatedSection>
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
                — O que muda na sua vida
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 leading-[1.05] tracking-tight">
                Seis transformações que <span className="italic text-primary">acontecem juntas.</span>
              </h2>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2}>
              <p className="text-muted-foreground font-light leading-relaxed">
                Não é só um perfil mais bonito. É uma nova forma do mundo enxergar você.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <motion.div
                className="bg-background rounded-3xl p-8 lg:p-10 border border-border h-full group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-serif italic text-sm text-muted-foreground mb-2">+ Mais</p>
                <h3 className="font-serif text-4xl lg:text-5xl text-foreground mb-4 group-hover:text-primary transition-colors duration-500">
                  {b.word}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
