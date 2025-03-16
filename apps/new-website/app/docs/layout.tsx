import { DocsLayout, DocsLayoutProps } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions, linkItems } from '@/app/layout.config';
import { source } from '@/lib/source';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';

const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
  links: linkItems,
  // NOTE for /layouts/notebook option https://fumadocs.vercel.app/docs/ui/layouts/docs#notebook
  // nav: {
  //   ...baseOptions.nav,
  //   transparentMode: 'top',
  //   mode: 'top',
  // },
  // tabMode: 'navbar',
  sidebar: {
    collapsible: false,
    // NOTE: for 2+ root:true metas https://fumadocs.vercel.app/docs/ui/layouts/docs#sidebar-tabs
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
    banner: (
      <RootToggle
        options={[
          
          {
            title: 'v4',
            description: 'Latest Version',
            url: '/docs',
          },
          {
            title: 'v2',
            description: 'v2 Docs',
            url: 'https://www.nativewind.dev/v2/',
          },
        ]}
      />
    ),
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...docsOptions}>
      {children}
    </DocsLayout>
  );
}
