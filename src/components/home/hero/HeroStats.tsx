const stats = [
  {
    value: "25K+",
    label: "Diseases",
  },
  {
    value: "15K+",
    label: "Medicines",
  },
  {
    value: "99%",
    label: "Trusted References",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-10 flex flex-wrap gap-8">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-3xl font-bold">{stat.value}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
