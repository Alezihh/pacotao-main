import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const personas = [
  {
    title: "Criadoras de Conteúdo",
    desc: "Que querem padronizar a estética e crescer com mais profissionalismo.",
  },
  {
    title: "Empreendedoras Digitais",
    desc: "Que precisam que o Instagram comunique o real valor do que vendem.",
  },
  {
    title: "Mulheres em Crescimento",
    desc: "Que buscam um perfil bonito, organizado e que reflete sua personalidade.",
  },
  {
    title: "Vendedoras de Serviços",
    desc: "Que sabem que estética é credibilidade — e que credibilidade vende.",
  },
  {
    title: "Quem não tem tempo",
    desc: "Para criar conteúdo do zero, mas não abre mão de qualidade visual.",
  },
  {
    title: "Quem ama elegância",
    desc: "E quer que cada Story respire sofisticação, não improviso.",
  },
];

const ForWhoSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
              — Para quem é
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 leading-[1.05] tracking-tight">
              Feito para mulheres que querem <span className="italic text-primary">ser percebidas</span> de outra forma.
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border max-w-6xl mx-auto">
          {personas.map((p, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <motion.div
                className="bg-background p-8 h-full flex flex-col gap-3"
                whileHover={{ backgroundColor: "hsl(var(--rose) / 0.25)" }}
                transition={{ duration: 0.4 }}
              >
                <p className="font-serif italic text-sm text-primary">0{i + 1}</p>
                <h3 className="font-serif text-2xl text-foreground leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
