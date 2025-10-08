import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
  description: string;
  tooltip?: string;
}

export const MetricCard = ({ title, value, change, trend, description, tooltip }: MetricCardProps) => {
  return (
    <Card className="p-6 gradient-card border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer group">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          {tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p className="text-sm">{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <div className="flex items-baseline gap-2">
          <h3 className="text-3xl font-bold text-foreground">{value}</h3>
          <div className={`flex items-center gap-1 text-sm font-semibold ${
            trend === "up" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
          }`}>
            {trend === "up" ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
            <span>+{Math.abs(change).toFixed(1)}%</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};
