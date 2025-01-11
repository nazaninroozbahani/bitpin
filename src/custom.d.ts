// src/custom.d.ts
declare module "*.svg" {
  import { SVGProps } from "react";
  const ReactComponent: React.FC<SVGProps<SVGSVGElement>>;
  export { ReactComponent };
}
