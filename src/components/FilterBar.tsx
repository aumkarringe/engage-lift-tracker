import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Filter } from "lucide-react";

interface FilterBarProps {
  selectedSegment: string;
  setSelectedSegment: (value: string) => void;
  selectedPeriod: string;
  setSelectedPeriod: (value: string) => void;
}

export const FilterBar = ({ 
  selectedSegment, 
  setSelectedSegment,
  selectedPeriod,
  setSelectedPeriod 
}: FilterBarProps) => {
  return (
    <Card className="p-6 gradient-card border-border/50">
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Filters</h3>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-muted-foreground">User Segment</label>
            <Select value={selectedSegment} onValueChange={setSelectedSegment}>
              <SelectTrigger className="w-full bg-background">
                <SelectValue placeholder="Select segment" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border z-50">
                <SelectItem value="all">All Segments</SelectItem>
                <SelectItem value="new_users">New Users (0-30 days)</SelectItem>
                <SelectItem value="active_users">Active Users (30-90 days)</SelectItem>
                <SelectItem value="power_users">Power Users (90+ days)</SelectItem>
                <SelectItem value="premium">Premium Subscribers</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Time Period</label>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-full bg-background">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border z-50">
                <SelectItem value="week">Last 7 Days</SelectItem>
                <SelectItem value="month">Last 30 Days</SelectItem>
                <SelectItem value="quarter">Last 90 Days</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </Card>
  );
};
