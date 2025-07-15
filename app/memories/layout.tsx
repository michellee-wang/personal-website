import { Metadata } from 'next';
import { getGT } from 'gt-next/server';

const getMetadata = (t: (content: string) => string): Metadata => {
  return {
    title: t('Memories | Michelle Wang'),
    description: t('Memories and moments from my senior year with friends'),
  };
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getGT();
  return getMetadata(t);
}

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