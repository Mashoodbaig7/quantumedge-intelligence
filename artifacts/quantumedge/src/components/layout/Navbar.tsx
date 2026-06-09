import { Link } from "wouter";
import { Menu, X, ArrowUpRight, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/40 transition-colors" />
            <ArrowUpRight className="w-5 h-5 text-primary relative z-10" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">
            Quantum<span className="text-primary">Edge</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Services</Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Contact</Link>
          <Link href="/book">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(0,207,255,0.3)] hover:shadow-[0_0_25px_rgba(0,207,255,0.5)] transition-all font-semibold rounded-sm h-10 px-6">
              Schedule Audit
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-xl border-t border-border/50 p-6 flex flex-col gap-6 animate-in slide-in-from-top-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white hover:text-primary">Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white hover:text-primary">Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white hover:text-primary">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-xl font-medium text-white hover:text-primary">Contact</Link>
          <Link href="/book" onClick={() => setIsOpen(false)} className="mt-4">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(0,207,255,0.3)] font-semibold rounded-sm h-12 text-lg">
              Schedule Audit
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
}
