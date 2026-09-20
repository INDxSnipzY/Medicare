export default function NoiseTexture() {
  return (
    <div
      className="
        absolute inset-0
        opacity-[0.02]
        mix-blend-overlay
        bg-[url('/noise.png')]
      "
    />
  );
}
