import { cn } from "@/lib/cn";

export default function SectionLink({href, name, className}: {href: string, name: string, className?: string}) {
  return (
    <a href={href} className={cn(className, "sticky group w-full max-w-fd-container top-14 mx-auto text-fd-muted-foreground/50 text-sm text-left font-mono pl-1")}>
      <div className="opacity-0 group-hover:opacity-100 duration-300 absolute left-0 pr-2 pl-1.5 -translate-x-full border-l border-y -bottom-[1px] border-dashed">
        #
      </div>
      {name}
    </a>
  )
}