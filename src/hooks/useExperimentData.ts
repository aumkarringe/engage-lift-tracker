import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useExperimentUsers = (segment: string) => {
  return useQuery({
    queryKey: ["experiment-users", segment],
    queryFn: async () => {
      let query = supabase
        .from("experiment_users")
        .select("*");
      
      if (segment !== "all") {
        query = query.eq("segment", segment);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });
};

export const useEngagementMetrics = (segment: string, period: string) => {
  return useQuery({
    queryKey: ["engagement-metrics", segment, period],
    queryFn: async () => {
      const { data: users } = await supabase
        .from("experiment_users")
        .select("id")
        .eq("segment", segment === "all" ? segment : segment);
      
      let query = supabase
        .from("engagement_metrics")
        .select("*")
        .order("week_number", { ascending: true });
      
      if (segment !== "all" && users) {
        const userIds = users.map(u => u.id);
        query = query.in("experiment_user_id", userIds);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });
};

export const useRetentionData = (segment: string) => {
  return useQuery({
    queryKey: ["retention-data", segment],
    queryFn: async () => {
      let query = supabase
        .from("retention_data")
        .select(`
          *,
          experiment_users!inner(group_type, segment)
        `)
        .order("day_number", { ascending: true });
      
      if (segment !== "all") {
        query = query.eq("experiment_users.segment", segment);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
  });
};

export const useFeatureImportance = () => {
  return useQuery({
    queryKey: ["feature-importance"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("feature_importance")
        .select("*")
        .order("importance_score", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });
};

export const useContentAnalysis = () => {
  return useQuery({
    queryKey: ["content-analysis"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("content_analysis")
        .select("*");
      
      if (error) throw error;
      return data;
    },
  });
};

export const useAggregatedMetrics = (segment: string) => {
  return useQuery({
    queryKey: ["aggregated-metrics", segment],
    queryFn: async () => {
      let userQuery = supabase
        .from("experiment_users")
        .select("id, group_type");
      
      if (segment !== "all") {
        userQuery = userQuery.eq("segment", segment);
      }
      
      const { data: users, error: userError } = await userQuery;
      if (userError) throw userError;
      
      const userIds = users?.map(u => u.id) || [];
      
      const { data: metrics, error: metricsError } = await supabase
        .from("engagement_metrics")
        .select("*")
        .in("experiment_user_id", userIds);
      
      if (metricsError) throw metricsError;
      
      // Calculate aggregated metrics by group
      const personalizedMetrics = metrics?.filter(m => 
        users?.find(u => u.id === m.experiment_user_id)?.group_type === "personalized"
      ) || [];
      
      const genericMetrics = metrics?.filter(m => 
        users?.find(u => u.id === m.experiment_user_id)?.group_type === "generic"
      ) || [];
      
      const avgListeningPersonalized = personalizedMetrics.reduce((sum, m) => 
        sum + Number(m.listening_minutes), 0) / (personalizedMetrics.length || 1);
      
      const avgListeningGeneric = genericMetrics.reduce((sum, m) => 
        sum + Number(m.listening_minutes), 0) / (genericMetrics.length || 1);
      
      const avgSessionsPersonalized = personalizedMetrics.reduce((sum, m) => 
        sum + m.sessions_count, 0) / (personalizedMetrics.length || 1);
      
      const avgSessionsGeneric = genericMetrics.reduce((sum, m) => 
        sum + m.sessions_count, 0) / (genericMetrics.length || 1);
      
      const avgDiversityPersonalized = personalizedMetrics.reduce((sum, m) => 
        sum + Number(m.content_diversity_score || 0), 0) / (personalizedMetrics.length || 1);
      
      const avgDiversityGeneric = genericMetrics.reduce((sum, m) => 
        sum + Number(m.content_diversity_score || 0), 0) / (genericMetrics.length || 1);
      
      return {
        avgListeningMinutes: avgListeningPersonalized,
        avgListeningMinutesLift: ((avgListeningPersonalized - avgListeningGeneric) / avgListeningGeneric) * 100,
        avgSessions: avgSessionsPersonalized,
        avgSessionsLift: ((avgSessionsPersonalized - avgSessionsGeneric) / avgSessionsGeneric) * 100,
        contentDiversity: avgDiversityPersonalized / avgDiversityGeneric,
        contentDiversityLift: ((avgDiversityPersonalized - avgDiversityGeneric) / avgDiversityGeneric) * 100,
      };
    },
  });
};
