'use client';

import { MetricCard } from '@/components/ui/MetricCard';
import { SimulationChart } from '@/components/ui/SimulationChart';
import { AIRecommendationSnippet } from '@/components/ui/AIRecommendationSnippet';
import { DecisionCard } from '@/components/ui/DecisionCard';
import { MOCK_METRICS, MOCK_CHART_DATA } from '@/lib/constants';
import { Decision, Recommendation } from '@/lib/types';
import { Plus, Filter, Search } from 'lucide-react';

// Mock data for demonstration
const mockRecommendation: Recommendation = {
  recommendationId: '1',
  content: 'Consider implementing A/B testing for the new checkout flow to validate the 15% conversion improvement hypothesis.',
  explanation: 'Based on historical data and similar implementations, this change has a high probability of success. The risk is minimal as we can easily rollback if metrics decline.',
  confidence: 0.87,
  generatedBy: 'ai',
  createdAt: new Date(),
  tags: ['conversion', 'testing', 'checkout'],
};

const mockDecisions: Decision[] = [
  {
    decisionId: '1',
    title: 'Implement New Checkout Flow',
    description: 'Redesign the checkout process to reduce cart abandonment and improve conversion rates.',
    proposedByUserId: 'user1',
    createdAt: new Date(Date.now() - 86400000 * 2),
    status: 'in_review',
    scenarios: [],
    recommendations: [mockRecommendation],
  },
  {
    decisionId: '2',
    title: 'Launch Premium Tier',
    description: 'Introduce a premium subscription tier with advanced features and priority support.',
    proposedByUserId: 'user2',
    createdAt: new Date(Date.now() - 86400000 * 5),
    status: 'approved',
    scenarios: [],
    recommendations: [],
  },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-display text-textPrimary mb-2">Dashboard</h1>
          <p className="text-body text-textSecondary">
            Monitor your product decisions and AI-driven insights
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="btn-secondary flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Decision</span>
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <section>
        <h2 className="text-heading text-textPrimary mb-6">Key Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_METRICS.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </section>

      {/* Charts and Analytics */}
      <section>
        <h2 className="text-heading text-textPrimary mb-6">Analytics Overview</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SimulationChart
            data={MOCK_CHART_DATA}
            variant="line"
            title="Revenue Trend"
          />
          <SimulationChart
            data={MOCK_CHART_DATA}
            variant="bar"
            title="User Engagement"
          />
        </div>
      </section>

      {/* AI Recommendations */}
      <section>
        <h2 className="text-heading text-textPrimary mb-6">AI Recommendations</h2>
        <div className="space-y-4">
          <AIRecommendationSnippet 
            recommendation={mockRecommendation}
            variant="short"
          />
        </div>
      </section>

      {/* Recent Decisions */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-heading text-textPrimary">Recent Decisions</h2>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-textSecondary" />
              <input
                type="text"
                placeholder="Search decisions..."
                className="pl-10 pr-4 py-2 bg-surface border border-surface rounded-md text-textPrimary placeholder-textSecondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          {mockDecisions.map((decision) => (
            <DecisionCard
              key={decision.decisionId}
              decision={decision}
              variant="detailed"
              onClick={() => console.log('Navigate to decision:', decision.decisionId)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
