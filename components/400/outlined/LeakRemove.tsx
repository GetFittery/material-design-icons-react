import * as React from "react";
import type { SVGProps } from "react";
const SvgLeakRemove = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M807-55 617-245q-17 30-25 63t-8 62h-60q-2-38 11.5-86t37.5-83l-43-43q-30 44-48 96.5T464-120h-60q0-72 22.5-138T487-375L375-487q-53 40-117.5 61T120-404v-60q61 0 114.5-18t97.5-48l-43-43q-32 23-78.5 36.5T120-524v-60q38-1 68.5-10t56.5-23L57-805l43-43L850-98zM700-333l-44-44q37-27 83.5-42.5T840-436v60q-42 0-78 12.5T700-333m-87-87-43-43q54-42 119.5-67T840-556v60q-70 2-124.5 21.5T613-420M463-569l-44-44q35-44 56-102.5T496-840h60q0 84-26.5 150.5T463-569m-86-87-43-43q18-30 30-64t12-77h60q0 56-17.5 104.5T377-656" />
  </svg>
);
export default SvgLeakRemove;
