import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import WhyNativewindSection from "./WhyNativewindSection";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-1 flex-col justify-center text-center border-x border-dashed">
        <div className="fixed max-w-fd-container lg:w-[calc(100%-1rem)] box-content lg:border-x border-dashed top-0 left-1/2 -translate-x-1/2 h-screen pointer-events-none" />
        <HeroSection />
        <WhyNativewindSection />
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
      <FooterSection />
    </>
  );
}
