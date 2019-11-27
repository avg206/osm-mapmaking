declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  import * as React from 'react';

  interface SVGProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
  }

  export const ReactComponent: React.FunctionComponent<SVGProps>;

  export default ReactComponent;
}

declare module '*.png' {
  const value: unknown;
  export = value;
}
