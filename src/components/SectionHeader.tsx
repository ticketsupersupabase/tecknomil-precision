import { motion } from "framer-motion";

// SECTION HEADER COMPONENT - Consistent styling for page sections
interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({
  badge,
  title,
  description,
  centered = true,
}: SectionHeaderProps) => {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-6 ${
            centered ? "" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 bg-primary" />
          <span className="font-display text-xs tracking-widest text-primary uppercase">
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wide text-foreground"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
