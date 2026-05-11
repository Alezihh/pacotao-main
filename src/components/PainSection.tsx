import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const pains = [
  { num: "01", title: "Perfil sem estética", desc: "Você posta, mas seu feed parece amador comparado às marcas que admira." },
  { num: "02", title: "Falta de criatividade", desc: "Olha a tela em branco e não sabe o que postar — ou como deixar bonito." },
  { num: "03", title: "Stories sem padrão", desc: "Cada Story parece de uma pessoa diferente. Nada se conecta visualmente." },
  { num: "04", title: "Dificuldade de postar", desc: "Demora horas para criar um Story que vale ser publicado. E desiste." },
  { num: "05", title: "Aparência amadora", desc: "Sente que seu perfil não comunica o valor real do que você oferece." },
];

const PainSection = () => {
  return (
    <section className="bg-background section-padding relative">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <AnimatedSection>
              <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-primary font-medium mb-6">
                — A realidade silenciosa
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
                Você sabe que seu Instagram <span className="italic text-primary">poderia ser</span> muito melhor.
              </h2>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-center">
            <AnimatedSection delay={0.2}>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                Você se dedica, tem conteúdo bom, mas algo invisível impede seu perfil de transmitir a elegância e o profissionalismo que você merece. E você não está sozinha.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="border-t border-border">
          {pains.map((pain, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <motion.div
                className="group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-border items-start md:items-center hover:bg-secondary/30 transition-colors duration-500 -mx-4 md:-mx-6 px-4 md:px-6 rounded-lg"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.4 }}
              >
                <div className="col-span-2 md:col-span-1 font-serif italic text-2xl md:text-3xl text-primary/70">
                  {pain.num}
                </div>
                <h3 className="col-span-10 md:col-span-4 font-serif text-xl md:text-2xl lg:text-3xl text-foreground">
                  {pain.title}
                </h3>
                <p className="col-span-12 md:col-span-7 text-muted-foreground font-light leading-relaxed md:text-right md:pl-8">
                  {pain.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <p className="font-serif italic text-2xl md:text-3xl text-foreground/85 leading-relaxed">
              "Eu queria muito ter um Instagram bonito, mas não tenho tempo, nem talento de design, nem ideia por onde começar."
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              — Provavelmente você, agora
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PainSection;
