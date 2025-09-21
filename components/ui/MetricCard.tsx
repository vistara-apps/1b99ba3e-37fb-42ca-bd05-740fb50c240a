'use client';

import { cn, formatNumber, getTrendIcon } from '@/lib/utils';
import { DashboardMetric } from '@/lib/types';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface MetricCardProps {
  metric: DashboardMetric;
  className?: string;
}

export function MetricCard({ metric, className }: MetricCardProps) {
  const { title, value, change, trend, format } = metric;
  
  const getTrendColor = (trend?: 'up' | 'down' | 'stable') => {
    switch (trend) {
      case 'up':
        return 'text-accent';
      case 'down':
        return 'text-red-400';
      case 'stable':
      default:
        return 'text-textSecondary';
    }
  };

  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;

  return (
    <div className={cn('card animate-fade-in', className)}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-caption font-medium text-textSecondary">
          {title}
        </h3>
        {trend && (
          <div className={cn('flex items-center space-x-1', getTrendColor(trend))}>
            <TrendIcon className="w-4 h-4" />
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <div className="text-2xl font-bold text-textPrimary">
          {typeof value === 'number' ? formatNumber(value, format) : value}
        </div>
        
        {change !== undefined && (
          <div className={cn(
            'flex items-center space-x-1 text-sm',
            getTrendColor(trend)
          )}>
            <span>{change > 0 ? '+' : ''}{change.toFixed(1)}%</span>
            <span className="text-textSecondary">vs last period</span>
          </div>
        )}
      </div>
    </div>
  );
}
