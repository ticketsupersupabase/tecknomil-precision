import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import droneProfesional from "@/assets/drone-profesional.png";
import logoTeknomil from "@/assets/logo-teknomil.png";

// SECTION: HERO SECTION - Main Landing Visual with Logo
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={droneProfesional}
          alt="Drone Profesional Teknomil"
          className="w-full h-full object-contain object-center opacity-40"
        />
        {/* Gradient Overlays - Dark Blue Theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

      {/* Scan Line Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* SECTION: HERO LOGO - Circular Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="inline-block relative">
              {/* SECTION: HERO LOGO - Teknomil crosshair logo with proper sizing */}
              <div className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full bg-white p-2 shadow-tech mx-auto flex items-center justify-center overflow-hidden">
                <img
                  src={logoTeknomil}
                  alt="Teknomil Logo"
                  className="w-[95%] h-[95%] object-contain"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl -z-10" />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="font-display text-xs tracking-widest text-primary">
              TECNOLOGÍA MILITAR SAS Nit. 9009197520
            </span>
          </motion.div>

          {/* Main Heading - Tecknomil highlighted */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide text-foreground leading-tight mb-6"
          >
            Soluciones Tecnológicas para un{" "}
            <span className="text-primary">Futuro Seguro</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Desarrollo, diseño y tecnología para sectores Urbano, Rural e Industrial. 
            Especialistas en seguridad aérea y sistemas de precisión.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/drones"
              className="btn-tech-primary flex items-center justify-center gap-2"
            >
              Ver División Drones
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/agua"
              className="btn-tech-outline flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              Catálogo General
            </Link>
          </motion.div>

          {/* SECTION: STATS - Solo Experiencia */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-16 pt-8 border-t border-border/50 flex justify-center"
          >
            <div className="text-center px-12">
              <div className="font-display text-3xl md:text-4xl text-primary mb-2">
                10+
              </div>
              <div className="text-sm md:text-base text-muted-foreground">
                Años de Experiencia
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Crosshair Decoration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 text-muted-foreground/50">
        <div className="w-16 h-px bg-current" />
        <div className="w-3 h-3 border border-current animate-crosshair-pulse" />
        <div className="w-16 h-px bg-current" />
      </div>
    </section>
  );
};

export default HeroSection;
