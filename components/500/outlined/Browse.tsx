import * as React from "react";
import type { SVGProps } from "react";
const SvgBrowse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M114.022-425v-355.478q0-26.368 19.615-46.054 19.616-19.686 45.885-19.686h271.913V-425zm394.543-421.218h271.913q26.368 0 46.054 19.686 19.686 19.686 19.686 46.054v188.108H508.565zm0 732.196V-535h337.653v355.478q0 26.269-19.686 45.885-19.686 19.615-46.054 19.615zM114.022-367.63h337.413v253.608H179.522q-26.269 0-45.885-19.615-19.615-19.616-19.615-45.885zm65.5-122.87h206.413v-289.978H179.522zm394.543-167.13h206.413v-122.848H574.065zm0 188.13v289.978h206.413V-469.5zM179.522-302.37v122.848h206.413V-302.37z" />
  </svg>
);
export default SvgBrowse;
