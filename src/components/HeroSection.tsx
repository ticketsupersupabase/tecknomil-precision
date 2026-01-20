import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import droneHero from "@/assets/drone-hero.jpg";

// HERO SECTION - Main Landing Visual
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={droneHero}
          alt="Drone Technology"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
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
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-8"
          >
            <span className="w-2 h-2 bg-primary animate-pulse" />
            <span className="font-display text-xs tracking-widest text-primary">
              TECNOLOGÍA MILITAR
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide text-foreground leading-tight mb-6"
          >
            Soluciones Tecnológicas para un{" "}
            <span className="text-primary">Futuro Seguro</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
          >
            Desarrollo, diseño y tecnología para sectores Urbano, Rural e Industrial. 
            Especialistas en seguridad aérea y sistemas de precisión.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-border/50 grid grid-cols-3 gap-8"
          >
            {[
              { value: "10+", label: "Años de Experiencia" },
              { value: "500+", label: "Proyectos Entregados" },
              { value: "24/7", label: "Soporte Técnico" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="font-display text-2xl md:text-3xl text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
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
