import { Globe, Laptop, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">

      <div className="fixed container border top-20 left-1/2 -translate-x-1/2 h-screen rounded-t-2xl"/>
        
      <div className="absolute -z-10 inset-0 w-full h-full [mask-image:linear-gradient(to_bottom,red,transparent_55%)] overflow-x-clip">
        <div className="-z-10 bg-gradient-to-b from-pink-200 to-orange-200 dark:from-neutral-800 dark:to-neutral-800 rounded-full w-[55rem] h-[55rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border dark:blur-3xl"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-[14rem] h-[33rem] rounded-[100%] border-[1rem] border-cyan-500"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-z-30 rotate-x-66 w-[33rem] h-[33rem] rounded-[100%] p-4 animate-react-rotate bg-gradient-to-r from-cyan-200 from-0% to-10% to-transparent">
          <div className="w-full h-full bg-white dark:bg-black rounded-[100%]"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-30 w-[14rem] h-[33rem] rounded-[100%] border-[1rem] border-cyan-500"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-30 w-[14rem] h-[33rem] rounded-[100%] border-[1rem] border-cyan-500"></div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24"><g clipPath="url(#prefix__clip0)"><path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg>
        <div className="bg-grid-dots rounded-full w-[55rem] h-[55rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(red,transparent_80%)]"></div>
      </div>
      <div className="-z-10 h-24 w-[33rem] bg-cyan-500/50 rounded-[100%] max-w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl "></div>
      <h1 className="mb-4 text-4xl lg:text-8xl font-bold opacity-50 bg-gradient-to-br from-cyan-500 to-cyan-800 bg-clip-text text-transparent dark:from-white">NativeWind</h1>
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
      {/* Feature Cards */}
      <div className=" mx-auto flex flex-wrap justify-center absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-32 gap-8">
        <div className="p-4 gap-2 flex w-64 text-left bg-fd-muted/20 rounded-2xl border">
          <Globe className="size-4 text-fd-muted-foreground" />
          <span className="text-fd-muted-foreground ml-2 text-sm flex-1/2">
            <b>Universal</b> Uses the best style system for each platform
          </span>
        </div>
        <div className="p-4 gap-2 flex w-64 text-left bg-fd-muted/20 rounded-2xl border">
          <Laptop className="size-4 text-fd-muted-foreground" />
          <span className="text-fd-muted-foreground ml-2 text-sm flex-1/2">
            <b>DevUX</b> Plugins for simple setup and improving intellisense support
          </span>
        </div>
        <div className="p-4 gap-2 flex w-64 text-left bg-fd-muted/20 rounded-2xl border">
          <Globe className="size-4 text-fd-muted-foreground" />
          <span className="text-fd-muted-foreground ml-2 text-sm flex-1/2">
            Universal Uses the best style system for each platform
          </span>
        </div>
        <div className="p-4 gap-2 flex w-64 text-left bg-fd-muted/20 rounded-2xl border">
          <Sparkles className="size-4 text-fd-muted-foreground" />
          <span className="text-fd-muted-foreground ml-2 text-sm flex-1/2">
            <b>Media & Container queries</b> Use modern mobile styling features like media and container queries (docs)
          </span>
        </div>
        <div className="p-4 gap-2 flex w-64 text-left bg-fd-muted/20 rounded-2xl border">
          <Globe className="size-4 text-fd-muted-foreground" />
          <span className="text-fd-muted-foreground ml-2 text-sm flex-1/2">
            Universal Uses the best style system for each platform
          </span>
        </div>
      </div>
    </main>
  );
}
