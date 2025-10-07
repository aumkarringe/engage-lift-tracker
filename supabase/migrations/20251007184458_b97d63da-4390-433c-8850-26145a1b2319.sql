-- Create table for experimental user data
CREATE TABLE public.experiment_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  group_type TEXT NOT NULL CHECK (group_type IN ('treatment', 'control')),
  segment TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for engagement metrics
CREATE TABLE public.engagement_metrics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  experiment_user_id UUID NOT NULL REFERENCES public.experiment_users(id) ON DELETE CASCADE,
  week_number INTEGER NOT NULL,
  listening_minutes NUMERIC NOT NULL,
  sessions_count INTEGER NOT NULL,
  content_diversity_score NUMERIC,
  recorded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for retention data
CREATE TABLE public.retention_data (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  experiment_user_id UUID NOT NULL REFERENCES public.experiment_users(id) ON DELETE CASCADE,
  day_number INTEGER NOT NULL,
  is_active BOOLEAN NOT NULL,
  recorded_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for feature importance
CREATE TABLE public.feature_importance (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  feature_name TEXT NOT NULL,
  importance_score NUMERIC NOT NULL,
  group_type TEXT NOT NULL CHECK (group_type IN ('treatment', 'control')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for content analysis
CREATE TABLE public.content_analysis (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  content_category TEXT NOT NULL,
  sentiment_score NUMERIC NOT NULL,
  engagement_level TEXT NOT NULL,
  topic TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.experiment_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.engagement_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.retention_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feature_importance ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_analysis ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (since this is a public portfolio project)
CREATE POLICY "Public read access for experiment_users"
ON public.experiment_users FOR SELECT
USING (true);

CREATE POLICY "Public read access for engagement_metrics"
ON public.engagement_metrics FOR SELECT
USING (true);

CREATE POLICY "Public read access for retention_data"
ON public.retention_data FOR SELECT
USING (true);

CREATE POLICY "Public read access for feature_importance"
ON public.feature_importance FOR SELECT
USING (true);

CREATE POLICY "Public read access for content_analysis"
ON public.content_analysis FOR SELECT
USING (true);

-- Create indexes for better query performance
CREATE INDEX idx_experiment_users_group ON public.experiment_users(group_type);
CREATE INDEX idx_experiment_users_segment ON public.experiment_users(segment);
CREATE INDEX idx_engagement_metrics_user ON public.engagement_metrics(experiment_user_id);
CREATE INDEX idx_retention_data_user ON public.retention_data(experiment_user_id);