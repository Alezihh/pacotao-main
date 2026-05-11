import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const FinalCTASection = () => {
  const scrollToOffer = () =>
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="bg-foreground text-background section-padding relative overflow-hidden">
      <motion.div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-rose/20 rounded-full blur-[150px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="container-wide max-w-4xl text-center relative z-10">
        <AnimatedSection>
          <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
            — A escolha é sua
          </span>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl mt-8 mb-8 leading-[1.05] tracking-tight">
            Seu perfil não precisa continuar com <span className="italic text-primary">aparência comum.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-lg md:text-xl text-background/70 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Em segundos você pode ter acesso a tudo que precisa para transformar seu Instagram em uma vitrine que comunica exatamente quem você é — e quanto vale.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <Button
              onClick={scrollToOffer}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-7 rounded-full text-sm tracking-[0.2em] uppercase font-medium shadow-glow"
            >
              Quero meu Pacote Completo
            </Button>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="mt-8 text-xs tracking-[0.2em] uppercase text-background/50">
            Acesso imediato · Garantia de 7 dias · Compra segura
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FinalCTASection;
