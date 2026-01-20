import { motion } from "framer-motion";
import { Shield, Camera, Eye, Lightbulb } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import endoscope from "@/assets/endoscope.jpg";

// SECURITY & INDUSTRY PAGE - Industrial inspection and safety equipment
const SeguridadPage = () => {
  const products = [
    {
      image: endoscope,
      title: "Video Endoscopio TFXC0139",
      description:
        "Sistema de inspección industrial de alta precisión para tuberías, motores y espacios confinados. Sonda flexible con articulación 360°.",
      specs: [
        "Resolución: 1920x1080 Full HD",
        "Sonda: 6mm diámetro, 3m longitud",
        "Articulación: 360° bidireccional",
        "Iluminación: LED ajustable",
      ],
      whatsappMessage:
        "Hola Tecknomil, me interesa el Video Endoscopio TFXC0139 para inspección industrial.",
    },
    {
      image: endoscope,
      title: "Cámara Bodycam TF3102WHD",
      description:
        "Cámara corporal de grado policial con visión nocturna infrarroja. Ideal para seguridad privada y operaciones tácticas.",
      specs: [
        "Resolución: 1280x720 HD",
        "Visión nocturna: IR hasta 10m",
        "Batería: 12 horas continuas",
        "Almacenamiento: 64GB interno",
      ],
      whatsappMessage:
        "Hola Tecknomil, necesito información sobre la Bodycam TF3102WHD para seguridad.",
    },
    {
      image: endoscope,
      title: "Morral LED de Seguridad",
      description:
        "Morral táctico con sistema de iluminación LED integrado para operaciones nocturnas y alta visibilidad en emergencias.",
      specs: [
        "Capacidad: 25 litros",
        "LEDs: Panel posterior reflectivo",
        "Modos: Fijo, intermitente, SOS",
        "Material: Cordura 1000D",
      ],
      whatsappMessage:
        "Hola Tecknomil, quiero cotizar el Morral LED de Seguridad para operaciones nocturnas.",
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
              <ProductCard
                key={product.title}
                {...product}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SeguridadPage;
