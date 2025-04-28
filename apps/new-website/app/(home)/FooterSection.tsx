import { Logo } from "../assets";
import SectionLink from "./SectionLink";


export default function FooterSection() {
  return (
    <>
      <footer id="footer" className="relative w-full max-w-fd-container mx-auto text-fd-muted-foreground mt-32">
        <div className="-z-10 h-24 w-[33rem] bg-cyan-500/50 rounded-[100%] max-w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl "></div>
        <h1 className="absolute -z-10 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold opacity-50 bg-gradient-to-br from-black to-cyan-800 bg-clip-text text-transparent dark:from-white">NativeWind</h1>
        <SectionLink href="#footer" name="fooooter" />
        <div className="border-t -mt-[3px] bg-fd-background/50 backdrop-blur-lg w-full max-w-fd-container mx-auto p-12 grid grid-cols-2 sm:flex justify-around">
          
          <div className="flex-col gap-3 hidden sm:flex">
            <div className="flex gap-1 text-fd-foreground">
              <Logo />
              <b>NativeWind</b>
            </div>
            <div className="text-xs">
              <div className="inline-block -scale-x-100 mr-1">©</div>
              Copyleft {new Date().getFullYear()}
            </div>
          </div>

          <div className="flex flex-col gap-3 text-xs lg:text-sm">
            <b className="text-fd-foreground font-semibold">Learn</b>
            <a>Documentation</a>
            <a>Showcase</a>
            <a>Blog</a>
            <a>Playground</a>
          </div>

          <div className="flex flex-col gap-3 text-xs lg:text-sm">
            <b className="text-fd-foreground font-semibold">Component Kits</b>
            <a>NativeWindUI</a>
            <a>React Native Reusables</a>
            <a>Gluestack</a>
          </div>
          {/* <div className="flex flex-col gap-3">
            <b className="text-fd-foreground font-semibold">Community</b>
            <a>Discord</a>
            <a>Github</a>
            <a>Twitter</a>
          </div> */}
          <div className="flex-col gap-3 flex sm:hidden mt-12">
            <div className="flex gap-1 text-fd-foreground">
              <Logo />
              <b>NativeWind</b>
            </div>
            <div className="text-xs">
              <div className="inline-block -scale-x-100 mr-1">©</div>
              Copyleft {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}