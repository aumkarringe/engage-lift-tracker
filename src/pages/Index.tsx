import { useState } from "react";
import { MetricCard } from "@/components/MetricCard";
import { EngagementChart } from "@/components/EngagementChart";
import { RetentionChart } from "@/components/RetentionChart";
import { FilterBar } from "@/components/FilterBar";
import { FeatureImportanceChart } from "@/components/FeatureImportanceChart";
import { ContentHeatmap } from "@/components/ContentHeatmap";
import { StatisticalSignificance } from "@/components/StatisticalSignificance";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Target, BarChart3, Brain, Database } from "lucide-react";

const Index = () => {
  const [selectedSegment, setSelectedSegment] = useState("all");
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="gradient-primary text-primary-foreground border-0 px-4 py-2">
              Causal Inference • Experimental Design • ML
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Measuring the Incremental Impact of{" "}
              <span className="text-gradient">Personalized Audio Recommendations</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A quasi-experimental framework to quantify how personalization drives listener engagement and retention
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="gradient-primary text-primary-foreground border-0 hover:opacity-90 transition-opacity">
                <BarChart3 className="mr-2 h-5 w-5" />
                View Full Analysis
              </Button>
              <Button size="lg" variant="outline">
                <Brain className="mr-2 h-5 w-5" />
                Methodology
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Filters Section */}
      <section className="container mx-auto px-4 py-8 border-b border-border/50">
        <div className="max-w-6xl mx-auto">
          <FilterBar 
            selectedSegment={selectedSegment}
            setSelectedSegment={setSelectedSegment}
            selectedPeriod={selectedPeriod}
            setSelectedPeriod={setSelectedPeriod}
          />
        </div>
      </section>

      {/* Key Findings Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Key Findings</h2>
            <p className="text-muted-foreground text-lg">
              Quantifying the causal effect of personalization on engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="30-Day Retention Lift"
              value="8.2%"
              change={8.2}
              trend="up"
              description="Incremental increase vs. generic"
            />
            <MetricCard
              title="Avg. Session Length"
              value="65 min"
              change={15.3}
              trend="up"
              description="Treatment group mean"
            />
            <MetricCard
              title="Weekly Sessions"
              value="4.8"
              change={12.1}
              trend="up"
              description="Sessions per active user"
            />
            <MetricCard
              title="Content Discovery"
              value="3.2x"
              change={220}
              trend="up"
              description="More diverse listening"
            />
          </div>
        </div>
      </section>

      {/* Experimental Design Section */}
      <section className="container mx-auto px-4 py-16 border-t border-border/50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Experimental Design</h2>
            <p className="text-muted-foreground text-lg">
              Quasi-experimental setup using Difference-in-Differences and Propensity Score Matching
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 gradient-card border-border/50 space-y-4">
              <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Treatment Group</h3>
              <p className="text-muted-foreground">
                Users receive personalized recommendations powered by collaborative filtering and content-based algorithms.
                Recommendations are tailored based on listening history, preferences, and behavioral patterns.
              </p>
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium">Sample Size: 12,450 users</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-foreground font-medium">Duration: 30 days</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 gradient-card border-border/50 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Control Group</h3>
              <p className="text-muted-foreground">
                Users receive generic top-trending recommendations based on overall platform popularity.
                No personalization algorithms applied, ensuring a fair baseline for comparison.
              </p>
              <div className="pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground font-medium">Sample Size: 12,380 users</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-foreground font-medium">Duration: 30 days</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Visualizations Section */}
      <section className="container mx-auto px-4 py-16 border-t border-border/50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Performance Analysis</h2>
            <p className="text-muted-foreground text-lg">
              Visual insights showing engagement and retention trends
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <EngagementChart />
            <RetentionChart />
          </div>
        </div>
      </section>

      {/* Statistical Significance Section */}
      <section className="container mx-auto px-4 py-16 border-t border-border/50">
        <div className="max-w-6xl mx-auto">
          <StatisticalSignificance />
        </div>
      </section>

      {/* Advanced Analytics Section */}
      <section className="container mx-auto px-4 py-16 border-t border-border/50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Advanced Analytics</h2>
            <p className="text-muted-foreground text-lg">
              Machine learning insights and content analysis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FeatureImportanceChart />
            <ContentHeatmap />
          </div>
        </div>
      </section>

      {/* Business Insights Section */}
      <section className="container mx-auto px-4 py-16 border-t border-border/50">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Business Recommendations</h2>
            <p className="text-muted-foreground text-lg">
              Actionable insights for optimizing recommendation algorithms
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Expand Personalization Coverage",
                description: "Roll out personalized recommendations to all user segments, prioritizing high-value users first to maximize ROI."
              },
              {
                title: "Optimize Cold Start Experience",
                description: "Implement hybrid recommendation approach for new users, blending collaborative filtering with content-based methods."
              },
              {
                title: "Enhance Content Diversity",
                description: "Balance familiarity with discovery by introducing serendipity parameters to prevent filter bubbles."
              },
              {
                title: "Invest in Real-Time Processing",
                description: "Deploy AWS SageMaker for real-time model inference to adapt recommendations based on in-session behavior."
              }
            ].map((insight, index) => (
              <Card key={index} className="p-6 gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-lg font-bold text-foreground mb-2">{insight.title}</h3>
                <p className="text-muted-foreground">{insight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="container mx-auto px-4 py-16 border-t border-border/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Technical Implementation</h2>
            <p className="text-muted-foreground text-lg">
              Built with industry-standard tools for scalable data analysis
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Python", "Pandas", "Scikit-learn", "Statsmodels", "XGBoost", "NLP/NLTK", "Lovable Cloud", "PostgreSQL", "SQL", "Matplotlib", "Seaborn", "React", "TypeScript"].map((tech) => (
              <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="pt-8">
            <Card className="p-6 gradient-card border-border/50">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Database className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-bold text-foreground">Backend Integration</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                This project uses Lovable Cloud for data persistence, enabling real experimental data storage and queries.
              </p>
              <Button className="gradient-primary text-primary-foreground border-0">
                <Database className="mr-2 h-4 w-4" />
                View Backend
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © 2025 Audible Recommendation Impact Study • Portfolio Project
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
