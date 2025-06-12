"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyList,
  TypographyInlineCode,
} from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer = ({
  content,
  className,
}: MarkdownRendererProps) => {
  return (
    <div
      className={cn(
        "prose prose-neutral dark:prose-invert max-w-none",
        className
      )}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => <TypographyH1>{children}</TypographyH1>,
          h2: ({ children }) => (
            <TypographyH2 className='mt-12 mb-6'>{children}</TypographyH2>
          ),
          h3: ({ children }) => (
            <TypographyH3 className='mt-8 mb-4'>{children}</TypographyH3>
          ),
          h4: ({ children }) => (
            <TypographyH4 className='mt-6 mb-3'>{children}</TypographyH4>
          ),
          p: ({ children }) => <TypographyP>{children}</TypographyP>,
          ul: ({ children }) => <TypographyList>{children}</TypographyList>,
          ol: ({ children }) => (
            <ol className='my-6 ml-6 list-decimal [&>li]:mt-2'>{children}</ol>
          ),
          li: ({ children }) => <li>{children}</li>,
          code: ({ children, className }) => {
            const isInline = !className?.includes("language-");
            if (isInline) {
              return <TypographyInlineCode>{children}</TypographyInlineCode>;
            }
            return (
              <code
                className={cn(
                  "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm",
                  className
                )}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className='mb-4 mt-6 overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900'>
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote className='mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200'>
              {children}
            </blockquote>
          ),
          table: ({ children }) => (
            <div className='my-6 w-full overflow-y-auto'>
              <table className='w-full border-collapse border border-slate-400 dark:border-slate-500'>
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className='border border-slate-300 bg-slate-100 px-4 py-2 text-left font-bold dark:border-slate-600 dark:bg-slate-700'>
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className='border border-slate-300 px-4 py-2 dark:border-slate-600'>
              {children}
            </td>
          ),
          strong: ({ children }) => (
            <strong className='font-semibold'>{children}</strong>
          ),
          em: ({ children }) => <em className='italic'>{children}</em>,
          a: ({ href, children }) => (
            <a
              href={href}
              className='font-medium text-blue-600 underline underline-offset-4 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={
                href?.startsWith("http") ? "noopener noreferrer" : undefined
              }>
              {children}
            </a>
          ),
        }}>
        {content}
      </ReactMarkdown>
    </div>
  );
};
