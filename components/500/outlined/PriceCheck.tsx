import * as React from "react";
import type { SVGProps } from "react";
const SvgPriceCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M264.5-359.13v-47.631h-110V-472.5h220v-99.261H188.37q-13.196 0-23.533-9.837-10.337-9.837-10.337-24.032v-164q0-14.196 9.837-23.533 9.837-9.337 23.033-9.337h77.13v-47.631H330v47.631h110v65.739H220v99.261h186.37q14.195 0 23.913 9.337Q440-618.826 440-603.63v164q0 13.195-9.217 23.032-9.218 9.837-23.413 9.837H330v47.631zm296.13 243.826L388-288.174l47.022-46.783L560.63-209.348l237.848-237.609 47.022 46.783z" />
  </svg>
);
export default SvgPriceCheck;
