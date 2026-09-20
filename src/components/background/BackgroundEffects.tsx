import GradientOrb from "./GradientOrb";
import GridPattern from "./GridPattern";
import NoiseTexture from "./NoiseTexture";

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <GridPattern />

      <GradientOrb className="left-[-150px] top-[-120px] h-[420px] w-[420px] bg-blue-500/30" />

      <GradientOrb className="right-[-180px] top-40 h-[520px] w-[520px] bg-cyan-400/20" />

      <GradientOrb className="bottom-[-250px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 bg-indigo-500/20" />

      <NoiseTexture />
    </div>
  );
}
