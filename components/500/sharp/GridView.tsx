import * as React from "react";
import type { SVGProps } from "react";
const SvgGridView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M114.022-510v-336.218H450V-510zm0 395.978V-450H450v335.978zM510-510v-336.218h336.218V-510zm0 395.978V-450h336.218v335.978zM182.152-578.37h199.717v-199.478H182.152zm396.218 0h199.478v-199.478H578.37zm0 396.218h199.478v-199.717H578.37zm-396.218 0h199.717v-199.717H182.152zM381.869-578.37" />
  </svg>
);
export default SvgGridView;
