'use client';

import { cn, formatDate } from '@/lib/utils';
import { Decision } from '@/lib/types';
import { Clock, Users, Target, ChevronRight } from 'lucide-react';

interface DecisionCardProps {
  decision: Decision;
  variant?: 'summary' | 'detailed';
  onClick?: () => void;
  className?: string;
}

export function DecisionCard({ 
  decision, 
  variant = 'summary',
  onClick,
  className 
}: DecisionCardProps) {
  const getStatusColor = (status: Decision['status']) => {
    switch (status) {
      case 'approved':
        return 'bg-accent/20 text-accent';
      case 'in_progress':
        return 'bg-primary/20 text-primary';
      case 'in_review':
        return 'bg-yellow-400/20 text-yellow-400';
      case 'rejected':
        return 'bg-red-400/20 text-red-400';
      case 'completed':
        return 'bg-green-400/20 text-green-400';
      case 'draft':
      default:
        return 'bg-surface text-textSecondary';
    }
  };

  const getStatusLabel = (status: Decision['status']) => {
    return status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div 
      className={cn(
        'card cursor-pointer hover:bg-surface/80 transition-all duration-200 group',
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-heading text-textPrimary mb-2 group-hover:text-primary transition-colors duration-200">
            {decision.title}
          </h3>
          <p className="text-body text-textSecondary line-clamp-2">
            {decision.description}
          </p>
        </div>
        
        <div className="flex items-center space-x-2 ml-4">
          <span className={cn(
            'px-2 py-1 text-xs font-medium rounded-md',
            getStatusColor(decision.status)
          )}>
            {getStatusLabel(decision.status)}
          </span>
          <ChevronRight className="w-4 h-4 text-textSecondary group-hover:text-primary transition-colors duration-200" />
        </div>
      </div>
      
      {variant === 'detailed' && (
        <div className="space-y-3">
          <div className="flex items-center space-x-4 text-sm text-textSecondary">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{formatDate(decision.createdAt)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Target className="w-4 h-4" />
              <span>{decision.scenarios.length} scenarios</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>Team decision</span>
            </div>
          </div>
          
          {decision.recommendations.length > 0 && (
            <div className="pt-3 border-t border-surface">
              <p className="text-sm text-textSecondary">
                <span className="font-medium">{decision.recommendations.length}</span> AI recommendations available
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
