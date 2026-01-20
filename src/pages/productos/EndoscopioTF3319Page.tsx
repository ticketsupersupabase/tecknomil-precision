import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, CheckCircle, MessageCircle } from "lucide-react";
import endoscope from "@/assets/endoscope.jpg";

// PRODUCT DETAIL: Video Endoscopio TF3319HLMX80
const EndoscopioTF3319Page = () => {
  const specs = [
    { label: "Modelo", value: "TF3319HLMX80" },
    { label: "Tipo", value: "Grabadora con Monitor" },
    { label: "Resolución", value: "1920x1080 Full HD" },
    { label: "Sonda", value: "8mm diámetro" },
    { label: "Longitud", value: "Hasta 80m extensible" },
    { label: "Articulación", value: "360° bidireccional" },
    { label: "Pantalla", value: "7\" LCD color" },
    { label: "Almacenamiento", value: "Tarjeta SD hasta 128GB" },
    { label: "Iluminación", value: "LED ajustable 6 niveles" },
    { label: "Batería", value: "8 horas de operación" },
    { label: "Resistencia", value: "IP67 sumergible" },
    { label: "Incluye", value: "Maletín protector, cargador, manual" },
  ];

  const features = [
    "Grabación de video y captura de imágenes en tiempo real",
    "Función de zoom digital 4x para inspección detallada",
    "Marcador de posición para localización precisa de fallos",
    "Compatible con extensiones TFXC0139",
    "Software de análisis incluido para PC",
  ];

  const whatsappLink =
    "https://wa.me/573182414347?text=Hola%20Tecknomil,%20me%20interesa%20el%20Video%20Endoscopio%20TF3319HLMX80%20con%20grabadora.";

  return (
    <main className="pt-20 min-h-screen">
      {/* Breadcrumb */}
      <div className="container py-6">
        <Link
          to="/seguridad"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-display text-sm tracking-wide">Volver a Seguridad</span>
        </Link>
      </div>

      {/* Product Detail */}
      <section className="container pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square bg-card border border-border overflow-hidden">
              <img
                src={endoscope}
                alt="Video Endoscopio TF3319HLMX80"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground">
              <Eye className="w-4 h-4" />
              <span className="font-display text-xs tracking-wider">GRABADORA HD</span>
            </div>
          </motion.div>

          {/* Info */}
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
              Video Endoscopio TF3319HLMX80
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Sistema profesional de video endoscopía con capacidad de grabación integrada. 
              Diseñado para inspecciones industriales complejas en tuberías, motores, 
              estructuras y espacios confinados. Incluye monitor LCD de alta resolución 
              y almacenamiento en tarjeta SD.
            </p>

            {/* Features */}
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

            {/* CTA */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech-primary inline-flex items-center gap-3 mb-8"
            >
              <MessageCircle className="w-5 h-5" />
              Cotizar por WhatsApp
            </a>

            {/* Specs Table */}
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

export default EndoscopioTF3319Page;
