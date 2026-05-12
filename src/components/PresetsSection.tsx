import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

import p38 from "@/assets/presets/imgi_38_c71f28_fef6ba5964b944cbb1aa88eaadc9d2d9~mv2.jpg";
import p39 from "@/assets/presets/imgi_39_c71f28_a1fa1757de2a4db2bd03afff560d61bd~mv2.jpg";
import p40 from "@/assets/presets/imgi_40_c71f28_688c1b48354344bdb73cc14f5ba83882~mv2.jpg";
import p41 from "@/assets/presets/imgi_41_c71f28_6da29ac5a5f14f2689baee6cccc6710b~mv2.jpg";
import p42 from "@/assets/presets/imgi_42_c71f28_9398935a5ae74dc1a93e2af4e925c46d~mv2.jpg";
import p43 from "@/assets/presets/imgi_43_c71f28_ebb4a44bc7d54e2aacc3665787f7f86d~mv2.jpg";
import p44 from "@/assets/presets/imgi_44_c71f28_8188fabe108d4232bb593ec824b8e23f~mv2.jpg";
import p45 from "@/assets/presets/imgi_45_c71f28_e237edb2e1a14292828ab658535c8e37~mv2.jpg";
import p46 from "@/assets/presets/imgi_46_c71f28_e975ae739acb4c8e961d76591a6aa10f~mv2.jpg";
import p47 from "@/assets/presets/imgi_47_c71f28_9bf6a683e13a4d4c87315058c05e1f4b~mv2.jpg";
import p48 from "@/assets/presets/imgi_48_c71f28_13daf2cd053a40248e0652625573cb40~mv2.jpg";
import p49 from "@/assets/presets/imgi_49_c71f28_a2f802bd658a4bb29d6311134f124a59~mv2.jpg";
import p52 from "@/assets/presets/imgi_52_c71f28_7c57f30e33c04234adcc885578062cb8~mv2.jpg";
import p53 from "@/assets/presets/imgi_53_c71f28_cfe520c57e514a0093477438753c6ce5~mv2.jpg";
import p54 from "@/assets/presets/imgi_54_c71f28_fca687257be548c193e7d4922b10e5d6~mv2.jpg";
import p55 from "@/assets/presets/imgi_55_c71f28_df5367fbfeb44c0bb6a19119e82a423f~mv2.jpg";
import p56 from "@/assets/presets/imgi_56_c71f28_6646b8edb60646d5b2508f212311508a~mv2.jpg";
import p57 from "@/assets/presets/imgi_57_c71f28_e77d8460805846dbbeed406f99ff4a9b~mv2.jpg";

const presets = [
  { name: "Studio", before: p38, after: p39 },
  { name: "Travel", before: p40, after: p41 },
  { name: "Sweet", before: p42, after: p43 },
  { name: "Clean", before: p44, after: p45 },
  { name: "Workflow", before: p46, after: p47 },
  { name: "Honey", before: p48, after: p49 },
  { name: "Matte", before: p52, after: p53 },
  { name: "Moody", before: p54, after: p55 },
  { name: "Vintage", before: p56, after: p57 },
];

interface PresetCardProps {
  name: string;
  before: string;
  after: string;
}

const PresetCard = ({ name, before, after }: PresetCardProps) => {
  const [pos, setPos] = useState(50);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-medium text-center">
        {name}
      </p>
      <div className="relative overflow-hidden rounded-2xl aspect-[2/3] select-none shadow-elevated group">
        {/* After image (base) */}
        <img
          src={after}
          alt={`${name} depois`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before image clipped from right */}
        <img
          src={before}
          alt={`${name} antes`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          draggable={false}
        />

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_6px_rgba(0,0,0,0.5)] z-10 pointer-events-none"
          style={{ left: `${pos}%` }}
        />

        {/* Handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 pointer-events-none size-8 rounded-full bg-white shadow-lg flex items-center justify-center"
          style={{ left: `${pos}%` }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5 8H11M5 8L3 6M5 8L3 10M11 8L13 6M11 8L13 10" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Before / Depois labels */}
        <span className="absolute top-2 left-2 text-[9px] uppercase tracking-widest text-white font-medium bg-black/30 px-1.5 py-0.5 rounded-full pointer-events-none z-10">
          Antes
        </span>
        <span className="absolute top-2 right-2 text-[9px] uppercase tracking-widest text-white font-medium bg-black/30 px-1.5 py-0.5 rounded-full pointer-events-none z-10">
          Depois
        </span>

        {/* Invisible range input for drag interaction */}
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        />
      </div>
    </div>
  );
};

const PresetsSection = () => {
  return (
    <section className="bg-background section-padding">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
              — Presets Lightroom
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mt-6 mb-6 leading-[1.05] tracking-tight">
              Feed editorial com <span className="italic text-primary">um clique.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Filtros exclusivos que transformam qualquer foto em imagem de revista — arraste para ver a diferença.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {presets.map((preset, i) => (
            <AnimatedSection key={preset.name} delay={i * 0.05}>
              <PresetCard {...preset} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresetsSection;
