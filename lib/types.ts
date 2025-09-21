export interface User {
  userId: string;
  name: string;
  email: string;
  role: 'product_manager' | 'analyst' | 'stakeholder';
  teamId: string;
  avatar?: string;
}

export interface Decision {
  decisionId: string;
  title: string;
  description: string;
  proposedByUserId: string;
  createdAt: Date;
  status: 'draft' | 'in_review' | 'approved' | 'rejected' | 'in_progress' | 'completed';
  scenarios: Scenario[];
  recommendations: Recommendation[];
}

export interface Scenario {
  scenarioId: string;
  decisionId: string;
  name: string;
  description: string;
  parameters: Record<string, any>;
  simulationResults: SimulationResult[];
  riskAssessment: RiskAssessment;
}

export interface SimulationResult {
  metric: string;
  value: number;
  confidence: number;
  trend: 'up' | 'down' | 'stable';
}

export interface RiskAssessment {
  level: 'low' | 'medium' | 'high';
  factors: string[];
  mitigation: string[];
}

export interface Recommendation {
  recommendationId: string;
  content: string;
  explanation: string;
  confidence: number;
  generatedBy: 'ai' | 'user';
  createdAt: Date;
  tags: string[];
}

export interface DataSource {
  sourceId: string;
  name: string;
  type: 'bigquery' | 'analytics' | 'segment' | 'crm' | 'custom';
  connectionStatus: 'connected' | 'disconnected' | 'error';
  lastSync?: Date;
}

export interface DashboardMetric {
  id: string;
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'stable';
  format: 'percentage' | 'number' | 'currency';
}

export interface ChartData {
  name: string;
  value: number;
  change?: number;
}
