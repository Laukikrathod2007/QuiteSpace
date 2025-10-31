import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Product Manager",
    quote: "QuietSpace helped me reclaim control of my schedule. My deep work time increased by 47%.",
    result: "+47% Focus Time",
    avatar: "AM"
  },
  {
    name: "Isha Nair",
    role: "UI/UX Designer",
    quote: "The automation suggestions feel almost psychic. It's like working with an assistant that knows me.",
    result: "32% fewer task switches",
    avatar: "IN"
  },
  {
    name: "Raghav Kapoor",
    role: "Data Scientist",
    quote: "The focus sessions and insights helped me stop multitasking entirely.",
    result: "+18% Productivity Score",
    avatar: "RK"
  },
  {
    name: "Mira Patel",
    role: "Marketing Strategist",
    quote: "Finally, a tool that respects clarity and calm. QuietSpace keeps me in flow every morning.",
    result: "25% more output consistency",
    avatar: "MP"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Trusted by Professionals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real people who transformed their productivity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} delay={index * 0.1} className="group">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold shadow-lg glow-purple">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm mb-4 flex-grow text-muted-foreground">{testimonial.quote}</p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-primary font-semibold text-sm bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{testimonial.result}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
