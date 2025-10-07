import { Card } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
  description?: string;
}

export const MetricCard = ({ title, value, change, trend, description }: MetricCardProps) => {
  return (
    <Card className="p-6 gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
      <div className="space-y-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-3xl font-bold text-foreground">{value}</h3>
          <div className={`flex items-center gap-1 text-sm font-semibold ${
            trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
          }`}>
            {trend === "up" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
            <span>{Math.abs(change)}%</span>
          </div>
        </div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </Card>
  );
};
