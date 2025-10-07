import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, TrendingUp } from "lucide-react";

const statisticalTests = [
  {
    test: "Two-Sample T-Test",
    metric: "Average Session Length",
    tStatistic: 4.28,
    pValue: 0.0001,
    significant: true,
    interpretation: "Treatment group shows significantly higher session length"
  },
  {
    test: "Chi-Square Test",
    metric: "30-Day Retention Rate",
    chiSquare: 12.43,
    pValue: 0.0004,
    significant: true,
    interpretation: "Retention rates differ significantly between groups"
  },
  {
    test: "Difference-in-Differences",
    metric: "Weekly Sessions Growth",
    coefficient: 0.52,
    pValue: 0.002,
    significant: true,
    interpretation: "Personalization shows 52% incremental growth effect"
  },
  {
    test: "Propensity Score Matching",
    metric: "Content Diversity",
    ateEffect: 0.38,
    pValue: 0.015,
    significant: true,
    interpretation: "Average treatment effect of 38% on content diversity"
  }
];

export const StatisticalSignificance = () => {
  return (
    <Card className="p-6 gradient-card border-border/50">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-foreground">Statistical Significance Tests</h3>
            <p className="text-sm text-muted-foreground">Causal inference & hypothesis testing results</p>
          </div>
          <Badge className="gradient-primary text-primary-foreground border-0 px-3 py-1">
            α = 0.05
          </Badge>
        </div>

        <div className="grid gap-4">
          {statisticalTests.map((test, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-lg border border-border/50 bg-card/50 hover:border-primary/30 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-foreground">{test.test}</h4>
                    {test.significant && (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{test.metric}</p>
                </div>
                <Badge 
                  variant={test.pValue < 0.05 ? "default" : "secondary"}
                  className={test.pValue < 0.05 ? "gradient-primary text-primary-foreground border-0" : ""}
                >
                  p = {test.pValue.toFixed(4)}
                </Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                {'tStatistic' in test && (
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">t-statistic</p>
                    <p className="text-sm font-semibold text-foreground">{test.tStatistic}</p>
                  </div>
                )}
                {'chiSquare' in test && (
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">χ² value</p>
                    <p className="text-sm font-semibold text-foreground">{test.chiSquare}</p>
                  </div>
                )}
                {'coefficient' in test && (
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">DiD Coefficient</p>
                    <p className="text-sm font-semibold text-foreground">{test.coefficient}</p>
                  </div>
                )}
                {'ateEffect' in test && (
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">ATE Effect</p>
                    <p className="text-sm font-semibold text-foreground">{test.ateEffect}</p>
                  </div>
                )}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Significance</p>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {test.significant ? "Yes" : "No"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 p-3 rounded-md bg-primary/5 border border-primary/10">
                <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-foreground">{test.interpretation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-muted/50 border border-border/50">
          <h4 className="font-semibold text-foreground mb-2">Methodology Note</h4>
          <p className="text-sm text-muted-foreground">
            All tests conducted at 95% confidence level (α = 0.05). Propensity Score Matching used to control for 
            confounding variables including user age, platform tenure, and historical engagement patterns. 
            Difference-in-Differences analysis accounts for time-varying trends affecting both groups.
          </p>
        </div>
      </div>
    </Card>
  );
};
