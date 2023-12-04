import * as React from "react";
import type { SVGProps } from "react";
const SvgChatAddOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M120-160v-680h640v283q-10-2-20-2.5t-20-.5q-5 0-10 .167-5 .166-10 .833v-221H180v440h301q-.667 5-.833 10-.167 5-.167 10 0 10 .5 20t2.5 20H240zm160-460h320v-60H280zm0 170h200v-60H280zm410 280v-120H570v-60h120v-120h60v120h120v60H750v120zM180-340v-440z" />
  </svg>
);
export default SvgChatAddOn;
