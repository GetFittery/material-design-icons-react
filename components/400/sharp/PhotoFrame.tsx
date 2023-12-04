import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-120v-80H40v-600h880v600H800v80zm-60-140h760v-480H100zm120-110h520L580-584 440-404 340-524zM100-260v-480z" />
  </svg>
);
export default SvgPhotoFrame;
