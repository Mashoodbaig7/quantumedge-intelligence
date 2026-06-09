import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Target, Shield, Zap } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Mission */}
        <section className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
            Agency Edge
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            We bridge the gap between raw AI capability and operational reality.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            QuantumEdge Intelligence was founded on a simple premise: AI models are commodities; implementation is the differentiator. We exist to help forward-thinking enterprises turn theoretical AI potential into concrete competitive advantages.
          </p>
        </section>

        {/* Why Us */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-card border border-border/50 rounded-sm">
            <Target className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Surgical Precision</h3>
            <p className="text-muted-foreground">
              We don't do 'general' AI consulting. We identify specific, high-friction bottlenecks and deploy targeted automation protocols to eliminate them entirely.
            </p>
          </div>
          <div className="p-8 bg-card border border-border/50 rounded-sm">
            <Shield className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Secure by Design</h3>
            <p className="text-muted-foreground">
              Enterprise data integrity is non-negotiable. Our architectures ensure sensitive IP never leaks into public training datasets. SOC2 compliant deployments.
            </p>
          </div>
          <div className="p-8 bg-card border border-border/50 rounded-sm">
            <Zap className="w-10 h-10 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">The "Edge"</h3>
            <p className="text-muted-foreground">
              We operate at the bleeding edge of the AI ecosystem. When a new foundational model drops, our clients' systems are upgraded within days, not quarters.
            </p>
          </div>
        </section>

        {/* Leadership Placeholder */}
        <section className="border-t border-border/30 pt-24 mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Engineering Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 mx-auto bg-muted/20 border border-border/50 rounded-sm mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <h4 className="text-xl font-bold text-white">Lead Engineer {i}</h4>
                <p className="text-primary font-mono text-sm">SYSTEMS ARCHITECT</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link href="/contact">
            <Button variant="outline" className="border-primary/30 hover:border-primary text-white h-12 px-8 rounded-sm">
              Contact our Team <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
