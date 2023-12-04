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
    <path d="m440-830.522-91.002 91.002H220.719v128.518L129.478-520l91.241 91.002v128.279h128.279L440-209.478l104-104 209.043 106.761-107.282-208.522L750.522-520l-91.002-91.002V-739.52H531.002zm0-94.087 118.645 118.406h167.558v167.558L844.609-520 727.652-402.804 857.37-148.609q5.717 11.435 3.858 21.87-1.858 10.435-9.576 18.152-7.956 7.957-18.391 9.816-10.435 1.858-21.631-4.098L557.196-232.587 440-115.391 321.594-234.036H154.036v-167.558L35.391-520l118.645-118.645v-167.558h167.558zM441-518" />
  </svg>
);
export default SvgComicBubble;