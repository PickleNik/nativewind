export default function WhyNativewindSection() {
  return (
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
  )
}