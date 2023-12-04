import * as React from "react";
import type { SVGProps } from "react";
const SvgQrCodeScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M74.022-704.37v-181.848H255.63v68.37H142.152v113.478zm0 630.348V-255.63h68.13v113.478H255.63v68.13zm630.348 0v-68.13h113.478V-255.63h68.37v181.608zM817.848-704.37v-113.478H704.37v-68.37h181.848v181.848zM708-251h63v63h-63zm0-126h63v63h-63zm-63 63h63v63h-63zm-63 63h63v63h-63zm-63-63h63v63h-63zm126-126h63v63h-63zm-63 63h63v63h-63zm-63-63h63v63h-63zm252-332v252H519v-252zM440-440v252H188v-252zm0-332v252H188v-252zm-52.63 531.37v-146.74H240.63v146.74zm0-332v-146.74H240.63v146.74zm331 0v-146.74H571.63v146.74z" />
  </svg>
);
export default SvgQrCodeScanner;
