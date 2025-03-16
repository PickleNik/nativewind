import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <div className="absolute -z-10 inset-0 w-full h-full [mask-image:linear-gradient(to_bottom,red,transparent_55%)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-[14rem] h-[33rem] rounded-[100%] border-[1rem] border-cyan-500"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-30 w-[14rem] h-[33rem] rounded-[100%] border-[1rem] border-cyan-500"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-30 w-[14rem] h-[33rem] rounded-[100%] border-[1rem] border-cyan-500"></div>
      </div>
      <div className="-z-10 h-24 w-[33rem] bg-cyan-500/50 rounded-[100%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse "></div>
      <h1 className="mb-4 text-4xl lg:text-8xl font-bold opacity-50">NativeWind</h1>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
