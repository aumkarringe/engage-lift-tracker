import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { day: "Day 7", personalized: 88, generic: 82 },
  { day: "Day 14", personalized: 79, generic: 71 },
  { day: "Day 21", personalized: 72, generic: 62 },
  { day: "Day 30", personalized: 68, generic: 56 },
];

export const RetentionChart = () => {
  return (
    <Card className="p-6 gradient-card border-border/50">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">30-Day Retention Rate</h3>
          <p className="text-sm text-muted-foreground">Percentage of active users over time</p>
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
      </div>
    </Card>
  );
};
