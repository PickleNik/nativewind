import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { Logo } from '../assets';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import Link from 'next/link';
import { BookOpen, BookText, Heart, LayoutTemplate, UserRound } from 'lucide-react';


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      themeSwitch={{
        mode: 'light-dark',
      }}
      tree={source.pageTree}
      // links: [],
      githubUrl='https://github.com/nativewind/nativewind'
      // NOTE: for /layouts/notebook option https://fumadocs.vercel.app/docs/ui/layouts/docs#notebook
      nav={{
        transparentMode: 'top',
        title: (
          <>
            {/* TODO: pass currentColor based on theme */}
            <Logo />
            NativeWind
            <RootToggle
              // onClick={(e) => {
              //   e.preventDefault();
              //   e.stopPropagation();
              // }}
              className="rounded-full border pr-2 cursor-pointer"
              options={[
            
                {
                  title: 'v4',
                  url: '/docs',
                },
                {
                  title: 'v2',
                  url: 'https://www.nativewind.dev/v2/',
                },
              ]}
            />
          </>
        ),
        mode: 'top',
      }}
      // TODO: remove, probably won't be used
      // tabMode: 'navbar',
      sidebar={{
        collapsible: false,
        // NOTE: for 2+ root:true metas https://fumadocs.vercel.app/docs/ui/layouts/docs#sidebar-tabs
        // TODO: remove, probably won't be used
        tabs: {
          transform(option, node) {
            const meta = source.getNodeMeta(node);
            if (!meta) return option;

            const color = `var(--${meta.file.dirname}-color, var(--color-fd-foreground))`;

            return {
              ...option,
              icon: (
                <div
                  className="rounded-md p-1 shadow-lg ring-2 [&_svg]:size-5"
                  style={
                    {
                      color,
                      border: `1px solid color-mix(in oklab, ${color} 50%, transparent)`,
                      '--tw-ring-color': `color-mix(in oklab, ${color} 20%, transparent)`,
                    } as object
                  }
                >
                  {node.icon}
                </div>
              ),
            };
          },
        },
        // banner: (
        //   <div className="flex flex-col">
        //     <Link href="/docs" className="relative flex flex-row items-center gap-2 rounded-md p-2 text-start [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 bg-fd-primary/10 text-fd-primary" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
        //       <BookOpen />
        //       Docs
        //     </Link>
        //     <Link href="/blog" className="relative flex flex-row items-center gap-2 rounded-md p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
        //       <BookText />
        //       Blog
        //     </Link>
        //     <Link href="/community" className="relative flex flex-row items-center gap-2 rounded-md p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
        //       <UserRound />
        //       Community
        //     </Link>
        //     <Link href="/showcase" className="relative flex flex-row items-center gap-2 rounded-md p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
        //       <LayoutTemplate />
        //       Showcase
        //     </Link>
        //     <Link href="/sporsor" className="relative flex flex-row items-center gap-2 rounded-md p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0 transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none" style={{ paddingInlineStart: 'calc(var(--spacing) * 2)' }} >
        //       <Heart />
        //       Sponsor
        //     </Link>
        //     {/* <RootToggle
        //       options={[
            
        //         {
        //           title: 'v4',
        //           url: '/docs',
        //         },
        //         {
        //           title: 'v2',
        //           url: 'https://www.nativewind.dev/v2/',
        //         },
        //       ]}
        //     /> */}
        //   </div>
        // ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
