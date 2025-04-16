'use client';

export default function TitleBackground() {
  return (
    <div 
      className="absolute inset-0 -z-10 overflow-hidden rounded-2xl bg-cover bg-center"
      style={{ backgroundImage: 'url(/cyberpunk-city.jpg)' }}
    />
  );
} 