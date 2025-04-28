export default function DarkModeVisual() {
  return (
    <div className="flex flex-col justify-end p-4 gap-4 w-full h-full">
      <div className="group-hover:bg-cyan-500/30 bg-black/5 dark:bg-cyan-400/3 border border-dashed group-hover:border-cyan-400/20 duration-300 rounded-full w-8 h-8" />
      <div className="bg-black/5 group-hover:bg-cyan-500/20 dark:bg-cyan-400/2 border border-dashed border-cyan-400/20 duration-300 rounded-xl p-4 w-full h-[69%]" />
      <div className="flex gap-4 justify-end">
        <div className="bg-black/5 group-hover:bg-cyan-500/15 dark:bg-cyan-400/5 border border-dashed border-cyan-400/20 duration-300 rounded-xl w-12 h-8" />
        <div className="bg-black/5 group-hover:bg-cyan-500/15 dark:bg-cyan-400/5 border border-dashed border-cyan-400/20 duration-300 rounded-xl w-12 h-8" />
      </div>
    </div>
  );
}