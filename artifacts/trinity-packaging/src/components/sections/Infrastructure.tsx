import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Infrastructure() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 10, suffix: "+", label: "Modern Machines" },
    { value: 15, suffix: "+", label: "Skilled Employees" },
    { value: 2026, suffix: "", label: "Est. Year" },
  ];

  return (
    <section id="infrastructure" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading tag="FACILITY" title="Our Infrastructure" />
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg text-foreground/80 font-sans mb-12 leading-relaxed"
            >
              Our manufacturing unit is designed for efficiency and scale. We continually invest in advanced machinery to ensure high-speed production without compromising the structural integrity of our packaging products.
            </motion.p>

            <div ref={ref} className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">
                    {isInView ? (
                      <CountUp end={stat.value} duration={2.5} separator="," useEasing />
                    ) : "0"}
                    {stat.suffix}
                  </div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl overflow-hidden shadow-sm bg-muted ${i === 1 || i === 4 ? 'aspect-square' : 'aspect-[4/5]'}`}
              >
                {/* infrastructure machine details */}
                <img 
                  src={`https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=${i === 1 || i === 4 ? 400 : 500}&fit=crop&auto=format`}
                  alt="Factory Details" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
