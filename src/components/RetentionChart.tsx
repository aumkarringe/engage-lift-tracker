import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Info } from "lucide-react";
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const generateData = (segment: string) => {
  const baseData = [
    { day: "Day 7", personalized: 85, generic: 78 },
    { day: "Day 14", personalized: 78, generic: 68 },
    { day: "Day 21", personalized: 72, generic: 60 },
    { day: "Day 30", personalized: 68, generic: 55 },
  ];

  const multipliers: Record<string, number> = {
    all: 1,
    new_users: 0.9,
    active_users: 1.1,
    power_users: 1.2,
    premium: 1.15,
  };

  const multiplier = multipliers[segment] || 1;
  return baseData.map(item => ({
    ...item,
    personalized: Math.round(item.personalized * multiplier),
    generic: Math.round(item.generic * multiplier),
  }));
};

interface RetentionChartProps {
  selectedSegment?: string;
}

export const RetentionChart = ({ selectedSegment = "all" }: RetentionChartProps) => {
  const data = generateData(selectedSegment);

  return (
    <Card className="p-6 gradient-card border-border/50 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-foreground">Retention Rate Comparison</h3>
        <TooltipProvider>
          <UITooltip>
            <TooltipTrigger>
              <Info className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Percentage of users still active after X days. Personalized recommendations show 8-13% higher retention at 30 days.</p>
            </TooltipContent>
          </UITooltip>
        </TooltipProvider>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="day" 
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
          <Bar 
            dataKey="personalized" 
            fill="hsl(var(--primary))" 
            name="Personalized"
            radius={[8, 8, 0, 0]}
          />
          <Bar 
            dataKey="generic" 
            fill="hsl(var(--muted-foreground))" 
            name="Generic"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
