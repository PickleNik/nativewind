import Link from 'next/link';
import VectorField from './VectorField';
import { LargeSearchToggle } from '@/components/layout/search-toggle';

export default function HomePage() {
  return (
    <>
    <main className="flex flex-1 flex-col justify-center text-center border-x border-dashed">

      <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 -z-10 left-1/2 -translate-x-1/2 h-screen" />
      
      {/* <div className="absolute top-1/4 right-1/4 bg-gradient-to-r from-cyan-500/20 to-cyan-400 bg-clip-text text-transparent text-4xl perspective-dramatic scale-3d -rotate-z-30 rotate-x-60 scale-60">nw-text-cyan-500/80</div>
      <div className="absolute top-1/4 left-1/4 bg-gradient-to-r from-pink-400 to-pink-500/20 bg-clip-text text-transparent text-4xl perspective-dramatic scale-3d rotate-z-30 -rotate-x-60 scale-60">nw-text-pink-500/80</div> */}
        
      <div className="absolute -z-10 inset-0 w-full h-full [mask-image:linear-gradient(to_bottom,red,transparent_55%)] overflow-x-clip">
        <div className="-z-10 bg-gradient-to-b from-white to-white dark:from-neutral-800 dark:to-neutral-800 rounded-full w-[50rem] h-[50rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border dark:blur-3xl"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-[14rem] h-[33rem] rounded-[100%] border-[1rem] border-cyan-500"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-z-30 rotate-x-66 w-[33rem] h-[33rem] rounded-[100%] p-4 animate-react-rotate bg-gradient-to-r from-cyan-200 from-0% to-10% to-transparent">
          <div className="w-full h-full bg-white dark:bg-black rounded-[100%]"></div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-30 w-[14rem] h-[33rem] rounded-[100%] border-[1rem] border-cyan-500"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-30 w-[14rem] h-[33rem] rounded-[100%] border-[1rem] border-cyan-500"></div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24"><g clipPath="url(#prefix__clip0)"><path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" d="M0 0h54v32.4H0z"/></clipPath></defs></svg> */}
        <div className="bg-grid-dots rounded-full w-[50rem] h-[50rem] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(red,transparent_80%)]"></div>
      </div>
      <div className="-z-10 h-24 w-[33rem] bg-cyan-500/50 rounded-[100%] max-w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl "></div>

        <section className="flex flex-col min-h-screen justify-center box-content border-b border-fd-primary border-dashed overflow-clip">
      {/* <VectorField /> */}
          
      <h1 className="mb-4 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold opacity-50 bg-gradient-to-br from-black to-cyan-800 bg-clip-text text-transparent dark:from-white mt-32">NativeWind</h1>
      <span className="sticky w-full max-w-fd-container top-14 mx-auto text-fd-muted-foreground/50 text-sm text-left font-mono pl-1">
        what is nativewind?
      </span>
      <div className="flex justify-center border-y border-dashed relative"> 
        <p className="text-fd-muted-foreground text-pretty max-w-[40ch] text-center">
          {/* You can open{' '}
          <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
          >
          /docs
          </Link>{' '}
          and see the documentation.<br/> */}
          Do you like using Tailwind CSS to style your apps? This helps you do that in <a href="https://reactnative.dev/" className="font-bold underline decoration-fd-primary text-fd-accent-foreground underline-offset-2">React Native</a>.
        </p>
      </div>

      <div className="flex gap-4 justify-center mt-8 border-y border-dashed box-content">
        <LargeSearchToggle
          className="w-full max-w-[240px] -my-[1px]"
          onHeroSection
          hideIfDisabled
          />
        <Link href="/docs" className="group relative box-content pl-4 pr-2 py-2 -my-[1px] text-fd-background">
          <div className="">Get Started</div>
          <div className="-z-10 absolute top-0 left-0 h-[80%] w-full bg-fd-foreground/80 group-hover:translate-1 duration-300"/>
          <div className="-z-10 absolute top-0.5 left-0.5 h-[80%] w-full bg-fd-foreground/80 group-hover:translate-0.5 duration-300"/>
          <div className="-z-10 absolute top-1 left-1 h-[80%] w-full bg-fd-foreground/80 group-hover:scale-y-120 group-hover:bg-fd-foreground duration-300"></div>
          <div className="-z-10 absolute top-1.5 left-1.5 h-[80%] w-full bg-fd-foreground/80 group-hover:-translate-0.5 duration-300"/>
          <div className="-z-10 absolute top-2 left-2 h-[80%] w-full bg-fd-foreground/80 group-hover:-translate-1 duration-300"/>
        </Link>
      </div>
      </section>

        <section className="relative min-h-screen flex flex-col w-full max-w-fd-container mx-auto -mt-[1px]">
        <svg className="absolute -left-[6.5px] -top-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg>
        <svg className="absolute -left-[6.5px] -bottom-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg>
        <svg className="absolute -right-[6.5px] -top-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg>
        <svg className="absolute -right-[6.5px] -bottom-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg>
          <div className="flex-1 flex relative w-full">
        <svg className="absolute -left-[6.5px] -bottom-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg>
        <svg className="absolute -right-[6.5px] -bottom-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg>
        <svg className="absolute left-1/2 -translate-x-1/2 -bottom-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg>
          <div className="border-b border-dashed flex-1 box-content"></div>
          <div className="border-l border-b border-dashed flex-1 box-content"></div>
          </div>
          <div className="flex-1 flex w-full">
          <div className="border-r border-dashed flex-1 box-content"></div>
          <div className="flex-1 box-content"></div>
          </div>
      {/* Why NativeWind?
- Title
    - Focus on why NW, not why TW
- Subtitle
    - Focus on why NW, not why TW
- Show, don’t tell
    - Each item
        - (optional) Icon
        - Title
        - Description
        - Visual
    - Items, update visuals to focus on mobile */}
    </section>
    <section>
{/* How does NativeWind work?
- Title
- Subtitle
- Visual
    - Dan to come up with something for this  */}

      </section>
      <section>
      
{/* Who is using NativeWind?
- Title
- Subtitle
- Showcase of items
    - Item
        - Image
        - URL */}
</section>
      <section>
{/* Component Kits
- Title
- Subtitle
- Kits
    - Title
    - Description
    - Banner Image */}
      </section>
    </main>
      <footer className="relative w-full max-w-fd-container mx-auto text-fd-muted-foreground mt-32">
      <div className="-z-10 h-24 w-[33rem] bg-cyan-500/50 rounded-[100%] max-w-screen absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl "></div>
        <h1 className="absolute -z-10 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold opacity-50 bg-gradient-to-br from-black to-cyan-800 bg-clip-text text-transparent dark:from-white">NativeWind</h1>
        <div className="border-t bg-fd-background/50 backdrop-blur-lg w-full max-w-fd-container mx-auto my-4 p-12">

Footer
- Learn
    - Documentation
    - Showcase
    - Blog
    - Playground
- Component Kits
    - NativeWindUI
    - React Native Reusables
    - Gluestack
- Community
    - Discord
    - Github
    - Twitter
          <div className="text-xs"><div className="inline-block -scale-x-100">©</div> Copyleft {new Date().getFullYear()}</div>
          </div>
      </footer>
      </>
  );
}
