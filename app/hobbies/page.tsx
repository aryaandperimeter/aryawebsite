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

export default function HobbiesPage() {
  const marqueeItems = [...anime, ...anime];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050508] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute top-[12%] -left-32 h-[28rem] w-[28rem] rounded-full bg-fuchsia-600/[0.28] blur-[100px]" />
        <div className="absolute bottom-[8%] -right-24 h-[22rem] w-[22rem] rounded-full bg-cyan-400/[0.22] blur-[88px]" />
        <div className="absolute top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.2] blur-[120px]" />
      </div>
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.55]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16 lg:py-20">
        <header className="mb-16 flex flex-col gap-10 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p
              className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300 md:text-base"
              style={{ textShadow: '0 0 24px rgba(34, 211, 238, 0.45)' }}
            >
              Off the clock
            </p>
            <h1 className="text-6xl font-black leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl">
              <span
                className="bg-gradient-to-br from-white via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(217, 70, 239, 0.35)) drop-shadow(0 0 28px rgba(34, 211, 238, 0.25))',
                }}
              >
                Hobbies
              </span>
              <span
                className="mt-2 block bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl"
                style={{ filter: 'drop-shadow(0 0 18px rgba(244, 114, 244, 0.4))' }}
              >
                &amp; interests
              </span>
            </h1>
            <p className="mt-8 max-w-lg border-l-4 border-fuchsia-500 pl-5 text-lg italic leading-relaxed text-purple-100/95 md:text-xl md:leading-relaxed">
              Stuff I do for fun!
            </p>
          </div>
          <nav
            className="hidden shrink-0 flex-col items-end gap-2 font-mono text-sm text-cyan-400/70 md:flex"
            aria-hidden
          >
            <span className="text-fuchsia-400/80">/watch</span>
            <span className="text-cyan-300/80">/read</span>
            <span className="text-violet-300/80">/move</span>
          </nav>
        </header>

        <section className="mb-16 md:mb-20" aria-labelledby="hobbies-anime">
          <div className="mb-8 flex flex-wrap items-baseline justify-between gap-4">
            <h2
              id="hobbies-anime"
              className="text-base font-bold uppercase tracking-[0.2em] text-fuchsia-200 md:text-lg"
              style={{ textShadow: '0 0 20px rgba(232, 121, 249, 0.5)' }}
            >
              Anime I&apos;ve watched
            </h2>
            <span className="font-mono text-sm text-cyan-400/90">scroll →</span>
          </div>

          <div
            className="relative -mx-5 overflow-hidden py-3 [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] md:-mx-8"
            aria-label="Anime titles marquee"
          >
            <div className="flex w-max hobbies-marquee-track gap-12 pr-12">
              {marqueeItems.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="flex shrink-0 items-center gap-12 text-xl font-bold tracking-tight text-white md:text-2xl lg:text-3xl"
                  style={{ textShadow: '0 0 20px rgba(255, 0, 255, 0.25), 0 0 32px rgba(34, 211, 238, 0.15)' }}
                >
                  <span>{name}</span>
                  <span className="text-fuchsia-400" aria-hidden>
                    ✦
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-0 sm:grid-cols-2 sm:gap-x-14">
            {anime.map((name, i) => (
              <div
                key={name}
                className="group flex items-baseline gap-5 border-b border-cyan-400/15 py-5 transition-colors hover:border-fuchsia-400/40"
              >
                <span className="w-10 shrink-0 font-mono text-base font-bold tabular-nums text-cyan-400 md:text-lg">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-lg font-medium text-gray-100 transition-colors group-hover:text-fuchsia-200 md:text-xl">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          className="relative my-16 border-y-2 border-fuchsia-500/50 bg-gradient-to-b from-fuchsia-950/25 via-black/40 to-cyan-950/20 py-20 shadow-[0_0_60px_rgba(217,70,239,0.12)] md:my-20 md:py-24"
          aria-labelledby="hobbies-books"
        >
          <div className="pointer-events-none absolute left-4 top-6 font-serif text-8xl leading-none text-fuchsia-400/35 md:left-8 md:top-8 md:text-9xl">
            &ldquo;
          </div>
          <div className="relative px-3 md:px-8">
            <h2
              id="hobbies-books"
              className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300 md:text-base"
              style={{ textShadow: '0 0 16px rgba(34, 211, 238, 0.4)' }}
            >
              Favorite book series
            </h2>
            <p
              className="bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-5xl font-semibold leading-tight tracking-tight text-transparent md:text-6xl lg:text-7xl"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(236, 72, 153, 0.35))',
              }}
            >
              Throne of Glass
            </p>
          </div>
        </section>

        <section className="mb-16 md:mb-20" aria-labelledby="hobbies-active">
          <h2
            id="hobbies-active"
            className="mb-10 text-base font-bold uppercase tracking-[0.2em] text-fuchsia-200 md:text-lg"
            style={{ textShadow: '0 0 20px rgba(232, 121, 249, 0.5)' }}
          >
            How I recharge
          </h2>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div
              className="-rotate-1 rounded-[1.5rem] border-2 border-dashed border-cyan-400 bg-gradient-to-br from-cyan-950/50 via-cyan-950/20 to-transparent p-8 transition-transform hover:-rotate-0 md:p-10"
              style={{ boxShadow: '0 0 28px rgba(34, 211, 238, 0.25), 0 20px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)' }}
            >
              <FaWalking className="mb-5 h-12 w-12 text-cyan-300 md:h-14 md:w-14" style={{ filter: 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.7))' }} aria-hidden />
              <h3 className="text-2xl font-bold text-cyan-50 md:text-3xl" style={{ textShadow: '0 0 24px rgba(34, 211, 238, 0.45)' }}>
                Loooong walks
              </h3>
            </div>
            <div
              className="rotate-1 rounded-[1.5rem] border-2 border-dashed border-fuchsia-400 bg-gradient-to-br from-fuchsia-950/50 via-fuchsia-950/20 to-transparent p-8 transition-transform hover:rotate-0 md:p-10"
              style={{ boxShadow: '0 0 28px rgba(232, 121, 249, 0.28), inset 0 1px 0 rgba(255,255,255,0.08)' }}
            >
              <FaDumbbell className="mb-5 h-12 w-12 text-fuchsia-300 md:h-14 md:w-14" style={{ filter: 'drop-shadow(0 0 12px rgba(232, 121, 249, 0.65))' }} aria-hidden />
              <h3 className="text-2xl font-bold text-fuchsia-50 md:text-3xl" style={{ textShadow: '0 0 24px rgba(232, 121, 249, 0.45)' }}>
                Lifting
              </h3>
            </div>
            <div
              className="-rotate-1 rounded-[1.5rem] border-2 border-dashed border-violet-400 bg-gradient-to-br from-violet-950/50 via-violet-950/25 to-transparent p-8 transition-transform hover:-rotate-0 md:p-10"
              style={{ boxShadow: '0 0 28px rgba(167, 139, 250, 0.28), inset 0 1px 0 rgba(255,255,255,0.08)' }}
            >
              <FaPodcast className="mb-5 h-12 w-12 text-violet-300 md:h-14 md:w-14" style={{ filter: 'drop-shadow(0 0 12px rgba(167, 139, 250, 0.65))' }} aria-hidden />
              <h3 className="text-2xl font-bold text-violet-50 md:text-3xl" style={{ textShadow: '0 0 24px rgba(167, 139, 250, 0.45)' }}>
                Podcasts
              </h3>
            </div>
            <div
              className="rotate-1 rounded-[1.5rem] border-2 border-dashed border-cyan-300 bg-gradient-to-br from-fuchsia-950/30 via-cyan-950/35 to-transparent p-8 transition-transform hover:rotate-0 md:p-10"
              style={{ boxShadow: '0 0 28px rgba(34, 211, 238, 0.2), 0 0 20px rgba(217, 70, 239, 0.15), inset 0 1px 0 rgba(255,255,255,0.08)' }}
            >
              <SiTiktok className="mb-5 h-12 w-12 text-cyan-200 md:h-14 md:w-14" style={{ filter: 'drop-shadow(0 0 12px rgba(34, 211, 238, 0.55))' }} aria-hidden />
              <h3 className="text-2xl font-bold text-white md:text-3xl" style={{ textShadow: '0 0 20px rgba(244, 114, 244, 0.35), 0 0 28px rgba(34, 211, 238, 0.2)' }}>
                TikTok
              </h3>
            </div>
          </div>
        </section>

        <div className="text-center">
          <BackButton href="/" text="Back to Home" />
        </div>
      </div>
    </div>
  );
}
