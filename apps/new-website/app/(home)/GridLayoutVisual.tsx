export default function GridLayoutVisual() {
  return (
    <div className="w-[calc(100%-2rem)] h-[calc(100%-4rem)] mx-auto mt-auto mb-4 grid grid-cols-[repeat(2,var(--size))] grid-rows-[repeat(3,var(--size))] gap-2 sm:grid-cols-[repeat(3,var(--size))] sm:grid-rows-[repeat(2,var(--size))]">
      <div className="bg-black/2 dark:bg-white/2 col-span-2 row-span-1 overflow-hidden rounded-t-xl sm:col-span-1 sm:row-span-2 sm:rounded-t-md sm:rounded-tl-xl dark:outline dark:outline-white/10 rounded-md" />
      <div className="relative sm:rounded-tr-xl dark:outline dark:outline-white/10 rounded-md" />
      <div className="relativ dark:outline dark:outline-white/10 rounded-md" />
      <div className="relative col-span-2 overflow-hidden rounded-b-xl dark:outline dark:outline-white/10 rounded-md" />
    </div>
  );
}