import Link from 'next/link';

export default function FunStuff() {
  return (
    <div className="min-h-screen bg-paper text-fg">
      <div className="mx-auto w-full max-w-[760px] px-4 py-8 sm:px-6 sm:py-12">
        <h1 className="font-serif text-40 font-normal text-fg sm:text-56">Fun Stuff</h1>
        <p className="mt-6 max-w-[560px] text-20 text-fg">
          I like long walks, reading, anime, shopping, and coffee, and I&apos;m learning piano. I&apos;ve been
          watching Industry. Comfort food is Mexican and Mediterranean. Big Pita Way fan.
        </p>
        <p className="mt-10 sm:mt-12">
          <Link href="/" className="text-link inline-flex items-center gap-2 text-14">
            <span aria-hidden>←</span>
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
