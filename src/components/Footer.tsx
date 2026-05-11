import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-14">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <p className="font-serif italic text-2xl text-foreground">
              Aesthetic <span className="text-primary">·</span> Studio
            </p>
            <p className="text-xs text-muted-foreground mt-1 tracking-[0.15em] uppercase">
              Pacote Aesthetic Completo
            </p>
          </div>
          <p className="text-sm text-muted-foreground font-light leading-relaxed text-center max-w-sm mx-auto">
            Um ecossistema premium para mulheres que valorizam estética, identidade e profissionalismo no Instagram.
          </p>
          <div className="flex items-center justify-center md:justify-end gap-2 text-xs text-muted-foreground">
            <span>Feito com</span>
            <Heart className="w-3 h-3 text-primary fill-primary" />
            <span>para você</span>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border/50 text-center text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Aesthetic Studio · Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
