import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsTitle,
  DocsDescription,
} from 'fumadocs-ui/page';


import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';

import { GlobalTabs } from '@/app/components/Tabs'; 
import { GlobalTabs2, TabsList, TabsContent, TabsTrigger } from '@/app/components/Tabs2';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Callout } from 'fumadocs-ui/components/callout';
import { ComponentProps, FC } from 'react';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      {/* <DocsTitle>{page.data.title}</DocsTitle> */}
      {/* <DocsDescription>{page.data.description}</DocsDescription> */}
      <DocsBody>
        <MDX components={{
          ...defaultMdxComponents as any, Tab, Tabs, GlobalTabs, GlobalTabs2, TabsList, TabsContent, TabsTrigger,
          blockquote: Callout as unknown as FC<ComponentProps<'blockquote'>>,
         }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
