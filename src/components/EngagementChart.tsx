import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { week: "Week 1", personalized: 45, generic: 38 },
  { week: "Week 2", personalized: 52, generic: 40 },
  { week: "Week 3", personalized: 58, generic: 42 },
  { week: "Week 4", personalized: 65, generic: 43 },
];

export const EngagementChart = () => {
  return (
    <Card className="p-6 gradient-card border-border/50">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">Engagement Over Time</h3>
          <p className="text-sm text-muted-foreground">Average listening minutes per session</p>
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
      </div>
    </Card>
  );
};
