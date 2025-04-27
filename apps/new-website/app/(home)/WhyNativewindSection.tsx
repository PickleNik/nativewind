import CSSAnimationVisual from "./CSSAnimationVisual";
import SectionLink from "./SectionLink";
import WhyNativewindCard from "./WhyNativeWindCard";

export default function WhyNativewindSection() {
  return (
    <section id="why-nativewind" className="relative flex flex-col w-full max-w-fd-container mx-auto -mt-[1px] border-y border-dashed">      
      <SectionLink className="-mb-5 -translate-y-full" href="#why-nativewind" name="why NativeWind?" />

      <div className="flex-1 flex w-full">
        <WhyNativewindCard title="Dark/Light mode" number="00" color="cyan" />
        <div className="border-r border-dashed -mx-[0.5px]"/>
        <WhyNativewindCard title="Grid Layout" number="01" color="pink" />
      </div>
      <div className="border-b border-dashed -my-[0.5px]"/>
      <div className="flex-1 flex w-full">
        <WhyNativewindCard title="CSS Variables" number="03" color="orange" />
        <div className="border-r border-dashed -mx-[0.5px]"/>
        <WhyNativewindCard title="CSS Animations" number="04" color="purple" visual={
          <CSSAnimationVisual />
        } />
      </div>
    </section>
  )
}