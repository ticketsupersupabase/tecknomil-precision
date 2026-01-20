import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Droplets, CheckCircle, MessageCircle, Factory } from "lucide-react";
import waterGenerator from "@/assets/water-generator.jpg";

// PRODUCT DETAIL: Ecoloblue 1000 (Industrial)
const Ecoloblue1000Page = () => {
  const specs = [
    { label: "Modelo", value: "Ecoloblue 1000" },
    { label: "Segmento", value: "Industrial / Comercial" },
    { label: "Producción", value: "Hasta 1,000 Litros/día" },
    { label: "Consumo", value: "4.5 kW promedio" },
    { label: "Humedad Mínima", value: "30% RH" },
    { label: "Temperatura", value: "10°C - 45°C óptima" },
    { label: "Montaje", value: "Exterior / Interior" },
    { label: "Dimensiones", value: "120 x 80 x 180 cm" },
    { label: "Peso", value: "280 kg" },
    { label: "Tanque", value: "500 litros externo" },
    { label: "Filtración", value: "Industrial 9 etapas + UV + Ozono" },
    { label: "Conexión", value: "Trifásica 220V/380V" },
  ];

  const features = [
    "Capacidad industrial de 1,000 litros diarios",
    "Sistema de filtración de 9 etapas con ozono",
    "Apto para instalación en exteriores (IP55)",
    "Monitoreo remoto incluido vía WiFi/4G",
    "Ideal para hoteles, fábricas y comunidades",
    "Bajo costo de operación por litro producido",
  ];

  const whatsappLink =
    "https://wa.me/573182414347?text=Hola%20Tecknomil,%20necesito%20información%20sobre%20el%20Ecoloblue%201000%20para%20uso%20industrial.";

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
                alt="Ecoloblue 1000"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground">
              <Factory className="w-4 h-4" />
              <span className="font-display text-xs tracking-wider">INDUSTRIAL</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-4">
              <span className="font-display text-xs tracking-widest text-primary">
                ECOLOBLUE INDUSTRIAL
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
              Ecoloblue 1000
            </h1>
            <p className="text-xl text-primary font-display mb-4">1,000 Litros/día</p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Sistema de generación de agua atmosférica de grado industrial. Diseñado 
              para abastecer hoteles, fábricas, comunidades y operaciones comerciales 
              de alto consumo. Produce hasta 1,000 litros de agua pura diariamente con 
              eficiencia energética optimizada y monitoreo remoto incluido.
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

export default Ecoloblue1000Page;
