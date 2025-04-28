import SectionLink from "./SectionLink";

export default function ComponentKitsSection() {
  return (
    <>
      <h1 id="testimonials" className="text-3xl font-bold pb-8 border-y border-dashed backdrop-blur w-full dark:opacity-90 -mt-[1px] pt-9">Who is using NativeWind?</h1>
      <section className="relative flex flex-col w-full max-w-fd-container mx-auto -mt-[1px] border-y border-dashed">      
        <SectionLink className="z-30" href="#testimonials" name="testimonials" />
            - Subtitle
        <div className="flex text-left gap-8 justify-around p-8 [mask:linear-gradient(to_right,transparent,red_1rem,red_calc(100%-1rem),transparent)] overflow-x-scroll scrollbar-hide max-w-full mt-2">
          <div className="rounded-2xl border border-dashed p-4 flex-1 bg-fd-card min-w-96">
            <div className="rounded-full h-16 w-16 -mt-12 mb-4 backdrop-blur left-4 border border-dashed bg-fd-muted"/>
            <b className="font-bold text-xl">Title</b>
            <p className="opacity-50 mt-2 text-pretty">Subtitle description</p>
          </div>
          <div className="rounded-2xl border border-dashed p-4 flex-1 bg-fd-card min-w-96">
            <div className="rounded-full h-16 w-16 -mt-12 mb-4 backdrop-blur left-4 border border-dashed bg-fd-muted"/>
            <b className="font-bold text-xl">Title</b>
            <p className="opacity-50 mt-2 text-pretty">Subtitle description</p>
          </div>
          <div className="rounded-2xl border border-dashed p-4 flex-1 bg-fd-card min-w-96">
            <div className="rounded-full h-16 w-16 -mt-12 mb-4 backdrop-blur left-4 border border-dashed bg-fd-muted"/>
            <b className="font-bold text-xl">Title</b>
            <p className="opacity-50 mt-2 text-pretty">Subtitle description</p>
          </div>
          <div className="rounded-2xl border border-dashed p-4 flex-1 bg-fd-card min-w-96">
            <div className="rounded-full h-16 w-16 -mt-12 mb-4 backdrop-blur left-4 border border-dashed bg-fd-muted"/>
            <b className="font-bold text-xl">Title</b>
            <p className="opacity-50 mt-2 text-pretty">Subtitle description</p>
          </div>
          <div className="rounded-2xl border border-dashed p-4 flex-1 bg-fd-card min-w-96">
            <div className="rounded-full h-16 w-16 -mt-12 mb-4 backdrop-blur left-4 border border-dashed bg-fd-muted"/>
            <b className="font-bold text-xl">Title</b>
            <p className="opacity-50 mt-2 text-pretty">Subtitle description</p>
          </div>
          <div className="rounded-2xl border border-dashed p-4 flex-1 bg-fd-card min-w-96">
            <div className="rounded-full h-16 w-16 -mt-12 mb-4 backdrop-blur left-4 border border-dashed bg-fd-muted"/>
            <b className="font-bold text-xl">Title</b>
            <p className="opacity-50 mt-2 text-pretty">Subtitle description</p>
          </div>
          <div className="rounded-2xl border border-dashed p-4 flex-1 bg-fd-card min-w-96">
            <div className="rounded-full h-16 w-16 -mt-12 mb-4 backdrop-blur left-4 border border-dashed bg-fd-muted"/>
            <b className="font-bold text-xl">Title</b>
            <p className="opacity-50 mt-2 text-pretty">Subtitle description</p>
          </div>
        </div>
            {/* - Showcase of items
              - Item
              - Image
              - URL */}
      </section>
    </>
  );
}