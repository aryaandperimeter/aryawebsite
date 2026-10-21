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
  return (
    <div className="relative min-h-screen bg-ink text-white">
      <div className="mx-auto max-w-3xl px-6 py-14 md:px-8 md:py-20">
        <header className="mb-10 text-center md:mb-12">
          <h1 className="text-4xl font-semibold text-white md:text-5xl">Hobbies &amp; interests</h1>
        </header>

        <section className="mb-12 md:mb-14" aria-labelledby="hobbies-anime">
          <h2
            id="hobbies-anime"
            className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400"
          >
            Anime I&apos;ve watched
          </h2>
          <div className="grid gap-0 sm:grid-cols-2 sm:gap-x-14">
            {anime.map((name, i) => (
              <div
                key={name}
                className="flex items-baseline gap-5 border-b border-white/10 py-4"
              >
                <span className="w-8 shrink-0 font-mono text-sm text-zinc-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg text-zinc-200">{name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10" aria-labelledby="hobbies-active">
          <h2
            id="hobbies-active"
            className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400"
          >
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
