import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground mb-12">
              For general inquiries, press, or partnership opportunities, reach out to our team. For automation audits, please use our booking system.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">hello@quantumedge.ai</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Headquarters</h4>
                  <p className="text-muted-foreground">100 Market St, Suite 400<br/>San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-sm bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-sm bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-8 bg-card border border-border/50 rounded-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Name</label>
                  <Input placeholder="John Doe" className="bg-background border-border/50 rounded-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-muted-foreground">Company</label>
                  <Input placeholder="Acme Corp" className="bg-background border-border/50 rounded-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-background border-border/50 rounded-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Subject</label>
                <Input placeholder="How can we help?" className="bg-background border-border/50 rounded-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground">Message</label>
                <Textarea placeholder="Your message..." className="min-h-[150px] bg-background border-border/50 rounded-sm" />
              </div>
              <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 rounded-sm font-semibold mt-2">
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
