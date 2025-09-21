import { AppShell } from '@/components/layout/AppShell';
import { Dashboard } from '@/components/features/Dashboard';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return (
    <AppShell variant="miniapp">
      <Dashboard />
    </AppShell>
  );
}
