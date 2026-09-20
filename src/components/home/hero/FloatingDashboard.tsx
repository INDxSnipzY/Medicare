"use client";

import { Activity, Brain, HeartPulse, Pill } from "lucide-react";

import DashboardCard from "./DashboardCard";

export default function FloatingDashboard() {
  return (
    <div className="relative hidden h-[620px] lg:block">
      <div className="absolute left-0 top-12 w-64">
        <DashboardCard
          icon={<HeartPulse className="h-6 w-6" />}
          title="Diseases"
          value="10,000+"
          subtitle="Total Diseases discovered"
          delay={0.1}
        />
      </div>

      <div className="absolute right-0 top-0 w-56">
        <DashboardCard
          icon={<Brain className="h-6 w-6" />}
          title="AI Assistant"
          value="Currently offline"
          subtitle="Ask health questions"
          delay={0.2}
        />
      </div>

      <div className="absolute left-10 bottom-0 w-56">
        <DashboardCard
          icon={<Activity className="h-6 w-6" />}
          title="BMI"
          value="22.4"
          subtitle="Healthy range"
          delay={0.3}
        />
      </div>

      <div className="absolute right-8 bottom-24 w-64">
        <DashboardCard
          icon={<Pill className="h-6 w-6" />}
          title="Medicines"
          value="34,000+"
          subtitle="Total Different types of Medicines available"
          delay={0.4}
        />
      </div>
    </div>
  );
}
