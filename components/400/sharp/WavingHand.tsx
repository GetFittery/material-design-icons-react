import * as React from "react";
import type { SVGProps } from "react";
const SvgWavingHand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m434-498 297-296 42 42-297 297zm104 104 269-269 42 43-269 269zM195-199q-91-91-91.5-218T194-635l122-122 42 42q12 12 19.5 28t8.5 30l185-186 43 43-225 225-65 65 26 26q42 42 40.5 100.5T347-283l-7 7-42-43 7-7q25-25 25.5-58.5T307-442l-69-69 78-76q17-17 17-42.5T316-672l-80 80q-73 73-72.5 175T237-242q74 74 177 75.5T590-238l263-263 42 43-262 262q-91 91-219 89.5T195-199M689-40l1-60q71 0 120.5-49.5T860-270l60-1q0 96-67.5 163.5T689-40M40-689q0-96 67.5-163.5T271-920l-1 60q-71 0-120.5 49.5T100-690z" />
  </svg>
);
export default SvgWavingHand;
