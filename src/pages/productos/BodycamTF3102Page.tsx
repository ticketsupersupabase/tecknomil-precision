import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Camera, CheckCircle, MessageCircle } from "lucide-react";
import endoscope from "@/assets/endoscope.jpg";

// PRODUCT DETAIL: Cámara Bodycam TF3102WHD
const BodycamTF3102Page = () => {
  const specs = [
    { label: "Modelo", value: "TF3102WHD" },
    { label: "Tipo", value: "Bodycam Grado Policial" },
    { label: "Resolución Video", value: "1280x720 HD @ 30fps" },
    { label: "Resolución Foto", value: "12 Megapíxeles" },
    { label: "Visión Nocturna", value: "Infrarrojo hasta 10m" },
    { label: "Ángulo", value: "140° gran angular" },
    { label: "Batería", value: "12 horas grabación continua" },
    { label: "Almacenamiento", value: "64GB interno + SD 128GB" },
    { label: "Pantalla", value: "1.5\" LCD de estado" },
    { label: "Resistencia", value: "IP67 agua y polvo" },
    { label: "Pre-grabación", value: "30 segundos buffer" },
    { label: "GPS", value: "Integrado con timestamp" },
    { label: "Audio", value: "Micrófono con reducción de ruido" },
    { label: "Peso", value: "130g" },
  ];

  const features = [
    "Grabación HD con visión nocturna infrarroja automática",
    "GPS integrado para geolocalización de evidencia",
    "Pre-grabación de 30 segundos antes de activación",
    "Resistente a impactos y condiciones extremas",
    "Software de gestión de evidencia incluido",
    "Timestamp encriptado anti-manipulación",
  ];

  const whatsappLink =
    "https://wa.me/573182414347?text=Hola%20Tecknomil,%20me%20interesa%20la%20Bodycam%20TF3102WHD%20para%20seguridad.";

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
                alt="Bodycam TF3102WHD"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground">
              <Camera className="w-4 h-4" />
              <span className="font-display text-xs tracking-wider">GRADO POLICIAL</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-4">
              <span className="font-display text-xs tracking-widest text-primary">
                VIGILANCIA PERSONAL
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
              Cámara Bodycam TF3102WHD
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Cámara corporal de grado policial diseñada para fuerzas de seguridad, 
              vigilancia privada y operaciones tácticas. Grabación HD con visión nocturna 
              infrarroja automática y GPS integrado para documentación de evidencia con 
              validez legal. Resistente a condiciones extremas.
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

export default BodycamTF3102Page;
