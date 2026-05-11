import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      {/* Top minimal nav strip */}
      <div className="w-full border-b border-border/40">
        <div className="container-wide flex items-center justify-between py-5 px-6 md:px-8">
          <span className="font-serif italic text-xl md:text-2xl text-foreground tracking-wide">
            Aesthetic <span className="text-primary">·</span> Studio
          </span>
          <span className="hidden md:inline text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Coleção 2026
          </span>
        </div>
      </div>

      {/* Ambient light */}
      <motion.div
        className="absolute -top-40 -right-32 w-[700px] h-[700px] bg-rose/40 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-32 w-[600px] h-[600px] bg-nude/60 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-wide section-padding grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Content */}
        <motion.div
          className="lg:col-span-6 flex flex-col items-start gap-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose/30 text-foreground/80 text-[10px] md:text-[11px] font-medium tracking-[0.25em] uppercase rounded-full border border-primary/20 backdrop-blur-sm">
            <span className="size-1 rounded-full bg-primary" />
            Pacote Aesthetic Completo
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[1.05] text-balance text-foreground">
            Tudo o que você precisa para um Instagram{" "}
            <span className="italic text-primary block mt-2">elegante,</span>
            profissional e irresistível.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-[46ch] font-light leading-relaxed text-pretty">
            Um ecossistema completo de figurinhas, templates, vídeos prontos, presets e planner — tudo curado para transformar seu perfil em uma vitrine de alto valor. Sem precisar criar nada do zero.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 pt-2 w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={scrollToOffer}
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 rounded-full text-sm tracking-[0.15em] uppercase font-medium shadow-elevated w-full sm:w-auto"
              >
                Garantir meu acesso
              </Button>
            </motion.div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="size-9 rounded-full border-2 border-background bg-nude" />
                <div className="size-9 rounded-full border-2 border-background bg-rose" />
                <div className="size-9 rounded-full border-2 border-background bg-primary/70 flex items-center justify-center text-[9px] text-primary-foreground font-medium">
                  +4k
                </div>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-medium text-foreground">+4.120 mulheres</span>
                <span className="text-xs text-muted-foreground">já transformaram seu perfil</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Floating mockups */}
        <motion.div
          className="lg:col-span-6 relative h-[480px] sm:h-[560px] lg:h-[640px] w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Back muted mockup */}
          <motion.div
            className="absolute right-[35%] top-12 w-[200px] sm:w-[240px] aspect-[9/16] bg-rose rounded-[2rem] shadow-elevated overflow-hidden -rotate-6 opacity-80"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-nude/30 to-transparent" />
            <div className="absolute bottom-6 left-5 right-5">
              <p className="font-serif italic text-2xl text-foreground/80">Daily</p>
              <div className="w-8 h-px bg-foreground/30 mt-2" />
            </div>
          </motion.div>

          {/* Front hero mockup */}
          <motion.div
            className="absolute right-2 sm:right-8 top-2 w-[260px] sm:w-[320px] lg:w-[360px] aspect-[9/16] rounded-[2.5rem] bg-foreground/5 shadow-elevated overflow-hidden rotate-3"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            whileHover={{ rotate: 0, scale: 1.02 }}
          >
            <img
              src={heroMockup}
              alt="Preview do Pacote Aesthetic Completo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/30 pointer-events-none" />
            {/* Story progress bars */}
            <div className="absolute top-4 left-4 right-4 flex gap-1">
              <div className="h-0.5 flex-1 bg-background/90 rounded-full" />
              <div className="h-0.5 flex-1 bg-background/30 rounded-full" />
              <div className="h-0.5 flex-1 bg-background/30 rounded-full" />
            </div>
          </motion.div>

          {/* Floating tag */}
          <motion.div
            className="absolute left-4 bottom-12 bg-background/80 backdrop-blur-xl border border-border rounded-2xl px-4 py-3 shadow-card hidden sm:flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <div className="size-10 rounded-full bg-gradient-rose flex items-center justify-center font-serif text-foreground italic">A</div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Acesso vitalício</p>
              <p className="text-sm font-medium text-foreground">+15.000 ativos prontos</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
