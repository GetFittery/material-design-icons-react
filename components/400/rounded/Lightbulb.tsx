import * as React from "react";
import type { SVGProps } from "react";
const SvgLightbulb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-80q-34 0-57.5-23.5T399-161h162q0 34-23.5 57.5T480-80M348-223q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T348-283h264q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T612-223zm-25-121q-66-43-104.5-107.5T180-597q0-122 89-211t211-89q122 0 211 89t89 211q0 81-38 145.5T637-344zm22-60h270.667Q664-436 692-487.128 720-538.257 720-597q0-99-70.5-169.5T480-837q-99 0-169.5 70.5T240-597q0 58.743 28 109.872Q296-436 345-404m135 0" />
  </svg>
);
export default SvgLightbulb;
