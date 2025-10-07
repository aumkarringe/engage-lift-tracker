import { Card } from "@/components/ui/card";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ZAxis } from "recharts";

const data = [
  { feature: "Listen History", importance: 0.85, impact: 8.2, group: "treatment" },
  { feature: "Time of Day", importance: 0.72, impact: 5.4, group: "treatment" },
  { feature: "Genre Preference", importance: 0.68, impact: 6.1, group: "treatment" },
  { feature: "Session Length", importance: 0.61, impact: 4.8, group: "treatment" },
  { feature: "Device Type", importance: 0.45, impact: 2.3, group: "treatment" },
  { feature: "Skip Behavior", importance: 0.58, impact: 3.9, group: "treatment" },
  { feature: "Content Age", importance: 0.39, impact: 1.7, group: "control" },
  { feature: "Popularity Rank", importance: 0.55, impact: 2.1, group: "control" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-card border border-border p-3 rounded-lg shadow-lg">
        <p className="font-semibold text-foreground">{data.feature}</p>
        <p className="text-sm text-muted-foreground">Importance: {data.importance.toFixed(2)}</p>
        <p className="text-sm text-muted-foreground">Impact: +{data.impact}%</p>
      </div>
    );
  }
  return null;
};

export const FeatureImportanceChart = () => {
  return (
    <Card className="p-6 gradient-card border-border/50">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">Feature Importance Analysis</h3>
          <p className="text-sm text-muted-foreground">XGBoost model - factors driving engagement</p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              type="number" 
              dataKey="importance" 
              name="Feature Importance"
              domain={[0, 1]}
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
              label={{ value: 'Feature Importance Score', position: 'insideBottom', offset: -10, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              type="number" 
              dataKey="impact" 
              name="Engagement Impact"
              stroke="hsl(var(--muted-foreground))"
              style={{ fontSize: '12px' }}
              label={{ value: 'Engagement Impact (%)', angle: -90, position: 'insideLeft', fill: 'hsl(var(--muted-foreground))' }}
            />
            <ZAxis range={[100, 400]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Scatter 
              name="Personalized Features" 
              data={data.filter(d => d.group === 'treatment')} 
              fill="hsl(var(--primary))"
            />
            <Scatter 
              name="Generic Features" 
              data={data.filter(d => d.group === 'control')} 
              fill="hsl(var(--muted-foreground))"
            />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
