import SectionLink from "./SectionLink";

export default function WhyNativewindSection() {
  return (
    <section className="relative flex flex-col w-full max-w-fd-container mx-auto -mt-[1px] border-y border-dashed">      
      {/* <svg className="absolute -left-[6.5px] -top-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg>
      <svg className="absolute -left-[6.5px] -bottom-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg>
      <svg className="absolute -right-[6.5px] -top-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg>
      <svg className="absolute -right-[6.5px] -bottom-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg> */}


      {/* <SectionLink className="-mb-8 z-10" href="#" name="why NativeWind?" /> */}

      <div className="flex-1 flex relative w-full box-content">
        {/* <svg className="absolute -left-[6.5px] -bottom-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg>
        <svg className="absolute -right-[6.5px] -bottom-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg>
        <svg className="absolute left-1/2 -translate-x-1/2 -bottom-[5.5px] z-[1]" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" vectorEffect="non-scaling-stroke"><path d="M6 0V12M0 6H12" stroke="currentColor"></path></svg> */}
        <div className="border-b border-dashed flex-1 box-content group relative overflow-clip">
          <div className="bg-grid-lines absolute inset-0 h-[110%] group-hover:translate-y-0 -translate-y-10 ease-out duration-1000 group-hover:opacity-50 opacity-20" />
          <div className="bg-gradient-to-b from-transparent via-transparent to-fd-primary absolute inset-0 opacity-5 group-hover:opacity-20 duration-300" />
          <div className="w-full h-full z-10 p-12 relative">
            <div className="w-full aspect-square rounded-3xl border bg-fd-background text-left text-fd-foreground/50">visual</div>
            <div className="text-4xl font-mono group-hover:text-fd-primary absolute bottom-8 right-8">
              [01]
            </div>
          </div>
        </div>
        <div className="border-l border-b border-dashed flex-1 box-content group relative overflow-clip">
        <div className="bg-grid-lines absolute inset-0 h-[110%] group-hover:translate-y-0 -translate-y-10 ease-out duration-1000 group-hover:opacity-50 opacity-20" />
          <div className="bg-gradient-to-b from-transparent via-transparent to-orange-400 absolute inset-0 opacity-5 group-hover:opacity-20 duration-300" />
          <div className="w-full h-full z-10 p-12 relative">
            <div className="w-full aspect-square rounded-3xl border bg-fd-background text-left text-fd-foreground/50">visual</div>
            <div className="text-4xl font-mono group-hover:text-orange-400 absolute bottom-8 right-8">
              [02]
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex w-full">
        <div className="border-r border-dashed flex-1 box-content relative overflow-clip group">
        <div className="bg-grid-lines absolute inset-0 h-[110%] group-hover:translate-y-0 -translate-y-10 ease-out duration-1000 group-hover:opacity-50 opacity-20" />
          <div className="bg-gradient-to-b from-transparent via-transparent to-pink-400 absolute inset-0 opacity-5 group-hover:opacity-20 duration-300" />
          <div className="w-full h-full z-10 p-12 relative">
            <div className="w-full aspect-square rounded-3xl border bg-fd-background text-left text-fd-foreground/50">visual</div>
            <div className="text-4xl font-mono group-hover:text-pink-400 absolute bottom-8 right-8">
              [03]
            </div>
          </div>
        </div>
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
  )
}