import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Sparkles, Box, Video, LayoutTemplate, Wand2, FileText, CalendarCheck, RefreshCw, Gift } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Figurinhas Premium",
    desc: "+15.000 stickers em PNG transparente para dar identidade a cada Story.",
    benefit: "Estética profissional, pronta para colar.",
  },
  {
    icon: Box,
    title: "Figurinhas Animadas & 3D",
    desc: "Coleção exclusiva de elementos com movimento e profundidade — o tipo de visual que faz pausar o feed.",
    benefit: "Destaque imediato no meio do scroll.",
  },
  {
    icon: Video,
    title: "Banco de Vídeos Prontos",
    desc: "Centenas de vídeos curtos editáveis, em alta qualidade, prontos para Reels e Stories.",
    benefit: "Postar todos os dias sem gravar nada.",
  },
  {
    icon: LayoutTemplate,
    title: "Templates Editáveis no Canva",
    desc: "Layouts editoriais para Stories, posts, capas e destaques — basta trocar o texto.",
    benefit: "Conteúdo profissional em 2 minutos.",
  },
  {
    icon: Wand2,
    title: "Presets para Fotos & Vídeos",
    desc: "Filtros aesthetic exclusivos que transformam qualquer registro em uma imagem editorial.",
    benefit: "Feed harmônico sem esforço.",
  },
  {
    icon: FileText,
    title: "Roteiros de Stories",
    desc: "Estruturas testadas para vender, engajar e conectar — com o que postar e em que ordem.",
    benefit: "Nunca mais ficar sem o que dizer.",
  },
  {
    icon: CalendarCheck,
    title: "Planner Digital",
    desc: "Organize sua rotina de posts, ideias e calendário editorial em um só lugar.",
    benefit: "Consistência sem caos.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações Constantes",
    desc: "Novas coleções, tendências e materiais adicionados periodicamente — sem custo extra.",
    benefit: "Seu acervo cresce com você.",
  },
  {
    icon: Gift,
    title: "Materiais Extras de Apoio",
    desc: "Guias, e-books e bônus surpresa para acelerar seu posicionamento digital.",
    benefit: "Suporte completo, do primeiro Story ao último.",
  },
];

const ProductSection = () => {
  return (
    <section id="produto" className="bg-background section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7">
            <AnimatedSection>
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
                — O que você vai receber
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 leading-[1.05] tracking-tight">
                9 ativos premium reunidos em <span className="italic text-primary">um único acervo.</span>
              </h2>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <AnimatedSection delay={0.2}>
              <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
                Cada item foi curado para se conectar com os outros — formando um sistema visual coerente, profissional e 100% pronto para usar.
              </p>
            </AnimatedSection>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  className="bg-background p-8 lg:p-10 h-full flex flex-col gap-5 group cursor-default"
                  whileHover={{ backgroundColor: "hsl(var(--secondary) / 0.5)" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="size-12 rounded-2xl bg-rose/40 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-500">
                      <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <span className="font-serif italic text-sm text-muted-foreground">
                      0{i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-border/60">
                    <p className="text-xs text-primary font-medium">
                      → {item.benefit}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
