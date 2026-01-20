import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// STICKY SCROLL SECTION - Drone Division Immersive Effect
interface StickyScrollProps {
  image: string;
  sections: {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }[];
}

const StickyScrollSection = ({ image, sections }: StickyScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative min-h-[300vh]">
      {/* Sticky Image (Left Side) */}
      <div className="sticky top-0 h-screen flex">
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <motion.div
            style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]) }}
            className="absolute inset-0"
          >
            <img
              src={image}
              alt="Drone Technology"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/90 lg:to-background" />
          </motion.div>

          {/* Tech Grid Overlay */}
          <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
          
          {/* Crosshair Element */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-32 h-32 opacity-40">
              <div className="absolute top-0 left-1/2 w-px h-full bg-primary -translate-x-1/2" />
              <div className="absolute top-1/2 left-0 w-full h-px bg-primary -translate-y-1/2" />
              <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-primary -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Content Container (Right Side) - Only visible on desktop */}
        <div className="hidden lg:flex w-1/2 items-center justify-center">
          {/* Content will be positioned absolutely below */}
        </div>
      </div>

      {/* Scrolling Content Sections */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 pointer-events-none">
        {sections.map((section, index) => (
          <div
            key={index}
            className="h-screen flex items-center justify-center p-8 lg:p-16 pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40%" }}
              transition={{ duration: 0.6 }}
              className="bg-background/95 backdrop-blur-sm p-8 lg:p-12 max-w-lg border border-border"
            >
              {/* Section Number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-display text-4xl text-primary/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.icon && (
                  <span className="text-primary">{section.icon}</span>
                )}
              </div>

              <h3 className="font-display text-2xl lg:text-3xl tracking-wide text-foreground mb-4">
                {section.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {section.description}
              </p>

              {/* Tech Line Decoration */}
              <div className="mt-8 flex items-center gap-2">
                <div className="w-8 h-px bg-primary" />
                <div className="w-2 h-2 border border-primary" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyScrollSection;
