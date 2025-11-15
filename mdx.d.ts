declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";
  export const metadata: {
    title?: string;
    description?: string;
    date?: string;
    readingTime?: string;
    tags?: string[];
    [key: string]: unknown;
  };
  export const summary: string;
  const MDXComponent: (props: MDXProps) => JSX.Element;
  export default MDXComponent;
}

