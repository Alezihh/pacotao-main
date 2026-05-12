import story1 from "@/assets/storypack/imgi_149_Hfxexv8230920.jpg";
import story2 from "@/assets/storypack/imgi_151_aHnDGE8953203.jpg";
import story3 from "@/assets/storypack/imgi_153_qQMwum8953203.jpg";
import story4 from "@/assets/storypack/imgi_155_imvFEJ8230920.jpg";
import story5 from "@/assets/storypack/imgi_157_aWwFlE8953203.jpg";
import story6 from "@/assets/storypack/imgi_161_Jgklht7885163.jpg";
import story7 from "@/assets/storypack/imgi_162_nhaXco8735475.jpg";
import story8 from "@/assets/storypack/imgi_163_nhYBFL7885163.jpg";
import story9 from "@/assets/storypack/imgi_164_ybWbCt8735475.jpg";
import story10 from "@/assets/storypack/imgi_165_oIbeGe8735475.jpg";
import story11 from "@/assets/storypack/imgi_166_YQwpar8735475.jpg";
import story12 from "@/assets/storypack/imgi_167_beHvFv8735475.jpg";
import story13 from "@/assets/storypack/imgi_168_iXvimz8735475.jpg";
import story14 from "@/assets/storypack/imgi_169_shmjib8735475.jpg";
import story15 from "@/assets/storypack/imgi_171_jIvmYs8735475.jpg";
import story16 from "@/assets/storypack/imgi_174_NbBMzi8735475.jpg";
import story17 from "@/assets/storypack/imgi_175_aFsqXf8735475.jpg";
import story18 from "@/assets/storypack/imgi_176_yBsqbJ8735475.jpg";
import AnimatedSection from "./AnimatedSection";

const stories = [
  story1, story2, story3, story4, story5, story6,
  story7, story8, story9, story10, story11, story12,
  story13, story14, story15, story16, story17, story18,
];

const storiesRow1 = stories.slice(0, 9);
const storiesRow2 = stories.slice(9, 18);

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

      </div>

      {/* carousel - edge-to-edge, compensates section-padding */}
      <div className="overflow-hidden py-4 -mx-5 md:-mx-8">
        <div className="flex flex-col gap-4">
          {/* Row 1 - moves left */}
          <div className="flex gap-4 animate-scroll-left">
            {[...storiesRow1, ...storiesRow1, ...storiesRow1].map((src, index) => (
              <div
                key={`row1-${index}`}
                className="w-36 sm:w-44 md:w-52 shrink-0 rounded-2xl overflow-hidden shadow-elevated"
              >
                <img
                  src={src}
                  alt={`Story ${index + 1}`}
                  className="w-full aspect-[9/16] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Row 2 - moves right */}
          <div className="flex gap-4 animate-scroll-right">
            {[...storiesRow2, ...storiesRow2, ...storiesRow2].map((src, index) => (
              <div
                key={`row2-${index}`}
                className="w-36 sm:w-44 md:w-52 shrink-0 rounded-2xl overflow-hidden shadow-elevated"
              >
                <img
                  src={src}
                  alt={`Story ${index + 10}`}
                  className="w-full aspect-[9/16] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-wide">
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
