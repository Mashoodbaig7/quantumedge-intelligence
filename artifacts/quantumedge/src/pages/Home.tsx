import { Link } from "wouter";
import { ArrowRight, Bot, Cpu, Network, Zap, TrendingUp, Clock, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Abstract AI Circuit" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Next-Generation Enterprise Automation
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1] mb-6">
              Eliminate Manual <br className="hidden md:block" />
              Workflows with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-300">Precision AI.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              We build custom AI agents, deep system integrations, and intelligent data pipelines for Fortune 500 companies that demand zero-latency operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button className="h-14 px-8 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,207,255,0.4)] hover:shadow-[0_0_30px_rgba(0,207,255,0.6)] transition-all text-lg font-semibold rounded-sm w-full sm:w-auto flex items-center gap-2">
                  Schedule an Automation Audit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="h-14 px-8 border-primary/30 hover:border-primary/60 hover:bg-primary/10 text-white rounded-sm w-full sm:w-auto text-lg">
                  Explore Capabilities
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Matrix */}
      <section className="py-24 bg-background relative border-t border-border/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Architecting the Autonomous Enterprise</h2>
            <p className="text-muted-foreground text-lg">Our core disciplines combine deep engineering expertise with cutting-edge language models to automate complex decision-making.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-8 rounded-sm bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Bot className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Custom AI Agents</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Purpose-built autonomous agents that handle customer support, data extraction, and complex reasoning tasks 24/7.
              </p>
              <Link href="/services" className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-sm bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Cpu className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Automation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                End-to-end workflow automation bridging legacy systems and modern SaaS architectures without operational friction.
              </p>
              <Link href="/services" className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-sm bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Network className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Intelligent Data Integrations</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Real-time data pipelines that clean, structure, and route information across your organization automatically.
              </p>
              <Link href="/services" className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 relative overflow-hidden bg-muted/30">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0%, transparent 60%)' }} />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Measurable Impact. <br />Zero Compromise.</h2>
              <p className="text-muted-foreground text-lg mb-8">
                We don't just build technology; we engineer outcomes. Our deployments are optimized for immediate ROI, reducing operational overhead while scaling your capabilities.
              </p>
              
              <ul className="space-y-6">
                {[
                  { icon: Zap, title: "Hyper-accelerated execution" },
                  { icon: TrendingUp, title: "Scalable without linear headcount growth" },
                  { icon: ShieldCheck, title: "Enterprise-grade security & compliance" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center border border-primary/20">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-white font-medium">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-sm bg-card border border-border/50 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="mb-2"><Counter end={15000} prefix="+" /></div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Hours Saved Monthly</p>
              </div>
              <div className="p-8 rounded-sm bg-card border border-border/50 text-center translate-y-0 sm:translate-y-8">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="mb-2"><Counter end={60} suffix="%" /></div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Cost Reduction</p>
              </div>
              <div className="p-8 rounded-sm bg-card border border-border/50 text-center">
                <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="mb-2"><Counter end={14} suffix="x" /></div>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Deployment Speed</p>
              </div>
              <div className="p-8 rounded-sm bg-card border border-primary/30 text-center translate-y-0 sm:translate-y-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <ShieldCheck className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="mb-2"><Counter end={100} suffix="%" /></div>
                <p className="text-sm text-primary font-medium uppercase tracking-wider">Uptime Reliability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border/30 relative">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Ready to architect your autonomous future?</h2>
          <p className="text-xl text-muted-foreground mb-10">Stop managing workflows. Start managing outcomes.</p>
          <Link href="/book">
            <Button className="h-16 px-10 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,207,255,0.4)] transition-all text-xl font-semibold rounded-sm">
              Schedule an Automation Audit
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
