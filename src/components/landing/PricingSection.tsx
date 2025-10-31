import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Check, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "forever",
    description: "Perfect for individuals getting started",
    features: [
      "Basic focus tracking",
      "Simple automation",
      "Weekly insights",
      "Community support"
    ],
    gradient: "from-secondary to-primary",
    popular: false
  },
  {
    name: "Professional",
    price: "$19",
    period: "per month",
    description: "For professionals who need advanced features",
    features: [
      "Advanced AI insights",
      "Custom automations",
      "Real-time analytics",
      "Priority support",
      "Team collaboration",
      "API access"
    ],
    gradient: "from-primary to-secondary",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For teams and organizations",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Dedicated support",
      "Advanced security",
      "Custom branding",
      "SLA guarantee"
    ],
    gradient: "from-secondary via-primary to-secondary",
    popular: false
  }
];

export const PricingSection = () => {
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
            Simple Pricing
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your productivity needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <GlassCard 
              key={index} 
              delay={index * 0.1} 
              className={`group relative ${plan.popular ? 'ring-2 ring-primary/50 scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.gradient} mb-6 glow-purple shadow-lg`}>
                  <Zap className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/dashboard">
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'neuro-button text-white' 
                        : 'bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/dashboard">
              <Button size="lg" className="neuro-button text-white px-8 py-6">
                Start Free Trial
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="px-8 py-6 border-primary/30 text-primary hover:bg-primary/10"
            >
              View All Features
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

