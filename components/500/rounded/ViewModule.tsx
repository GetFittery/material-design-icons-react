import * as React from "react";
import type { SVGProps } from "react";
const SvgViewModule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M112.869-262.152v-435.696q0-28.202 20.014-48.286 20.013-20.084 48.117-20.084h599q28.203 0 48.286 20.084 20.084 20.084 20.084 48.286v435.696q0 28.104-20.084 48.117-20.083 20.013-48.286 20.013H181q-28.104 0-48.117-20.013-20.014-20.013-20.014-48.117M621-510h159v-187.848H621zm-221 0h161v-187.848H400zm-219 0h159v-187.848H181zm0 247.848h159V-450H181zm219 0h161V-450H400zm221 0h159V-450H621z" />
  </svg>
);
export default SvgViewModule;
