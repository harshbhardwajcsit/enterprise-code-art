import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/spline-scene";
import { Spotlight } from "@/components/ui/spotlight";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "You're on the list!",
        description: "We'll notify you as soon as we launch.",
      });
      setEmail("");
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-black pt-20">
        <Card className="w-full max-w-7xl mx-auto border-0 bg-black/[0.96] relative overflow-hidden rounded-none md:rounded-xl min-h-[80vh]">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="hsl(var(--primary))" />

          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row min-h-[80vh]">
              {/* Left content */}
              <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  In Development
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white font-display mb-6 leading-tight">
                  Coming<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                    Soon
                  </span>
                </h1>

                <p className="text-lg text-neutral-400 max-w-md mb-8 leading-relaxed">
                  We're building something revolutionary. Be the first to know when we launch.
                </p>

                <form onSubmit={handleSubmit} className="flex gap-3 max-w-md">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-neutral-500 focus:border-primary/50 focus:ring-primary/20 h-12"
                      required
                    />
                  </div>
                  <Button type="submit" className="h-12 px-6 gap-2 shrink-0">
                    Join Waitlist
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Right 3D scene */}
              <div className="flex-1 relative min-h-[400px] md:min-h-0">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
