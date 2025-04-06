import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Memories | Michelle Wang',
  description: 'Memories and moments from my senior year with friends',
};

export default function MemoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
} 