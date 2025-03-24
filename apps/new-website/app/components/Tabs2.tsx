'use client';
import { useState } from 'react';
import type { ReactNode } from 'react';
import { SquareChevronRight } from 'lucide-react';
import React from 'react';

export function GlobalTabs2({ children }: { children: ReactNode }) {
  const [tab, setTab] = useState<'cli' | 'manual'>('cli');

  return (
    <TabsContext.Provider value={{ tab, setTab }}>{children}</TabsContext.Provider>
  );
}

const TabsContext = React.createContext<{
  tab: 'cli' | 'manual';
  setTab: (tab: 'cli' | 'manual') => void;
} | null>(null);

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="relative mb-5 flex gap-4">{children}</div>;
}

export function TabsTrigger({ type }: { type: 'cli' | 'manual' }) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('TabsTrigger must be used within a Tabs component');

  const { tab, setTab } = context;
  const isActive = tab === type;

  return (
    <button
      onClick={() => setTab(type)}
      className={`relative flex h-10 w-16 items-center justify-center gap-1 border-b-2 border-transparent py-2 font-medium ${
        isActive
          ? 'text-blue-500'
          : 'text-neutral-600 duration-300 hover:border-neutral-800 hover:text-black dark:text-neutral-400 dark:hover:border-neutral-200 dark:hover:text-white'
      }`}
    >
      {type === 'cli' && <SquareChevronRight className="h-4 w-4 stroke-[2.5]" />}
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  );
}

export function TabsContent({ type, children }: { type: 'cli' | 'manual'; children: ReactNode }) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error('TabsContent must be used within a Tabs component');

  const { tab } = context;
  const isActive = tab === type;

  return (
    <div
      className={`flex flex-col duration-300 ${
        !isActive && 'pointer-events-none absolute left-0 top-0 w-full -translate-x-12 scale-95 opacity-0'
      }`}
    >
      {children}
    </div>
  );
}

export const Primitive = { GlobalTabs2, TabsList, TabsTrigger, TabsContent };
