import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Cable, CheckCircle, MessageCircle } from "lucide-react";
import endoscope from "@/assets/endoscope.jpg";

// PRODUCT DETAIL: Extensión TFXC0139
const ExtensionTFXC0139Page = () => {
  const specs = [
    { label: "Modelo", value: "TFXC0139" },
    { label: "Tipo", value: "Cable de Extensión" },
    { label: "Longitud", value: "10 metros por unidad" },
    { label: "Compatibilidad", value: "TF3319HLMX80, TF3309H80" },
    { label: "Material", value: "Fibra óptica blindada" },
    { label: "Resistencia", value: "IP67 sumergible" },
    { label: "Conectores", value: "Estándar TF series" },
    { label: "Apilable", value: "Hasta 8 extensiones" },
    { label: "Peso", value: "280g por unidad" },
    { label: "Incluye", value: "Estuche de transporte" },
  ];

  const features = [
    "Extensión profesional de 10 metros para mayor alcance",
    "Compatible con toda la línea TF de endoscopios",
    "Fibra óptica de alta transmisión sin pérdida de imagen",
    "Se pueden conectar múltiples extensiones en cadena",
    "Ideal para inspecciones en tuberías largas y pozos",
  ];

  const whatsappLink =
    "https://wa.me/573182414347?text=Hola%20Tecknomil,%20me%20interesa%20la%20Extensión%20TFXC0139%20para%20endoscopio.";

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
                alt="Extensión TFXC0139"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 bg-primary text-primary-foreground">
              <Cable className="w-4 h-4" />
              <span className="font-display text-xs tracking-wider">ACCESORIO</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-4">
              <span className="font-display text-xs tracking-widest text-primary">
                EXTENSIÓN
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl tracking-wide text-foreground mb-4">
              Extensión TFXC0139
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Cable de extensión profesional de 10 metros para endoscopios de la serie TF. 
              Permite alcanzar zonas de inspección más profundas sin comprometer la calidad 
              de imagen. Se pueden apilar múltiples unidades para alcances de hasta 80 metros.
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

export default ExtensionTFXC0139Page;
