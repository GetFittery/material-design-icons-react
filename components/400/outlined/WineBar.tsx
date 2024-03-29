import * as React from "react";
import type { SVGProps } from "react";
const SvgWineBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M320-120v-60h130v-185q-99-14-154.5-79.703Q240-510.405 240-600v-240h480v240q0 90-55.5 155.5T510-365v185h130v60zm159.857-300Q549-420 600.5-467.5T658-570H302q5 55 56.857 102.5t121 47.5M300-630h360v-150H300zm180 210" />
  </svg>
);
export default SvgWineBar;
