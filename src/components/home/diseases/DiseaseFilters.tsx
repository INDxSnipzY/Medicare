"use client";

const filters = [
  "All",
  "Cardiology",
  "Neurology",
  "Respiratory",
  "Endocrinology",
];

interface DiseaseFiltersProps {
  active: string;
  onChange: (value: string) => void;
}

export default function DiseaseFilters({
  active,
  onChange,
}: DiseaseFiltersProps) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`rounded-full px-5 py-2 text-sm font-medium transition ${
            active === filter
              ? "bg-primary text-primary-foreground"
              : "border border-border bg-background hover:bg-muted"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
