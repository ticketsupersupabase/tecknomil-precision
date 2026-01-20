import { motion } from "framer-motion";
import { Plane, ShieldAlert, Zap, Radio } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import StickyScrollSection from "@/components/StickyScrollSection";
import ProductCard from "@/components/ProductCard";
import droneHero from "@/assets/drone-hero.jpg";
import antidroneSystem from "@/assets/antidrone-system.jpg";

// DRONES PAGE - Main drone and antidrone division showcase
const DronesPage = () => {
  const stickySections = [
    {
      title: "Concepto de Drones (UAS)",
      description:
        "Plataformas autónomas de alta precisión diseñadas para misiones de vigilancia, inspección y reconocimiento. Nuestros sistemas UAS combinan tecnología de punta con robustez militar para operar en los entornos más exigentes.",
      icon: <Plane className="w-6 h-6" />,
    },
    {
      title: "Sistemas Antidrones (C-UAS)",
      description:
        "Soluciones de detección, seguimiento y neutralización de drones no autorizados. Proteja infraestructuras críticas, eventos masivos y perímetros sensibles con nuestra tecnología de contramedidas electrónicas.",
      icon: <ShieldAlert className="w-6 h-6" />,
    },
    {
      title: "Enfoque Integrado",
      description:
        "Un ecosistema aéreo completo que combina capacidades ofensivas y defensivas. Desde el despliegue de flotas de vigilancia hasta la protección contra amenazas aéreas, ofrecemos una solución 360° para su seguridad.",
      icon: <Zap className="w-6 h-6" />,
    },
  ];

  const products = [
    {
      image: droneHero,
      title: "Drone Inspector Powerline",
      description:
        "Sistema UAS de inspección industrial para líneas de transmisión y torres de energía. Cámara térmica integrada y autonomía extendida.",
      specs: [
        "Autonomía: 45 minutos",
        "Cámara: 4K + Térmica",
        "Rango: 10 km",
        "Resistencia al viento: 12 m/s",
      ],
      whatsappMessage:
        "Hola Tecknomil, me interesa el Drone Inspector Powerline para inspección de líneas eléctricas.",
    },
    {
      image: antidroneSystem,
      title: "Sistema C-UAS Táctico",
      description:
        "Plataforma de detección y neutralización de drones hostiles. Radar de 360° con jamming direccional y seguimiento automático.",
      specs: [
        "Detección: 5 km",
        "Neutralización: 2 km",
        "Bandas: GPS, WiFi, 2.4/5.8 GHz",
        "Tiempo de respuesta: <3 seg",
      ],
      whatsappMessage:
        "Hola Tecknomil, necesito información sobre el Sistema C-UAS Táctico para protección perimetral.",
    },
  ];

  return (
    <main className="pt-20">
      {/* PAGE HEADER */}
      <section className="py-16 bg-background-alt border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-6">
              <Radio className="w-4 h-4 text-primary" />
              <span className="font-display text-xs tracking-widest text-primary">
                DIVISIÓN AÉREA
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground mb-4">
              Drones & Antidrones
            </h1>
            <p className="text-lg text-muted-foreground">
              Sistemas de vigilancia aérea y contramedidas electrónicas para 
              operaciones militares, industriales y de seguridad civil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STICKY SCROLL SECTION */}
      <StickyScrollSection image={droneHero} sections={stickySections} />

      {/* PRODUCTS CATALOG */}
      <section className="section-padding bg-background">
        <div className="container">
          <SectionHeader
            badge="Catálogo"
            title="Productos Destacados"
            description="Tecnología de punta para operaciones de vigilancia y protección aérea."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {products.map((product, index) => (
              <ProductCard
                key={product.title}
                {...product}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Demo CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href="https://wa.me/573182414347?text=Hola%20Tecknomil,%20me%20gustaría%20solicitar%20una%20demo%20técnica%20de%20sus%20sistemas%20de%20drones."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech-primary inline-flex items-center gap-2"
            >
              <Plane className="w-4 h-4" />
              Solicitar Demo Técnica
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default DronesPage;
