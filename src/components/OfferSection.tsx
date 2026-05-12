import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, Lock } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const allItems = [
  "+15.000 Figurinhas Estéticas Premium",
  "Coleção de Figurinhas Animadas & 3D",
  "Banco completo de Vídeos Prontos",
  "Templates editáveis no Canva",
  "Pack de Presets para fotos & vídeos",
  "Roteiros prontos de Stories",
  "Planner Digital de rotina e conteúdo",
  "Atualizações constantes — para sempre",
  "Materiais extras de apoio e bônus surpresa",
  "Tutoriais completos de uso",
];

const OfferSection = () => {
  return (
    <section id="oferta" className="bg-gradient-hero section-padding relative overflow-hidden">
      <motion.div
        className="absolute -top-20 right-0 w-[500px] h-[500px] bg-rose/30 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-wide relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <AnimatedSection>
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
              — Sua oportunidade
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 leading-[1.05] tracking-tight">
              Pacote Aesthetic <span className="italic text-primary">Completo</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-muted-foreground font-light text-lg">
              Escolha o plano ideal para você. Mesmo acervo completo, dois jeitos de acessar.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-xs font-medium text-primary tracking-wide">
                🔒 Acesso Vitalício por apenas R$ 89,90 — sem mensalidade, sem renovação
              </span>
            </div>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Plano Mensal */}
          <AnimatedSection delay={0.2}>
            <motion.div
              className="bg-background rounded-[2.5rem] shadow-soft border border-border overflow-hidden h-full flex flex-col p-8 lg:p-10"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium mb-2">
                  Plano Mensal
                </p>
                <h3 className="font-serif text-3xl text-foreground">Comece agora</h3>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl text-foreground">R$ 19</span>
                  <span className="text-2xl text-foreground">,90</span>
                  <span className="text-sm text-muted-foreground">/mês</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2 font-light">
                  Cancele quando quiser.
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {allItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-rose/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-foreground/85 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => window.open("https://checkout.ticto.app/OB20B47EE", "_blank")}
                  variant="outline"
                  className="w-full rounded-full py-6 text-sm uppercase tracking-[0.15em] font-medium border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                  Assinar Mensal
                </Button>
              </motion.div>

              <div className="flex items-center justify-center gap-5 text-[10px] tracking-[0.15em] uppercase text-muted-foreground mt-4">
                <span className="flex items-center gap-1.5"><Lock className="w-3 h-3" />Seguro</span>
                <span className="flex items-center gap-1.5"><Zap className="w-3 h-3" />Imediato</span>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Acesso Vitalício — destaque */}
          <AnimatedSection delay={0.3}>
            <div className="relative lg:scale-[1.05] lg:z-10 transition-transform duration-300">
              {/* Pulsing border glow layer */}
              <div className="absolute -inset-[2px] rounded-[2.6rem] bg-primary animate-border-glow pointer-events-none" />
              <motion.div
              className="relative bg-foreground text-background rounded-[2.5rem] shadow-elevated overflow-hidden h-full flex flex-col p-8 lg:p-10"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
            >
              <div className="absolute top-5 right-5 px-3 py-1 bg-primary text-primary-foreground rounded-full text-[10px] tracking-[0.15em] uppercase font-medium">
                Melhor oferta
              </div>

              <div className="mb-4">
                <p className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium mb-2">
                  Acesso Vitalício
                </p>
                <h3 className="font-serif text-3xl">Pague uma vez,<br />acesse para sempre.</h3>
              </div>

              {/* Destaque sem mensalidade */}
              <div className="mb-5 flex items-center gap-2 bg-primary/15 border border-primary/30 rounded-2xl px-4 py-3">
                <Shield className="w-4 h-4 text-primary shrink-0" />
                <p className="text-sm text-background/90 font-medium leading-snug">
                  Sem mensalidade. Sem renovação. <span className="text-primary">Apenas R$ 89,90 uma única vez.</span>
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-5xl">R$ 89</span>
                  <span className="text-2xl">,90</span>
                </div>
                <p className="text-sm text-background/60 mt-1 font-light">
                  Pagamento único — acesso vitalício a todos os entregáveis.
                </p>
              </div>

              <ul className="space-y-2.5 mb-8 flex-1">
                {allItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="size-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-background/90 font-light">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  onClick={() => window.open("https://checkout.ticto.app/O5515C365", "_blank")}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 text-sm uppercase tracking-[0.15em] font-medium shadow-glow"
                >
                  Quero Acesso Vitalício
                </Button>
              </motion.div>

              <div className="flex items-center justify-center gap-5 text-[10px] tracking-[0.15em] uppercase text-background/60 mt-4">
                <span className="flex items-center gap-1.5"><Lock className="w-3 h-3" />Seguro</span>
                <span className="flex items-center gap-1.5"><Zap className="w-3 h-3" />Imediato</span>
                <span className="flex items-center gap-1.5"><Shield className="w-3 h-3" />Garantido</span>
              </div>
            </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
