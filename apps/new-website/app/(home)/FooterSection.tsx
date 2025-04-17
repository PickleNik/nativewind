export default function FooterSection() {
  return (
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
  )
}