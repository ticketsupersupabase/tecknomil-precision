import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Lightbulb, CheckCircle, MessageCircle } from "lucide-react";
import endoscope from "@/assets/endoscope.jpg";

// PRODUCT DETAIL: Morral LED MTL171244
const MorralLEDPage = () => {
  const specs = [
    { label: "Modelo", value: "MTL171244" },
    { label: "Tipo", value: "Morral Táctico con LED" },
    { label: "Capacidad", value: "25 litros" },
    { label: "Material", value: "Cordura 1000D resistente" },
    { label: "Panel LED", value: "Matriz 16x16 RGB" },
    { label: "Modos Luz", value: "Fijo, Intermitente, SOS, Direccional" },
    { label: "Señales", value: "Flecha izq/der, Stop, Peligro" },
    { label: "Control", value: "Control remoto inalámbrico" },
    { label: "Batería LED", value: "Recargable 8 horas" },
    { label: "Visibilidad", value: "Hasta 200m nocturno" },
    { label: "Resistencia", value: "Agua y polvo IP54" },
    { label: "Peso", value: "1.2 kg vacío" },
  ];

  const features = [
    "Panel LED programable con señales direccionales",
    "Ideal para ciclistas, motociclistas y personal de seguridad",
    "Control remoto inalámbrico incluido",
    "Modos de emergencia SOS y peligro",
    "Compartimientos tácticos y MOLLE compatible",
  ];

  const whatsappLink =
    "https://wa.me/573182414347?text=Hola%20Tecknomil,%20me%20interesa%20el%20Morral%20LED%20MTL171244%20para%20seguridad%20vial.";

  return (
    <main className="pt-20 min-h-screen">
      <div className="container py-6">
        <Link
          to="/seguridad"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-display text-sm tracking-wide">Volver a Seguridad</span>
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
                src={endoscope}
                alt="Morral LED MTL171244"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground">
              <Lightbulb className="w-4 h-4" />
              <span className="font-display text-xs tracking-wider">VISIBILIDAD</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-4">
              <span className="font-display text-xs tracking-widest text-primary">
                SEGURIDAD PERSONAL
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
              Morral LED MTL171244
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Morral táctico de alta capacidad con sistema de iluminación LED integrado 
              para máxima visibilidad nocturna. Incluye señales direccionales controladas 
              remotamente, ideal para ciclistas, conductores y personal de seguridad vial. 
              Panel LED programable con múltiples modos de operación.
            </p>

            <div className="mb-8">
              <h3 className="font-display text-lg tracking-wide text-foreground mb-4">
                Señales Disponibles
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {["← Izquierda", "Derecha →", "STOP ■", "⚠ Peligro"].map((signal, i) => (
                  <div key={i} className="p-3 bg-muted/30 border border-border text-center">
                    <span className="font-display text-sm text-foreground">{signal}</span>
                  </div>
                ))}
              </div>
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

export default MorralLEDPage;
