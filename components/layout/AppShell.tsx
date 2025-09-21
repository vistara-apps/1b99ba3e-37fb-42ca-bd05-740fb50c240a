'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { APP_CONFIG } from '@/lib/constants';
import { Brain, Menu, Bell, User } from 'lucide-react';

interface AppShellProps {
  children: ReactNode;
  variant?: 'default' | 'miniapp';
  className?: string;
}

export function AppShell({ children, variant = 'default', className }: AppShellProps) {
  const isMiniApp = variant === 'miniapp';

  return (
    <div className={cn(
      'min-h-screen bg-bg text-textPrimary',
      isMiniApp && 'pb-safe-area-inset-bottom',
      className
    )}>
      {/* Header */}
      <header className={cn(
        'sticky top-0 z-50 bg-surface/80 backdrop-blur-sm border-b border-surface',
        isMiniApp && 'pt-safe-area-inset-top'
      )}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-textPrimary">
                  {APP_CONFIG.name}
                </h1>
                <p className="text-xs text-textSecondary">
                  {APP_CONFIG.tagline}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-surface rounded-md transition-colors duration-200">
                <Bell className="w-5 h-5 text-textSecondary" />
              </button>
              <button className="p-2 hover:bg-surface rounded-md transition-colors duration-200">
                <User className="w-5 h-5 text-textSecondary" />
              </button>
              {isMiniApp && (
                <button className="p-2 hover:bg-surface rounded-md transition-colors duration-200 md:hidden">
                  <Menu className="w-5 h-5 text-textSecondary" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 py-6">
          {children}
        </div>
      </main>

      {/* Footer for Mini App */}
      {isMiniApp && (
        <footer className="bg-surface/50 border-t border-surface mt-auto">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <p className="text-xs text-textSecondary text-center">
              Powered by Base • Built with MiniKit
            </p>
          </div>
        </footer>
      )}
    </div>
  );
}
