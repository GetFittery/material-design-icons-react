import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckbook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M237.957-366.587H574.63l60-60H237.957zm0-176.326h231v-60h-231zm-95.805-157.565v434.456h331.913l-69.13 69.131H74.022v-571.957h812.196v159.283h-68.37v-90.913zM920.5-483.348q6.435 6.435 6.435 15.728 0 9.294-6.435 15.49l-36.282 36.521-55.74-55.739 38.283-38.522q6.196-6.195 13.609-6.195t13.608 6.195zM528.565-115.935v-55.739L801.761-444.63l55.739 55.739-272.956 272.956zM142.152-700.478v434.456z" />
  </svg>
);
export default SvgCheckbook;
