import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM_ROLES } from "@/lib/constants";
import * as Icons from "lucide-react";

export function Team() {
  return (
    <section id="team" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionHeading tag="OUR PEOPLE" title="The Team Behind the Quality" className="mb-6 flex flex-col items-center" />
          <p className="text-foreground/70 font-sans text-lg">
            Our operations are driven by a dedicated workforce. From skilled operators to management, every member is committed to maintaining the highest standards of manufacturing excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_ROLES.map((role, index) => {
            const Icon = Icons[role.icon as keyof typeof Icons] as React.ElementType;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border/50 flex items-center gap-5 hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white text-primary transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground">
                  {role.title}
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
