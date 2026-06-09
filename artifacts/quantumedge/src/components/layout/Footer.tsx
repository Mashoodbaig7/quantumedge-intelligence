import { Link } from "wouter";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/40 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 100%, hsl(var(--primary)) 0%, transparent 40%)' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center relative overflow-hidden">
                <ArrowUpRight className="w-5 h-5 text-primary relative z-10" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Quantum<span className="text-primary">Edge</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              Bridging the gap between raw AI capability and day-to-day business efficiency. Enterprise automation for the modern era.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors bg-card">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors bg-card">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Custom AI Agents</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Enterprise Automation</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">Data Integrations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-sm uppercase">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/book" className="text-muted-foreground hover:text-primary transition-colors">Book a Consultation</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} QuantumEdge Intelligence. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
