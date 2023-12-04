import * as React from "react";
import type { SVGProps } from "react";
const SvgFrameSource = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M344-344.022 208.022-480 344-615.978 391.739-567l-86.761 87 86.761 87zm272 0L568.261-393l86.761-87-86.761-87L616-615.978 751.978-480zm-501.978 230V-352h68.13v169.848H352v68.13zm493.978 0v-68.13h169.848V-352h68.37v237.978zM114.022-608v-238.218H352v68.37H182.152V-608zm663.826 0v-169.848H608v-68.37h238.218V-608z" />
  </svg>
);
export default SvgFrameSource;
