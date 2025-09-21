import { AppShell } from '@/components/layout/AppShell';
import { Dashboard } from '@/components/features/Dashboard';

export default function HomePage() {
  return (
    <AppShell variant="miniapp">
      <Dashboard />
    </AppShell>
  );
}
