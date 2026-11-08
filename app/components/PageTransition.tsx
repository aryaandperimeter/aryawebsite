'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-start bg-paper">
          <p className="wrap section-y font-serif text-20 text-muted">Loading</p>
        </div>
      )}
      <div className={isLoading ? 'opacity-0' : 'opacity-100'}>{children}</div>
    </>
  );
}
