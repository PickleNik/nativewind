import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Logo } from '../assets';
import { BookText, Book, Cpu, Heart, Layout as LayoutIcon, LayoutTemplate, Server, UsersRound } from 'lucide-react';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout
    githubUrl='https://github.com/nativewind/nativewind'
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
    }}
    links={[
      // NOTE: docs link is separate to only show in home layout and not in docs layout, linkItems are passed to docs/layout.tsx
      {
        // NOTE: for /layouts/notebook option https://fumadocs.vercel.app/docs/ui/layouts/docs#nav-mode
        // on: 'nav',
        type: 'menu',
        text: 'Docs',
        url: '/docs',
        // active: 'nested-url',
        // NOTE: homepage hover items
        items: [
          {
            menu: {
              banner: (
                <div className="-mx-3 -mt-3">
                  <div className="bg-cyan-500/20 rounded-t-xl w-full h-64"></div>
                </div>
              ),
              className: 'md:row-span-2',
            },
            text: 'Overview',
            description: 'Overview',
            url: '/docs/',
          },
          {
            icon: <Book />,
            text: 'Guides',
            description: 'Troubleshooting',
            url: '/docs/guides/troubleshooting',
          },
          {
            icon: <Cpu />,
            text: 'Core Concepts',
            description: 'Built on TailwindCSS',
            url: '/docs/core-concepts/tailwindcss',
          },
          {
            icon: <Server />,
            text: 'API',
            description: 'Nativewind ApI',
            url: '/docs/layouts',
          },
          {
            icon: <LayoutIcon />,
            text: 'Customization',
            description: 'Configuration',
            url: '/docs/customization/configuration',
          },
        ],
      },
      {
        icon: <BookText />,
        text: 'Blog',
        url: '/blog',
        active: 'nested-url',
      },
      {
        text: 'Community',
        // TODO: GH Discussions / Discord Link?
        url: '/community',
        icon: <UsersRound />,
        external: true,
      },
      {
        text: 'Showcase',
        url: '/showcase',
        icon: <LayoutTemplate />,
        active: 'url',
      },
      {
        text: 'Sponsors',
        url: '/sponsors',
        icon: <Heart />,
      },
    ]}
  >
    { children }
  </HomeLayout >;
}
