import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Info } from "lucide-react";
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const generateData = (period: string) => {
  const dataMap: Record<string, any[]> = {
    week: [
      { week: "Day 1", personalized: 45, generic: 38 },
      { week: "Day 3", personalized: 48, generic: 39 },
      { week: "Day 5", personalized: 52, generic: 40 },
      { week: "Day 7", personalized: 55, generic: 41 },
    ],
    month: [
      { week: "Week 1", personalized: 45, generic: 38 },
      { week: "Week 2", personalized: 52, generic: 41 },
      { week: "Week 3", personalized: 58, generic: 42 },
      { week: "Week 4", personalized: 65, generic: 43 },
    ],
    quarter: [
      { week: "Month 1", personalized: 45, generic: 38 },
      { week: "Month 2", personalized: 58, generic: 42 },
      { week: "Month 3", personalized: 65, generic: 43 },
    ],
    all: [
      { week: "Q1", personalized: 45, generic: 38 },
      { week: "Q2", personalized: 52, generic: 41 },
      { week: "Q3", personalized: 58, generic: 42 },
      { week: "Q4", personalized: 65, generic: 43 },
    ],
  };
  return dataMap[period] || dataMap.month;
};

interface EngagementChartProps {
  selectedPeriod?: string;
}

export const EngagementChart = ({ selectedPeriod = "month" }: EngagementChartProps) => {
  const data = generateData(selectedPeriod);

  return (
    <Card className="p-6 gradient-card border-border/50 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Engagement Over Time</h3>
        <TooltipProvider>
          <UITooltip>
            <TooltipTrigger>
              <Info className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Average listening minutes per user. Personalized recommendations show consistently higher engagement across all time periods.</p>
            </TooltipContent>
          </UITooltip>
        </TooltipProvider>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="week" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)"
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="personalized" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            name="Personalized Recommendations"
          />
          <Line 
            type="monotone" 
            dataKey="generic" 
            stroke="hsl(var(--muted-foreground))" 
            strokeWidth={3}
            name="Generic Recommendations"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
