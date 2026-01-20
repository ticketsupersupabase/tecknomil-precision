import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// PRODUCT CARD COMPONENT - Clean Military Style
interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  specs?: string[];
  whatsappMessage?: string;
  delay?: number;
}

const ProductCard = ({
  image,
  title,
  description,
  specs = [],
  whatsappMessage,
  delay = 0,
}: ProductCardProps) => {
  const whatsappUrl = `https://wa.me/573182414347?text=${encodeURIComponent(
    whatsappMessage || `Hola Tecknomil, me interesa el producto: ${title}`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="card-tech group"
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-lg tracking-wide text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Specs */}
        {specs.length > 0 && (
          <div className="space-y-2 mb-6">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-xs text-muted-foreground"
              >
                <span className="w-1.5 h-1.5 bg-primary" />
                {spec}
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary font-medium text-sm tracking-wide group/link"
        >
          <span>Solicitar Info</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProductCard;
