import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Droplets, CheckCircle, MessageCircle } from "lucide-react";
import waterGenerator from "@/assets/water-generator.jpg";

// PRODUCT DETAIL: Ecoloblue 30 (Hogar/Oficina)
const Ecoloblue30Page = () => {
  const specs = [
    { label: "Modelo", value: "Ecoloblue 30" },
    { label: "Segmento", value: "Hogar / Oficina" },
    { label: "Producción", value: "Hasta 30 Litros/día" },
    { label: "Consumo", value: "350W promedio" },
    { label: "Humedad Mínima", value: "35% RH" },
    { label: "Temperatura", value: "15°C - 40°C óptima" },
    { label: "Dimensiones", value: "40 x 40 x 90 cm" },
    { label: "Peso", value: "35 kg" },
    { label: "Tanque", value: "12 litros interno" },
    { label: "Filtración", value: "7 etapas + UV" },
    { label: "Dispensador", value: "Agua fría y ambiente" },
    { label: "Ruido", value: "< 45 dB" },
  ];

  const features = [
    "Diseño elegante que se integra en cualquier espacio",
    "Sistema de filtración de 7 etapas con UV",
    "Dispensador de agua fría y temperatura ambiente",
    "Pantalla táctil con indicadores de calidad",
    "Modo eco para ahorro energético nocturno",
    "Alertas de mantenimiento de filtros",
  ];

  const whatsappLink =
    "https://wa.me/573182414347?text=Hola%20Tecknomil,%20me%20interesa%20el%20Ecoloblue%2030%20para%20uso%20doméstico.";

  return (
    <main className="pt-20 min-h-screen">
      <div className="container py-6">
        <Link
          to="/agua"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-display text-sm tracking-wide">Volver a Generadores de Agua</span>
        </Link>
      </div>

      <section className="container pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square bg-card border border-border overflow-hidden">
              <img
                src={waterGenerator}
                alt="Ecoloblue 30"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground">
              <Droplets className="w-4 h-4" />
              <span className="font-display text-xs tracking-wider">HOGAR</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-4">
              <span className="font-display text-xs tracking-widest text-primary">
                ECOLOBLUE
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
              Ecoloblue 30
            </h1>
            <p className="text-xl text-primary font-display mb-4">30 Litros/día</p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Generador de agua atmosférica compacto diseñado para hogares y oficinas. 
              Extrae hasta 30 litros de agua pura del aire diariamente con un sistema 
              de filtración de 7 etapas y tratamiento UV. Diseño elegante y silencioso 
              que se integra perfectamente en cualquier espacio.
            </p>

            <div className="mb-8">
              <h3 className="font-display text-lg tracking-wide text-foreground mb-4">
                Características Destacadas
              </h3>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech-primary inline-flex items-center gap-3 mb-8"
            >
              <MessageCircle className="w-5 h-5" />
              Cotizar por WhatsApp
            </a>

            <div className="border border-border">
              <div className="p-4 bg-muted/30 border-b border-border">
                <h3 className="font-display text-sm tracking-wider text-primary">
                  ESPECIFICACIONES TÉCNICAS
                </h3>
              </div>
              <div className="divide-y divide-border">
                {specs.map((spec, i) => (
                  <div key={i} className="flex">
                    <div className="w-1/3 p-3 bg-muted/20 text-muted-foreground text-sm">
                      {spec.label}
                    </div>
                    <div className="w-2/3 p-3 text-foreground text-sm">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Ecoloblue30Page;
