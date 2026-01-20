import { motion } from "framer-motion";
import { Droplets, Wind, Gauge, ThermometerSun } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import waterGenerator from "@/assets/water-generator.jpg";

// WATER GENERATORS PAGE - Ecoloblue atmospheric water generators
const AguaPage = () => {
  const howItWorks = [
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Captación",
      description: "El aire húmedo es aspirado a través de filtros de alta eficiencia.",
    },
    {
      icon: <ThermometerSun className="w-8 h-8" />,
      title: "Condensación",
      description: "El aire se enfría hasta el punto de rocío, condensando la humedad.",
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Filtración",
      description: "El agua pasa por múltiples filtros y tratamiento UV.",
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Agua Pura",
      description: "Agua potable lista para consumo directo o almacenamiento.",
    },
  ];

  const products = [
    {
      image: waterGenerator,
      title: "Ecoloblue 30",
      description:
        "Generador compacto ideal para hogares y oficinas pequeñas. Diseño elegante que se integra perfectamente en cualquier espacio.",
      specs: [
        "Capacidad: 30 Litros/día",
        "Consumo: 350W",
        "Humedad mínima: 35%",
        "Dimensiones: 40x40x90 cm",
      ],
      whatsappMessage:
        "Hola Tecknomil, me interesa el Ecoloblue 30 para uso doméstico.",
    },
    {
      image: waterGenerator,
      title: "Ecoloblue 1000",
      description:
        "Solución industrial para empresas, hoteles y comunidades. Alto rendimiento con bajo consumo energético.",
      specs: [
        "Capacidad: 1,000 Litros/día",
        "Consumo: 4.5 kW",
        "Humedad mínima: 30%",
        "Montaje: Exterior/Interior",
      ],
      whatsappMessage:
        "Hola Tecknomil, necesito información sobre el Ecoloblue 1000 para uso industrial.",
    },
    {
      image: waterGenerator,
      title: "Ecoloblue 10000",
      description:
        "Sistema de emergencia y aplicación militar. Capacidad masiva para operaciones humanitarias y bases remotas.",
      specs: [
        "Capacidad: 10,000 Litros/día",
        "Autonomía: Energía solar compatible",
        "Transportable: Contenedor estándar",
        "Uso: Militar/Emergencias",
      ],
      whatsappMessage:
        "Hola Tecknomil, requiero cotización del Ecoloblue 10000 para operaciones de emergencia.",
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
              <Droplets className="w-4 h-4 text-primary" />
              <span className="font-display text-xs tracking-widest text-primary">
                ECOLOBLUE
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground mb-4">
              Generadores de Agua
            </h1>
            <p className="text-lg text-muted-foreground">
              Tecnología que extrae agua potable directamente del aire. 
              Soluciones sostenibles desde 30 hasta 10,000 litros diarios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-padding bg-background">
        <div className="container">
          <SectionHeader
            badge="Tecnología"
            title="Agua Potable del Aire"
            description="Nuestros generadores atmosféricos convierten la humedad del ambiente en agua pura y segura para el consumo."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary mb-6 relative">
                  {step.icon}
                  {/* Connector Line */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute left-full top-1/2 w-full h-px bg-border -translate-y-1/2" />
                  )}
                </div>
                <div className="font-display text-sm tracking-wider text-primary mb-2">
                  PASO {index + 1}
                </div>
                <h3 className="font-display text-xl tracking-wide text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
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
            title="Línea Ecoloblue"
            description="Desde soluciones domésticas hasta sistemas industriales de alto rendimiento."
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

      {/* BENEFITS */}
      <section className="py-20 bg-foreground">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: "99.9%", label: "Pureza del Agua" },
              { value: "0", label: "Residuos Plásticos" },
              { value: "∞", label: "Fuente Renovable" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-display text-5xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-background/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AguaPage;
