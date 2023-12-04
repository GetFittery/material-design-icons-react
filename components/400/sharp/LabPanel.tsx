import * as React from "react";
import type { SVGProps } from "react";
const SvgLabPanel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M40-120v-360h80v-163H80v-197h360v197h-40v163h160v-163h-40v-197h360v197h-40v163h80v360zm540-580h240v-80H580zm-440 0h240v-80H140zm480 220h160v-160H620zm-440 0h160v-160H180zm-80 300h760v-240H100zm40-520v-80zm440 0v-80zM100-180v-240z" />
  </svg>
);
export default SvgLabPanel;
