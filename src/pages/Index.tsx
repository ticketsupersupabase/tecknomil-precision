import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Plane, Droplets, Shield, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeader from "@/components/SectionHeader";
import droneHero from "@/assets/drone-hero.jpg";
import waterGenerator from "@/assets/water-generator.jpg";
import endoscope from "@/assets/endoscope.jpg";

// HOME PAGE - Landing page for Tecknomil
const Index = () => {
  const divisions = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Drones & Antidrones",
      description:
        "Sistemas UAS y C-UAS de última generación para vigilancia, inspección y neutralización de amenazas aéreas.",
      image: droneHero,
      link: "/drones",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Generadores de Agua",
      description:
        "Tecnología Ecoloblue que extrae agua potable directamente del aire. Soluciones desde 30 hasta 10,000 litros/día.",
      image: waterGenerator,
      link: "/agua",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguridad Industrial" ,
      description:
        "Equipos de inspección, bodycams y sistemas de seguridad para entornos industriales y operaciones críticas.",
      image: endoscope,
      link: "/seguridad",
    },
  ];

  return (
    <main>
      {/* HERO SECTION */}
      <HeroSection />

      {/* DIVISIONS SECTION */}
      <section className="section-padding bg-background-alt">
        <div className="container">
          <SectionHeader
            badge="Nuestras Divisiones"
            title="Ingeniería de Precisión"
            description="Soluciones tecnológicas integrales para los sectores más exigentes. Desde la vigilancia aérea hasta la purificación del agua."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((division, index) => (
              <motion.div
                key={division.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link to={division.link} className="block card-tech overflow-hidden">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={division.image}
                      alt={division.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                    
                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 left-4 text-primary-foreground">
                      {division.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl tracking-wide text-foreground mb-3 group-hover:text-primary transition-colors">
                      {division.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {division.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wide">
                      Explorar
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED SECTION */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-6">
                <span className="w-1.5 h-1.5 bg-primary" />
                <span className="font-display text-xs tracking-widest text-primary">
                  SOBRE NOSOTROS
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-6">
                Tecnología que Protege
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                En Tecknomil desarrollamos y distribuimos soluciones tecnológicas de 
                alta precisión para los sectores de defensa, industrial y civil. Nuestro 
                compromiso es proporcionar equipos confiables y soporte técnico experto.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Distribuidores autorizados de tecnología de punta",
                  "Soporte técnico especializado 24/7",
                  "Capacitación y entrenamiento incluido",
                  "Garantía extendida en todos los productos",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/contacto" className="btn-tech-primary inline-flex items-center gap-2">
                Contactar Ahora
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-muted relative overflow-hidden">
                <img
                  src={droneHero}
                  alt="Technology"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-grid opacity-30" />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/30" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/30" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl tracking-wide text-background mb-6">
              ¿Listo para Elevar su Seguridad?
            </h2>
            <p className="text-background/70 mb-8">
              Contáctenos para una consulta personalizada. Nuestro equipo de ingenieros 
              está listo para diseñar la solución perfecta para su operación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573182414347?text=Hola%20Tecknomil,%20me%20interesa%20conocer%20sus%20soluciones."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tech bg-primary text-primary-foreground hover:shadow-tech"
              >
                WhatsApp Directo
              </a>
              <Link
                to="/contacto"
                className="btn-tech border-2 border-background/30 text-background hover:border-primary hover:text-primary"
              >
                Formulario de Contacto
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
