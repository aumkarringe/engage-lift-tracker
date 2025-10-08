import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Target, TrendingUp, Zap } from "lucide-react";

export const InteractiveDemoSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 border-t border-border/50 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <Badge className="gradient-primary text-primary-foreground border-0 px-4 py-2">
            <Lightbulb className="mr-2 h-4 w-4" />
            Why This Matters
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">Understanding Causal Impact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This dashboard demonstrates how to measure the true incremental value of product features using experimental design and causal inference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 gradient-card border-border/50 space-y-4">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">The Problem</h3>
                <p className="text-muted-foreground text-sm">
                  Simply tracking engagement metrics isn't enough. Correlation doesn't equal causation. 
                  Users who get personalized content might be more engaged <strong>anyway</strong> - 
                  not because of personalization.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 gradient-card border-border/50 space-y-4">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center shrink-0">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">The Solution</h3>
                <p className="text-muted-foreground text-sm">
                  Use quasi-experimental design with <strong>matched control groups</strong>. 
                  Compare similar users - some with personalization, some without - to isolate the 
                  true causal effect.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-8 gradient-card border-primary/20 border-2">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold text-foreground">Try It Yourself</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full gradient-primary flex items-center justify-center text-xs text-primary-foreground font-bold shrink-0 mt-0.5">
                  1
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Use the filters above</strong> to explore different user segments 
                  (new users, power users, premium subscribers) and time periods
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full gradient-primary flex items-center justify-center text-xs text-primary-foreground font-bold shrink-0 mt-0.5">
                  2
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Hover over charts and metrics</strong> to see detailed explanations 
                  of what each visualization means and why it matters
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full gradient-primary flex items-center justify-center text-xs text-primary-foreground font-bold shrink-0 mt-0.5">
                  3
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Watch how metrics change</strong> across segments to understand 
                  which user groups benefit most from personalization
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Key Insight:</strong> Power users show 20% higher lift from 
                personalization compared to new users, suggesting the algorithm improves with more behavioral data.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
