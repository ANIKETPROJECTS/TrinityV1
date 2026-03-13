import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading tag="WHO WE ARE" title="About Trinity Packaging" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-foreground/80 font-sans text-lg leading-relaxed"
            >
              <p>
                Established in <strong className="text-foreground">March 2026</strong> and strategically located in Vilholi, Nashik, 
                Trinity Packaging is a premier manufacturer specializing in high-quality corrugated boxes and duplex cartons.
              </p>
              <p>
                We are equipped with modern, semi-automatic Chinese machinery that allows us to maintain strict quality standards while ensuring efficient production cycles. Our facility is designed to handle diverse packaging requirements with precision and care.
              </p>
              <div className="p-6 bg-secondary border-l-4 border-primary mt-8">
                <p className="font-semibold text-accent m-0 text-xl font-display tracking-wide">
                  "Our customer-centric approach guarantees that we deliver not just boxes, but packaging solutions that protect and elevate your products."
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full bg-muted rounded-2xl overflow-hidden shadow-premium"
          >
            {/* Using a placeholder for the factory interior as requested, styled to look premium */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent z-10 mix-blend-multiply" />
            {/* about us factory floor */}
            <img 
              src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=1000&fit=crop" 
              alt="Factory Floor" 
              className="w-full h-full object-cover object-center"
            />
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl z-0" />
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-accent/10 rounded-full blur-3xl z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
