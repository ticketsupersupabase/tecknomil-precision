import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

// SECTION: MISION Y VISION - Corporate values display
const MisionVisionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="card-tech p-8 lg:p-10 h-full">
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 mb-4">
                <span className="w-1.5 h-1.5 bg-primary" />
                <span className="font-display text-xs tracking-widest text-primary">
                  NUESTRA MISIÓN
                </span>
              </div>

              {/* Content */}
              <p className="text-lg lg:text-xl text-foreground leading-relaxed">
                Conectar tecnología e integración para acelerar la evolución 
                operativa y estratégica de nuestros aliados.
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-transparent" />
            </div>
          </motion.div>

          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="card-tech p-8 lg:p-10 h-full">
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 mb-4">
                <span className="w-1.5 h-1.5 bg-primary" />
                <span className="font-display text-xs tracking-widest text-primary">
                  NUESTRA VISIÓN
                </span>
              </div>

              {/* Content */}
              <p className="text-lg lg:text-xl text-foreground leading-relaxed">
                Liderar el mercado con soluciones tecnológicas de excelencia 
                que definan nuevos estándares dentro de la cadena de valor 
                de nuestros aliados.
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 right-0 w-1/3 h-1 bg-gradient-to-l from-primary to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MisionVisionSection;
