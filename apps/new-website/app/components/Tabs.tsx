'use client';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { SquareChevronRight } from 'lucide-react';

export function GlobalTabs({
  children,
  // manual,
  // cli,
}: {
  children: ReactNode;
  // manual: ReactNode;
  // cli: ReactNode;
}) {
  const [tab, setTab] = useState<'cli' | 'manual'>('cli');

  return (
    <>
      {/* Tabs */}
      <div className="relative mb-5 flex gap-4">
        <div
          className={`absolute bottom-0 h-0.5 w-16 rounded-full bg-blue-500 duration-300 ${tab === 'manual' && 'translate-x-20'}`}
        />
        <button
          onClick={() => setTab('cli')}
          className={`relative flex h-10 w-16 items-center justify-center gap-1 border-b-2 border-transparent py-2 font-medium ${tab === 'cli' ? 'text-blue-500' : 'text-neutral-600 duration-300 hover:border-neutral-800 hover:text-black dark:text-neutral-400 dark:hover:border-neutral-200 dark:hover:text-white'}`}>
          <SquareChevronRight className="h-4 w-4 stroke-[2.5]" />
          CLI
        </button>
        <button
          onClick={() => setTab('manual')}
          className={`relative h-10 w-16 border-b-2 border-transparent py-2 font-medium ${tab === 'manual' ? 'pb-2.5 text-blue-500' : 'text-neutral-600 duration-300 hover:border-neutral-800 hover:text-black dark:text-neutral-400 dark:hover:border-neutral-200 dark:hover:text-white'}`}>
          Manual
        </button>
        <div className="absolute bottom-0 -z-10 h-[2px] w-full bg-gradient-to-r from-neutral-300 to-transparent dark:from-neutral-700 dark:to-transparent" />
      </div>
      {/* Contents */}
      <div className="relative mb-8 overflow-hidden">
        {/* cli steps tab content */}
        <div
          className={`flex flex-col duration-300 ${tab === 'manual' && 'pointer-events-none absolute left-0 top-0 w-full -translate-x-12 scale-95 opacity-0'}`}>
          {/* {cli} */}
          {children}
        </div>

        {/* manual steps tab content */}
        <div
          className={`flex flex-col duration-300 ${tab === 'cli' && 'pointer-events-none absolute left-0 top-0 w-full translate-x-12 scale-95 opacity-0'}`}>
          {/* {manual} */}
          {children}
        </div>
      </div>
    </>
  );
}
