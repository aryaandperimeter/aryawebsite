import { FaDumbbell, FaPodcast, FaWalking } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import BackButton from '../components/BackButton';

const anime = [
  'JJK',
  'Attack on Titan',
  'Cyberpunk: Edgerunners',
  'Fullmetal Alchemist',
  'The Promised Neverland',
  'Erased',
];

const activities = [
  { label: 'Loooong walks', icon: FaWalking },
  { label: 'Lifting', icon: FaDumbbell },
  { label: 'Podcasts', icon: FaPodcast },
  { label: 'TikTok', icon: SiTiktok },
];

export default function HobbiesPage() {
  const marqueeItems = [...anime, ...anime];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink bg-grid text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_55%_35%_at_50%_0%,rgba(94,234,212,0.07),transparent)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16 lg:py-20">
        <header className="mb-14 md:mb-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-accent/80">
            Off the clock
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Hobbies &amp; interests
          </h1>
          <p className="mt-6 max-w-lg text-lg text-zinc-400">Stuff I do for fun!</p>
        </header>

        <section className="mb-16 md:mb-20" aria-labelledby="hobbies-anime">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <h2
              id="hobbies-anime"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400"
            >
              Anime I&apos;ve watched
            </h2>
            <span className="font-mono text-xs text-zinc-500">scroll →</span>
          </div>

          <div
            className="relative -mx-5 overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] md:-mx-8"
            aria-label="Anime titles marquee"
          >
            <div className="flex w-max hobbies-marquee-track gap-12 pr-12">
              {marqueeItems.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="flex shrink-0 items-center gap-12 text-xl font-semibold tracking-tight text-zinc-300 md:text-2xl"
                >
                  <span>{name}</span>
                  <span className="text-accent/70" aria-hidden>
                    ✦
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-0 sm:grid-cols-2 sm:gap-x-14">
            {anime.map((name, i) => (
              <div
                key={name}
                className="group flex items-baseline gap-5 border-b border-white/10 py-5"
              >
                <span className="w-8 shrink-0 font-mono text-sm text-zinc-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg text-zinc-200 transition-colors group-hover:text-accent">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 border-l-2 border-accent/60 py-2 pl-6 md:mb-20" aria-labelledby="hobbies-books">
          <h2 id="hobbies-books" className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-zinc-400">
            Favorite book series
          </h2>
          <p className="text-3xl font-semibold italic text-white md:text-4xl">
            Throne of Glass
          </p>
        </section>

        <section className="mb-16 md:mb-20" aria-labelledby="hobbies-active">
          <h2 id="hobbies-active" className="mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            How I recharge
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
            {activities.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-panel/50 p-6 text-center transition-colors hover:border-accent/35"
              >
                <Icon className="h-6 w-6 text-zinc-300" aria-hidden />
                <h3 className="text-sm font-medium text-zinc-200">{label}</h3>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <BackButton href="/" text="Back to Home" />
        </div>
      </div>
    </div>
  );
}
