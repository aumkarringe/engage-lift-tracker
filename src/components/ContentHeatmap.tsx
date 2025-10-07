import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const heatmapData = [
  { category: "Mystery", topics: ["Crime", "Thriller", "Detective", "Suspense"], engagement: [85, 78, 82, 76] },
  { category: "Romance", topics: ["Contemporary", "Historical", "Fantasy", "Drama"], engagement: [72, 68, 71, 65] },
  { category: "Sci-Fi", topics: ["Space Opera", "Dystopian", "Cyberpunk", "Time Travel"], engagement: [88, 91, 79, 84] },
  { category: "Biography", topics: ["Political", "Business", "Artist", "Athlete"], engagement: [64, 70, 62, 58] },
  { category: "Self-Help", topics: ["Productivity", "Mindfulness", "Finance", "Relationships"], engagement: [75, 81, 77, 73] },
];

const getEngagementColor = (value: number) => {
  if (value >= 85) return "bg-primary";
  if (value >= 75) return "bg-chart-2";
  if (value >= 65) return "bg-chart-3";
  return "bg-muted";
};

const getEngagementLabel = (value: number) => {
  if (value >= 85) return "Very High";
  if (value >= 75) return "High";
  if (value >= 65) return "Medium";
  return "Low";
};

export const ContentHeatmap = () => {
  return (
    <Card className="p-6 gradient-card border-border/50">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">Content Engagement Heatmap</h3>
          <p className="text-sm text-muted-foreground">Topic modeling & sentiment analysis results</p>
        </div>
        
        <div className="space-y-3">
          {heatmapData.map((category, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground w-24">{category.category}</span>
                <div className="flex-1 grid grid-cols-4 gap-2">
                  {category.topics.map((topic, topicIdx) => (
                    <div 
                      key={topicIdx}
                      className="relative group"
                    >
                      <div className={`${getEngagementColor(category.engagement[topicIdx])} p-3 rounded-lg transition-all hover:scale-105 cursor-pointer`}>
                        <p className="text-xs font-medium text-white text-center">{topic}</p>
                        <p className="text-xs text-white/80 text-center mt-1">{category.engagement[topicIdx]}%</p>
                      </div>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-card border border-border rounded text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                        {getEngagementLabel(category.engagement[topicIdx])} Engagement
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
          <span className="text-xs text-muted-foreground">Engagement Level:</span>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-muted" />
              <span className="text-xs text-muted-foreground">Low</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-chart-3" />
              <span className="text-xs text-muted-foreground">Medium</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-chart-2" />
              <span className="text-xs text-muted-foreground">High</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-primary" />
              <span className="text-xs text-muted-foreground">Very High</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
