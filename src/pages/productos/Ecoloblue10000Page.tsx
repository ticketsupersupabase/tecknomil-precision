import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Droplets, CheckCircle, MessageCircle, Shield } from "lucide-react";
import waterGenerator from "@/assets/water-generator.jpg";

// PRODUCT DETAIL: Ecoloblue 10000 (Emergencias/Militar)
const Ecoloblue10000Page = () => {
  const specs = [
    { label: "Modelo", value: "Ecoloblue 10000" },
    { label: "Segmento", value: "Militar / Emergencias" },
    { label: "Producción", value: "Hasta 10,000 Litros/día" },
    { label: "Consumo", value: "35 kW promedio" },
    { label: "Humedad Mínima", value: "25% RH" },
    { label: "Temperatura", value: "5°C - 50°C operativa" },
    { label: "Formato", value: "Contenedor estándar 20'" },
    { label: "Dimensiones", value: "6m x 2.4m x 2.6m" },
    { label: "Peso", value: "4,500 kg" },
    { label: "Tanque", value: "5,000 litros integrado" },
    { label: "Filtración", value: "Militar 12 etapas + UV + Ozono + RO" },
    { label: "Energía", value: "Compatible energía solar" },
    { label: "Transporte", value: "Helitransportable / Camión" },
    { label: "Despliegue", value: "< 4 horas operativo" },
  ];

  const features = [
    "Capacidad masiva de 10,000 litros diarios",
    "Diseño contenedor para despliegue rápido",
    "Compatible con energía solar para zonas remotas",
    "Helitransportable para emergencias",
    "Filtración de grado militar con ósmosis inversa",
    "Ideal para bases militares y operaciones humanitarias",
  ];

  const whatsappLink =
    "https://wa.me/573182414347?text=Hola%20Tecknomil,%20requiero%20cotización%20del%20Ecoloblue%2010000%20para%20operaciones%20de%20emergencia/militar.";

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
                alt="Ecoloblue 10000"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground">
              <Shield className="w-4 h-4" />
              <span className="font-display text-xs tracking-wider">GRADO MILITAR</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-4">
              <span className="font-display text-xs tracking-widest text-primary">
                ECOLOBLUE MILITAR
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
              Ecoloblue 10000
            </h1>
            <p className="text-xl text-primary font-display mb-4">10,000 Litros/día</p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Sistema de generación de agua atmosférica de grado militar en formato 
              contenedor para despliegue rápido. Diseñado para operaciones humanitarias, 
              bases militares remotas y situaciones de emergencia. Capacidad de producir 
              10,000 litros diarios incluso en condiciones extremas, con opción de energía 
              solar para total autonomía.
            </p>

            <div className="mb-8 p-4 bg-primary/10 border border-primary/30">
              <h4 className="font-display text-sm tracking-wide text-primary mb-2">
                APLICACIONES
              </h4>
              <ul className="grid grid-cols-2 gap-2 text-sm text-foreground">
                <li>• Bases militares remotas</li>
                <li>• Operaciones humanitarias</li>
                <li>• Zonas de desastre</li>
                <li>• Campamentos mineros</li>
                <li>• Proyectos de construcción</li>
                <li>• Eventos masivos</li>
              </ul>
            </div>

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

export default Ecoloblue10000Page;
