import { Shield } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const GuaranteeSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-wide max-w-5xl">
        <AnimatedSection>
          <motion.div
            className="bg-gradient-rose rounded-[2.5rem] p-10 lg:p-16 border border-border/40 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-card"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
          >
            <div className="lg:col-span-3 flex justify-center">
              <motion.div
                className="size-32 lg:size-40 rounded-full bg-background flex items-center justify-center shadow-soft border border-primary/20"
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-1" strokeWidth={1.5} />
                  <p className="font-serif italic text-2xl text-foreground leading-none">7</p>
                  <p className="text-[9px] tracking-[0.2em] uppercase text-muted-foreground mt-0.5">dias</p>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-9 text-center lg:text-left">
              <p className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium mb-3">
                — Garantia incondicional
              </p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
                Seu único risco é <span className="italic text-primary">não experimentar.</span>
              </h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Você tem 7 dias de garantia incondicional. Se por qualquer motivo o Pacote Aesthetic Completo não for tudo que você esperava, basta nos enviar uma mensagem e devolvemos 100% do seu investimento. Sem perguntas. Sem burocracia.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GuaranteeSection;
