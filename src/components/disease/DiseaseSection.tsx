interface DiseaseSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function DiseaseSection({
  id,
  title,
  children,
}: DiseaseSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-10">
      <h2 className="mb-6 text-3xl font-bold tracking-tight">{title}</h2>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {children}
      </div>
    </section>
  );
}
