import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import logoTecknomil from "@/assets/logo-tecknomil.jpeg";

// FOOTER COMPONENT - Corporate Clean Tech
const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <img
              src={logoTecknomil}
              alt="Tecknomil"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm leading-relaxed mt-4">
              Desarrollo, diseño y tecnología para sectores Urbano, Rural e Industrial. Soluciones de seguridad aérea y tecnología de precisión.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm tracking-wider mb-6 text-primary">
              NAVEGACIÓN
            </h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-background/70 hover:text-primary transition-colors text-sm">
                Inicio
              </Link>
              <Link to="/drones" className="block text-background/70 hover:text-primary transition-colors text-sm">
                Drones y Antidrones
              </Link>
              <Link to="/agua" className="block text-background/70 hover:text-primary transition-colors text-sm">
                Generadores de Agua
              </Link>
              <Link to="/seguridad" className="block text-background/70 hover:text-primary transition-colors text-sm">
                Seguridad & Industria
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm tracking-wider mb-6 text-primary">
              CONTACTO
            </h4>
            <div className="space-y-4">
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="tel:+573182414347" 
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  +57 318 241 4347
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a 
                  href="contratamozt@mozt.com" 
                  className="text-background/70 hover:text-primary transition-colors text-sm"
                >
                  contratamozt@mozt.com
                </a>
              </div>
            </div>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-display text-sm tracking-wider mb-6 text-primary">
              SECTORES
            </h4>
            <div className="space-y-3">
              <span className="block text-background/70 text-sm">Militar & Defensa</span>
              <span className="block text-background/70 text-sm">Industrial</span>
              <span className="block text-background/70 text-sm">Civil & Urbano</span>
              <span className="block text-background/70 text-sm">Emergencias</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2026 Tecknomil S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1 text-background/50 text-sm">
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="ml-2">Ingeniería de Precisión</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
