'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const STAR_POINTS = '50,2 62,34 96,34 69,55 79,90 50,70 21,90 31,55 4,34 38,34';
const STAR_COLORS = ['text-fg', 'text-forest', 'text-accent'];

type BurstStar = {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  spin: number;
  color: string;
};

export default function FunStuffButton() {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<number>();
  const [stars, setStars] = useState<BurstStar[]>([]);

  const openFun = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      router.push('/fun');
      return;
    }

    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth / 2;
    const y = rect ? rect.top + rect.height / 2 : window.innerHeight / 2;

    setStars(
      Array.from({ length: 46 }, (_, index) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 150 + Math.random() * 420;
        return {
          id: Date.now() + index,
          x,
          y,
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance + 90,
          size: 12 + Math.random() * 26,
          spin: (Math.random() > 0.5 ? 1 : -1) * (200 + Math.random() * 520),
          color: STAR_COLORS[index % STAR_COLORS.length],
        };
      }),
    );

    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setStars([]);
      router.push('/fun');
    }, 1100);
  };

  return (
    <>
      {stars.map((star) => (
        <svg
          key={star.id}
          className={`star-confetti ${star.color}`}
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            ['--dx' as string]: `${star.dx}px`,
            ['--dy' as string]: `${star.dy}px`,
            ['--spin' as string]: `${star.spin}deg`,
          }}
          viewBox="0 0 100 100"
          aria-hidden
        >
          <polygon points={STAR_POINTS} fill="currentColor" />
        </svg>
      ))}
      <button ref={buttonRef} type="button" onClick={openFun} className="btn btn-secondary">
        Fun Stuff
      </button>
    </>
  );
}
