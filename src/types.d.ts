declare const graphql: (query: TemplateStringsArray) => void;
declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.png' {
  const content: any;
  export default content;
}

declare module 'gatsby-plugin-mdx/mdx-renderer';
declare module '@mdx-js/react';