import * as React from "react";
import type { SVGProps } from "react";
const SvgLabel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M846.218-480 674.826-237.891q-14.196 19.674-33.859 31.772-19.663 12.097-43.358 12.097H182.152q-28.104 0-48.117-20.013-20.013-20.013-20.013-48.117v-435.696q0-28.202 20.013-48.286t48.117-20.084h415.457q23.695 0 43.361 12.337 19.666 12.337 33.856 31.772zm-85.283 0L608.564-697.848H182.152v435.696h426.457zm-578.783 0v217.848-435.696z" />
  </svg>
);
export default SvgLabel;
