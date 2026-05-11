import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    name: "Mariana S.",
    role: "Empreendedora Digital",
    text: "Em uma semana meu perfil ficou irreconhecível. Comecei a receber DMs perguntando quem cuidava do meu Instagram. Era só eu, com o pacote.",
  },
  {
    name: "Juliana C.",
    role: "Criadora de conteúdo",
    text: "Postar virou prazer. Eu não perco mais 2 horas tentando deixar um Story bonito — hoje gasto 5 minutos e fica melhor que antes.",
  },
  {
    name: "Ana Paula R.",
    role: "Designer de interiores",
    text: "Minhas clientes percebem. Falam que meu Instagram parece de uma marca grande agora. E vendi 3 projetos novos vindos do perfil.",
  },
  {
    name: "Fernanda L.",
    role: "Coach",
    text: "Pareço outra profissional. A diferença na percepção é absurda. Vale cada centavo só pelo Planner, imagina o resto.",
  },
  {
    name: "Beatriz M.",
    role: "Confeiteira",
    text: "Meus stories venderam mais bolos que meu site inteiro. As figurinhas e templates fizeram toda a diferença.",
  },
  {
    name: "Camila T.",
    role: "Esteticista",
    text: "Eu não tinha noção de design. Agora meu perfil está com cara de spa de luxo. Aumentou meu ticket médio em 30%.",
  },
];

const SocialProofSection = () => {
  return (
    <section className="bg-secondary/40 section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-7">
            <AnimatedSection>
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
                — Quem já vive a transformação
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 leading-[1.05] tracking-tight">
                +4.000 mulheres já <span className="italic text-primary">elevaram</span> seu Instagram.
              </h2>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-5 grid grid-cols-3 gap-4">
            {[
              { v: "4.120+", l: "mulheres" },
              { v: "4.9", l: "avaliação" },
              { v: "98%", l: "indicariam" },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="text-center bg-background rounded-2xl p-5 border border-border">
                  <p className="font-serif text-3xl lg:text-4xl text-primary">{s.v}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-1">{s.l}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.06}>
              <motion.div
                className="bg-background rounded-3xl p-8 border border-border h-full flex flex-col"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
              >
                <span className="font-serif italic text-5xl text-primary/30 leading-none mb-2">"</span>
                <p className="text-foreground/85 font-light leading-relaxed flex-1 text-pretty">
                  {t.text}
                </p>
                <div className="pt-6 mt-6 border-t border-border/60 flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gradient-rose flex items-center justify-center font-serif italic text-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
