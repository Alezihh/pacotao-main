import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    q: "Como recebo o acesso após a compra?",
    a: "Imediatamente. Assim que o pagamento é confirmado (cartão na hora, Pix em segundos), você recebe um e-mail com o link de acesso ao pacote completo e instruções passo a passo.",
  },
  {
    q: "Onde fica armazenado o pacote?",
    a: "Tudo fica em uma área de membros online, acessível 24h pelo celular ou computador. Você baixa quantas vezes quiser, no seu ritmo, sem prazo de expiração.",
  },
  {
    q: "Funciona para iniciantes? Não entendo nada de design.",
    a: "Sim, foi feito exatamente para isso. Tudo já vem pronto — figurinhas, templates, vídeos, presets. Você só escolhe, aplica e posta. Em 5 minutos seu Story está profissional.",
  },
  {
    q: "Vou receber novas atualizações?",
    a: "Sim, e sem custo adicional. Toda nova coleção, tendência ou material adicionado ao acervo aparece automaticamente na sua área. Para sempre.",
  },
  {
    q: "É compatível com iPhone e Android?",
    a: "Funciona em qualquer celular, tablet ou computador. Os templates abrem no Canva (gratuito), as figurinhas em qualquer editor e os presets nos apps mais usados.",
  },
  {
    q: "Tem suporte se eu tiver dúvidas?",
    a: "Sim. Você tem suporte direto por e-mail e WhatsApp para qualquer dúvida sobre uso, instalação ou aplicação dos materiais.",
  },
  {
    q: "Posso pedir reembolso?",
    a: "Sim. Você tem 7 dias de garantia incondicional. Se não gostar por qualquer motivo, devolvemos 100% do valor. Sem perguntas.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-secondary/40 section-padding">
      <div className="container-wide max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-5">
            <AnimatedSection>
              <span className="text-[10px] tracking-[0.3em] uppercase text-primary font-medium">
                — Perguntas frequentes
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl mt-6 leading-[1.05] tracking-tight">
                Tudo o que você precisa <span className="italic text-primary">saber.</span>
              </h2>
            </AnimatedSection>
          </div>
          <div className="lg:col-span-7">
            <AnimatedSection delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-left font-serif text-lg md:text-xl text-foreground hover:text-primary hover:no-underline py-6">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-light leading-relaxed pb-6">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
