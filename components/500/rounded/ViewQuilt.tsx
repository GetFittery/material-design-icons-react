import * as React from "react";
import type { SVGProps } from "react";
const SvgViewQuilt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M114.022-262.152v-435.696q0-28.202 20.013-48.286t48.117-20.084h595.696q28.202 0 48.286 20.084t20.084 48.286v435.696q0 28.104-20.084 48.117-20.084 20.013-48.286 20.013H182.152q-28.104 0-48.117-20.013-20.013-20.013-20.013-48.117M390-697.848V-510h387.848v-187.848zM777.848-450H618.043v187.848h159.805zM390-450v187.848h161.043V-450zM182.152-262.152H330v-435.696H182.152z" />
  </svg>
);
export default SvgViewQuilt;
