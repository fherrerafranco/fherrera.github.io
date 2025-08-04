import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-heading font-bold text-primary-800 dark:text-primary-300 border-b-2 border-primary-200 dark:border-primary-700 pb-2 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}