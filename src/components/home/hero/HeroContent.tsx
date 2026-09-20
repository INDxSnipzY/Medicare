import HeroBadge from "./HeroBadge";
import HeroSearch from "./HeroSearch";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">
      <HeroBadge />

      <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
        Find trusted answers
        <br />
        for every{" "}
        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
          health concern
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
        Search diseases, symptoms, medicines, doctors and hospitals — all in one
        trusted platform designed to help you make informed health decisions.
      </p>

      <HeroSearch />

      <HeroButtons />

      <HeroStats />
    </div>
  );
}
