'use client';

import { cn } from '@/lib/utils';
import { Recommendation } from '@/lib/types';
import { Brain, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface AIRecommendationSnippetProps {
  recommendation: Recommendation;
  variant?: 'short' | 'expanded';
  className?: string;
}

export function AIRecommendationSnippet({ 
  recommendation, 
  variant = 'short',
  className 
}: AIRecommendationSnippetProps) {
  const [isExpanded, setIsExpanded] = useState(variant === 'expanded');
  
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-accent';
    if (confidence >= 0.6) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className={cn('card border-l-4 border-l-primary', className)}>
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
          <Brain className="w-4 h-4 text-primary" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-textPrimary">AI Recommendation</span>
              <span className={cn(
                'text-xs font-medium',
                getConfidenceColor(recommendation.confidence)
              )}>
                {Math.round(recommendation.confidence * 100)}% confidence
              </span>
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-surface rounded transition-colors duration-200"
            >
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-textSecondary" />
              ) : (
                <ChevronDown className="w-4 h-4 text-textSecondary" />
              )}
            </button>
          </div>
          
          <p className="text-body text-textPrimary mb-3">
            {recommendation.content}
          </p>
          
          {isExpanded && (
            <div className="space-y-3 animate-slide-up">
              <div>
                <h4 className="text-sm font-medium text-textSecondary mb-1">Explanation</h4>
                <p className="text-sm text-textSecondary leading-relaxed">
                  {recommendation.explanation}
                </p>
              </div>
              
              {recommendation.tags.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-textSecondary mb-2">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {recommendation.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-surface text-xs text-textSecondary rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
