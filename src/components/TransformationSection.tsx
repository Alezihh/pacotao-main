import beforeFruit from "@/assets/before-fruit.png";
import afterFruit from "@/assets/after-fruit.jpg";
import beforeLingerie from "@/assets/before-lingerie.jpg";
import afterLingerie from "@/assets/after-lingerie.jpg";
import beforeGym from "@/assets/before-gym.png";
import afterGym from "@/assets/after-gym.jpg";
import beforeNetflix from "@/assets/before-netflix.png";
import afterNetflix from "@/assets/after-netflix.jpg";
import beforeFitness from "@/assets/before-fitness.png";
import afterFitness from "@/assets/after-fitness.jpg";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const transformations = [
  { before: beforeFruit, after: afterFruit },
  { before: beforeLingerie, after: afterLingerie },
  { before: beforeGym, after: afterGym },
  { before: beforeNetflix, after: afterNetflix },
  { before: beforeFitness, after: afterFitness },
];

const TransformationSection = () => {
  return (
    <section className="bg-gradient-soft section-padding overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
              — Antes & depois
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 mb-6 leading-[1.05] tracking-tight">
              De perfil comum a <span className="italic text-primary">perfil aesthetic.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Veja a transformação visual que acontece quando você troca o improviso por um sistema curado de elementos. A diferença é instantânea.
            </p>
          </AnimatedSection>
        </div>

        <div className="space-y-12 lg:space-y-16">
          {transformations.map((item, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
              <AnimatedSection direction="left" delay={0.1}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden bg-muted shadow-soft"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground/70 rounded-full text-[10px] tracking-[0.2em] uppercase font-medium">
                    Antes
                  </span>
                  <img src={item.before} alt="Antes" className="w-full h-auto aspect-[9/16] object-cover" />
                </motion.div>
              </AnimatedSection>
              <AnimatedSection direction="right" delay={0.2}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-elevated"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="absolute top-3 right-3 z-10 px-3 py-1 bg-foreground text-background rounded-full text-[10px] tracking-[0.2em] uppercase font-medium">
                    Depois
                  </span>
                  <img src={item.after} alt="Depois" className="w-full h-auto aspect-[9/16] object-cover" />
                </motion.div>
              </AnimatedSection>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 max-w-5xl mx-auto">
          {[
            { num: "01", title: "Percepção de valor", desc: "Seu perfil passa a comunicar autoridade desde o primeiro toque." },
            { num: "02", title: "Imagem profissional", desc: "Harmonia visual que diferencia marcas amadoras de marcas referência." },
            { num: "03", title: "Posicionamento elevado", desc: "Você atrai o público certo — quem percebe e paga pelo seu trabalho." },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <p className="font-serif italic text-3xl text-primary mb-4">{item.num}</p>
                <h3 className="font-serif text-2xl text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
