import * as React from "react";
import type { SVGProps } from "react";
const SvgLyrics = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-300v-520zM80-80v-740q0-24.75 17.625-42.375T140-880h480q24.75 0 42.375 17.625T680-820v59q-17 9-32.357 21T620-713v-107H140v520h480v-187q12.286 15 27.643 27Q663-448 680-439v139q0 24.75-17.625 42.375T620-240H240zm160-330h160v-60H240zm519.882-80Q714-490 682-522.118q-32-32.117-32-78Q650-646 682.061-678q32.061-32 77.863-32 10.076 0 22.576 3t27.5 8v-221h150v60h-90v260q0 45.833-32.118 77.917-32.117 32.083-78 32.083M240-530h280v-60H240zm0-120h280v-60H240z" />
  </svg>
);
export default SvgLyrics;
