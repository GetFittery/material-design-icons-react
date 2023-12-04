import * as React from "react";
import type { SVGProps } from "react";
const SvgDisplaySettings = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M300-420v30q0 8 6 14t14 6q8 0 14-6t6-14v-100q0-8-6-14t-14-6q-8 0-14 6t-6 14v30h-40q-8 0-14 6t-6 14q0 8 6 14t14 6zm120 0h280q8 0 14-6t6-14q0-8-6-14t-14-6H420q-8 0-14 6t-6 14q0 8 6 14t14 6m240-160h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40v-30q0-8-6-14t-14-6q-8 0-14 6t-6 14v100q0 8 6 14t14 6q8 0 14-6t6-14zm-400 0h280q8 0 14-6t6-14q0-8-6-14t-14-6H260q-8 0-14 6t-6 14q0 8 6 14t14 6M140-200q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v50q0 13-8.5 21.5T600-120H360q-13 0-21.5-8.5T330-150v-50zm0-60h680v-520H140zm0 0v-520z" />
  </svg>
);
export default SvgDisplaySettings;
