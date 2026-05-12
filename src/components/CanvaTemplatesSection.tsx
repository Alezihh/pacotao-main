import AnimatedSection from "./AnimatedSection";

const modules = import.meta.glob("@/assets/canva-templates/*.png", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const templates = Object.values(modules);
const row1 = templates.slice(0, Math.ceil(templates.length / 2));
const row2 = templates.slice(Math.ceil(templates.length / 2));

const CanvaTemplatesSection = () => {
  return (
    <section className="bg-background section-padding overflow-hidden">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
              — Templates editáveis
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 mb-6 leading-[1.05] tracking-tight">
              Conteúdo profissional em <span className="italic text-primary">minutos no Canva.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Layouts editoriais prontos para Stories, posts e destaques — basta trocar o texto e publicar.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* carousel edge-to-edge */}
      <div className="overflow-hidden py-4 -mx-5 md:-mx-8">
        <div className="flex flex-col gap-4">
          {/* Row 1 - moves left */}
          <div className="flex gap-4 animate-scroll-left">
            {[...row1, ...row1, ...row1].map((src, i) => (
              <div
                key={`r1-${i}`}
                className="w-44 sm:w-52 md:w-60 shrink-0 rounded-2xl overflow-hidden shadow-soft border border-border/40"
              >
                <img
                  src={src}
                  alt={`Template ${i + 1}`}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - moves right */}
          <div className="flex gap-4 animate-scroll-right">
            {[...row2, ...row2, ...row2].map((src, i) => (
              <div
                key={`r2-${i}`}
                className="w-44 sm:w-52 md:w-60 shrink-0 rounded-2xl overflow-hidden shadow-soft border border-border/40"
              >
                <img
                  src={src}
                  alt={`Template ${i + 26}`}
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CanvaTemplatesSection;
