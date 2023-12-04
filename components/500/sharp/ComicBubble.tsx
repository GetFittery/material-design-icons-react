import * as React from "react";
import type { SVGProps } from "react";
const SvgComicBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m440.054-830.522-91.056 91.002H220.719v128.518L129.478-520l91.241 91.002v128.279h128.279L440-209.478l104.089-104 208.954 106.761-107.282-208.432L750.522-520l-91.056-91.101V-739.52H531.11zM440-924.609l118.57 118.471h167.633v167.493L844.609-520 727.652-402.804 857.37-148.609l-45.74 45.74-254.434-129.718L440-115.391l-118.471-118.57H154.036v-167.633L35.391-520l118.57-118.57v-167.633h167.633zM441-518" />
  </svg>
);
export default SvgComicBubble;
