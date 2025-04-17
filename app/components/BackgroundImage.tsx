'use client';

export default function BackgroundImage() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 w-[300vw] -left-[100vw]">
        <img 
          src="/cyberpunk-city.jpg" 
          alt="Cyberpunk city background"
          className="w-full h-full object-cover"
          loading="eager"
          onError={(e) => {
            console.error('Image failed to load');
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
    </div>
  );
} 