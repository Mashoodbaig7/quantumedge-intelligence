import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company is required"),
  email: z.string().email("Invalid corporate email"),
  bottleneck: z.string({ required_error: "Please select an option" }),
  budget: z.string({ required_error: "Please select an option" }),
  date: z.date({ required_error: "Please select a preferred date" }),
});

export default function Book() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-background flex items-center justify-center">
        <div className="max-w-md w-full p-8 bg-card border border-primary/30 rounded-sm text-center animate-in zoom-in-95 duration-500 shadow-[0_0_50px_rgba(0,207,255,0.1)]">
          <CheckCircle2 className="w-20 h-20 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Audit Scheduled</h2>
          <p className="text-muted-foreground mb-8">
            Your consultation request has been received. Our engineering team will review your details and send a calendar invitation shortly.
          </p>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 rounded-sm font-semibold">
            Add to Calendar
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-4">Schedule an Automation Audit</h1>
              <p className="text-muted-foreground">
                Connect with our systems architects to identify high-leverage automation opportunities within your organization.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-card border border-border/50 rounded-sm">
                <h3 className="font-semibold text-white mb-2">What to expect:</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" /> 45-minute technical discovery call</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" /> System architecture review</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" /> ROI potential analysis</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="p-8 bg-card/50 backdrop-blur-xl border border-border/50 rounded-sm shadow-xl">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-background border-border/50 focus-visible:ring-primary rounded-sm" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="companyName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" className="bg-background border-border/50 focus-visible:ring-primary rounded-sm" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Corporate Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" className="bg-background border-border/50 focus-visible:ring-primary rounded-sm" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="bottleneck"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Biggest Operational Bottleneck</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-border/50 focus:ring-primary rounded-sm">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-border/50 text-white">
                            <SelectItem value="manual-data">Manual Data Entry</SelectItem>
                            <SelectItem value="integration">Lack of App Integration</SelectItem>
                            <SelectItem value="support">Customer Support Volume</SelectItem>
                            <SelectItem value="custom-ai">Custom AI Agent Needs</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Current Monthly Tech Budget</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-border/50 focus:ring-primary rounded-sm">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border-border/50 text-white">
                            <SelectItem value="under-5k">Under $5K</SelectItem>
                            <SelectItem value="5k-15k">$5K–$15K</SelectItem>
                            <SelectItem value="15k-50k">$15K–$50K</SelectItem>
                            <SelectItem value="50k-plus">$50K+</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-muted-foreground">Preferred Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal bg-background border-border/50 hover:bg-muted/50 hover:text-white rounded-sm",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0 bg-card border-border/50" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date()}
                              initialFocus
                              className="text-white"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(0,207,255,0.3)] font-semibold rounded-sm text-lg mt-4">
                    Request Audit
                  </Button>
                </form>
              </Form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
