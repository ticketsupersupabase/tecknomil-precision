import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Camera, Eye, Lightbulb, Cable, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import endoscope from "@/assets/endoscope.jpg";

// SECURITY & INDUSTRY PAGE - Industrial inspection and safety equipment
const SeguridadPage = () => {
  // CATALOG: Complete product list with detail page links
  const products = [
    {
      image: endoscope,
      title: "Video Endoscopio TF3319HLMX80",
      description: "Sistema de inspección con grabadora HD integrada. Monitor 7\" LCD y articulación 360°.",
      badge: "GRABADORA HD",
      icon: <Eye className="w-4 h-4" />,
      link: "/productos/endoscopio-tf3319",
    },
    {
      image: endoscope,
      title: "Video Endoscopio TF3309H80",
      description: "Endoscopio compacto con monitor simple. Sonda ultrafina 5.5mm para accesos reducidos.",
      badge: "COMPACTO",
      icon: <Eye className="w-4 h-4" />,
      link: "/productos/endoscopio-tf3309",
    },
    {
      image: endoscope,
      title: "Extensión TFXC0139",
      description: "Cable de extensión profesional de 10m. Compatible con serie TF, apilable hasta 80m.",
      badge: "ACCESORIO",
      icon: <Cable className="w-4 h-4" />,
      link: "/productos/extension-tfxc0139",
    },
    {
      image: endoscope,
      title: "Morral LED MTL171244",
      description: "Morral táctico con panel LED programable. Señales direccionales y control remoto.",
      badge: "VISIBILIDAD",
      icon: <Lightbulb className="w-4 h-4" />,
      link: "/productos/morral-led",
    },
    {
      image: endoscope,
      title: "Cámara Bodycam TF3102WHD",
      description: "Bodycam grado policial con visión nocturna IR y GPS integrado. 12h de batería.",
      badge: "GRADO POLICIAL",
      icon: <Camera className="w-4 h-4" />,
      link: "/productos/bodycam-tf3102",
    },
  ];

  const categories = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Inspección Industrial",
      description: "Endoscopios, boroscopios y cámaras de inspección para mantenimiento predictivo.",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Vigilancia Personal",
      description: "Bodycams, cámaras tácticas y sistemas de grabación para seguridad.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Equipamiento Táctico",
      description: "Morrales, linternas y accesorios de alta visibilidad para operaciones.",
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
              <Shield className="w-4 h-4 text-primary" />
              <span className="font-display text-xs tracking-widest text-primary">
                SEGURIDAD & INDUSTRIA
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground mb-4">
              Equipamiento Profesional
            </h1>
            <p className="text-lg text-muted-foreground">
              Herramientas de inspección y seguridad para entornos industriales 
              y operaciones de alto riesgo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="text-primary mb-4">{cat.icon}</div>
                <h3 className="font-display text-xl tracking-wide text-foreground mb-2">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground text-sm">{cat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS CATALOG */}
      <section className="section-padding bg-background-alt">
        <div className="container">
          <SectionHeader
            badge="Catálogo"
            title="Productos Destacados"
            description="Equipos de inspección y seguridad de grado profesional."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={product.link} className="block card-tech overflow-hidden group">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground">
                      {product.icon}
                      <span className="font-display text-xs tracking-wider">{product.badge}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg tracking-wide text-foreground mb-2 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wide">
                      Ver detalles
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeguridadPage;
