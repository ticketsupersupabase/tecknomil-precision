import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, CheckCircle, MessageCircle } from "lucide-react";
import endoscope from "@/assets/endoscope.jpg";

// PRODUCT DETAIL: Video Endoscopio TF3309H80 (Monitor Simple)
const EndoscopioTF3309Page = () => {
  const specs = [
    { label: "Modelo", value: "TF3309H80" },
    { label: "Tipo", value: "Monitor Simple" },
    { label: "Resolución", value: "1280x720 HD" },
    { label: "Sonda", value: "5.5mm diámetro" },
    { label: "Longitud", value: "Hasta 80m extensible" },
    { label: "Pantalla", value: "4.3\" LCD color" },
    { label: "Iluminación", value: "LED ajustable 4 niveles" },
    { label: "Batería", value: "6 horas de operación" },
    { label: "Resistencia", value: "IP67 sumergible" },
    { label: "Peso", value: "420g (unidad de mano)" },
    { label: "Enfoque", value: "Automático 3-8cm" },
    { label: "Incluye", value: "Estuche, gancho magnético, espejo" },
  ];

  const features = [
    "Diseño compacto y portátil para inspecciones rápidas",
    "Sonda ultrafina de 5.5mm para accesos reducidos",
    "Visualización en tiempo real sin grabación",
    "Compatible con extensiones TFXC0139",
    "Ideal para mantenimiento preventivo",
  ];

  const whatsappLink =
    "https://wa.me/573182414347?text=Hola%20Tecknomil,%20me%20interesa%20el%20Video%20Endoscopio%20TF3309H80%20monitor%20simple.";

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
                alt="Video Endoscopio TF3309H80"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground">
              <Eye className="w-4 h-4" />
              <span className="font-display text-xs tracking-wider">COMPACTO</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-4">
              <span className="font-display text-xs tracking-widest text-primary">
                INSPECCIÓN INDUSTRIAL
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
              Video Endoscopio TF3309H80
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Endoscopio portátil con monitor integrado para inspecciones visuales 
              rápidas. Diseño ligero y compacto ideal para técnicos de mantenimiento 
              que requieren verificar conductos, motores y espacios confinados sin 
              necesidad de grabación.
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

export default EndoscopioTF3309Page;
