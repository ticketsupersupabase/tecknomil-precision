import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, MessageSquare } from "lucide-react";

// CONTACT PAGE - Corporate contact form with WhatsApp integration
const ContactoPage = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    sector: "",
    mensaje: "",
  });

  const sectors = [
    "Militar & Defensa",
    "Industrial",
    "Civil & Urbano",
    "Emergencias & Humanitario",
    "Energía & Utilities",
    "Otro",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hola Tecknomil, soy ${formData.nombre} de la empresa ${formData.empresa}.
    
Sector: ${formData.sector}
Correo: ${formData.correo}
Teléfono: ${formData.telefono}

Mensaje: ${formData.mensaje}`;

    const whatsappUrl = `https://wa.me/573182414347?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="pt-20">
      {/* PAGE HEADER */}
      <section className="py-16 bg-background-alt border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-6">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="font-display text-xs tracking-widest text-primary">
                CONTACTO
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground mb-4">
              Hablemos de Ingeniería
            </h1>
            <p className="text-lg text-muted-foreground">
              Cuéntenos sobre su proyecto. Nuestro equipo de especialistas 
              responderá en menos de 24 horas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <h2 className="font-display text-2xl tracking-wide text-foreground mb-8">
                Información de Contacto
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm tracking-wider text-foreground mb-1">
                      OFICINA PRINCIPAL
                    </h3>
                    <p className="text-muted-foreground">
                      Polo Club, Calle 87 #22a-08<br />
                      Bogotá, Colombia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm tracking-wider text-foreground mb-1">
                      TELÉFONO
                    </h3>
                    <a
                      href="tel:+573182414347"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +57 318 241 4347
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm tracking-wider text-foreground mb-1">
                      CORREO
                    </h3>
                    <a
                      href="mailto:info@tecknomil.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@tecknomil.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <div className="mt-12 p-6 bg-foreground">
                <h3 className="font-display text-lg tracking-wide text-background mb-4">
                  Respuesta Inmediata
                </h3>
                <p className="text-background/70 text-sm mb-4">
                  ¿Necesita una respuesta urgente? Contáctenos directamente por WhatsApp.
                </p>
                <a
                  href="https://wa.me/573182414347?text=Hola%20Tecknomil,%20necesito%20asesoría%20urgente."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tech bg-primary text-primary-foreground w-full justify-center"
                >
                  WhatsApp Directo
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display text-xs tracking-wider text-foreground mb-2">
                      NOMBRE COMPLETO *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors font-body"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label className="block font-display text-xs tracking-wider text-foreground mb-2">
                      EMPRESA
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors font-body"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display text-xs tracking-wider text-foreground mb-2">
                      CORREO ELECTRÓNICO *
                    </label>
                    <input
                      type="email"
                      name="correo"
                      value={formData.correo}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors font-body"
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div>
                    <label className="block font-display text-xs tracking-wider text-foreground mb-2">
                      TELÉFONO
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors font-body"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-display text-xs tracking-wider text-foreground mb-2">
                    SECTOR *
                  </label>
                  <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors font-body appearance-none cursor-pointer"
                  >
                    <option value="">Seleccione un sector</option>
                    {sectors.map((sector) => (
                      <option key={sector} value={sector}>
                        {sector}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-display text-xs tracking-wider text-foreground mb-2">
                    MENSAJE *
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background border border-border focus:border-primary focus:outline-none transition-colors font-body resize-none"
                    placeholder="Describa su proyecto o necesidad..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-tech-primary w-full flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar vía WhatsApp
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Al enviar, será redirigido a WhatsApp con su mensaje pre-cargado.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactoPage;
