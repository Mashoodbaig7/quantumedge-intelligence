import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Bot, CheckCircle2, ChevronRight } from "lucide-react";
import servicesTechImg from "@/assets/services-tech.png";

const processSteps = [
  { step: "01", title: "Discovery", desc: "Deep audit of current manual processes and system bottlenecks." },
  { step: "02", title: "Architecture", desc: "Designing the data pipeline, agent logic, and integration points." },
  { step: "03", title: "Deployment", desc: "Phased rollout with strict monitoring and fallback protocols." },
];

const techStack = [
  "OpenAI / GPT-4", "Anthropic Claude", "LangChain", "n8n", 
  "Make", "Zapier", "Python", "Pinecone", "Supabase", "AWS", "GCP", "Vercel"
];

export default function Services() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Services & Solutions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            We don't sell software. We engineer operational leverage. Explore our core automation disciplines.
          </p>
        </div>

        <Tabs defaultValue="agents" className="mb-24">
          <TabsList className="w-full justify-start h-auto bg-transparent border-b border-border/50 rounded-none p-0 mb-8 flex-col sm:flex-row overflow-x-auto">
            <TabsTrigger 
              value="agents" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-6 py-4 text-lg font-medium text-muted-foreground hover:text-white"
            >
              Custom AI Agents
            </TabsTrigger>
            <TabsTrigger 
              value="automation" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-6 py-4 text-lg font-medium text-muted-foreground hover:text-white"
            >
              Enterprise Automation
            </TabsTrigger>
            <TabsTrigger 
              value="data" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary rounded-none px-6 py-4 text-lg font-medium text-muted-foreground hover:text-white"
            >
              Data Integrations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="agents" className="animate-in fade-in-50 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Autonomous Digital Workforce</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Deploy purpose-built LLM-driven agents capable of complex reasoning, context retrieval, and multi-step execution. From tier-1 customer support resolution to autonomous research and data synthesis.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    "Retrieval-Augmented Generation (RAG) implementation",
                    "Multi-agent orchestration frameworks",
                    "Custom instruction tuning and guardrails",
                    "Seamless CRM/ERP read/write capabilities"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 bg-card border border-border/50 rounded-sm mb-8">
                  <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                    <ChevronRight className="w-5 h-5 text-primary" /> Process Methodology
                  </h4>
                  <div className="grid gap-4">
                    {processSteps.map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <span className="text-primary font-mono">{step.step}</span>
                        <div>
                          <p className="text-white font-medium">{step.title}</p>
                          <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Link href="/book">
                  <Button className="w-full sm:w-auto h-12 px-8 bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all rounded-sm font-semibold">
                    Ready to automate this workflow? Book Consultation
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <div className="sticky top-24">
                  <div className="aspect-square rounded-sm overflow-hidden border border-border/50 bg-card">
                    {/* Fallback image if needed, or generated image */}
                     <div className="w-full h-full flex items-center justify-center bg-muted/20 relative">
                        <div className="absolute inset-0 border border-primary/20 m-4 rounded-sm" />
                        <div className="absolute inset-0 border border-primary/10 m-8 rounded-sm" />
                        <div className="text-center">
                          <Bot className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                          <span className="text-muted-foreground font-mono">AGENT_TOPOLOGY_RENDER</span>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="automation" className="animate-in fade-in-50 duration-500">
            {/* Similar structure for Enterprise Automation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Workflow Orchestration</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  We architect robust, scalable automation logic that connects disparate systems. We eliminate human-in-the-loop dependencies for standard operating procedures, ensuring zero-defect execution.
                </p>
                <Link href="/book">
                  <Button className="w-full sm:w-auto h-12 px-8 bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all rounded-sm font-semibold mt-8">
                    Ready to automate this workflow? Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="data" className="animate-in fade-in-50 duration-500">
             {/* Similar structure for Data */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Intelligent Data Pipelines</h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Real-time synchronization, unstructured data parsing, and semantic routing. We turn messy data streams into structured, actionable intelligence automatically.
                </p>
                <Link href="/book">
                  <Button className="w-full sm:w-auto h-12 px-8 bg-primary/10 text-primary border border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all rounded-sm font-semibold mt-8">
                    Ready to automate this workflow? Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Tech Stack Section */}
        <section className="pt-16 border-t border-border/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">The Technology Edge</h2>
              <p className="text-muted-foreground mb-8">
                We are tool-agnostic but highly opinionated. We deploy the optimal stack for your specific latency, security, and scale requirements.
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-card border border-border/50 text-white rounded-sm text-sm font-medium hover:border-primary/50 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
               <img src={servicesTechImg} alt="Tech Stack Architecture" className="w-full rounded-sm border border-border/50 shadow-lg" />
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
