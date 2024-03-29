import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayingCards = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m604-389 40-145-124-85-40 145zM195-160l-66-27q-32.17-14.026-43.585-48.013Q74-269 92-302l103-245zm142 58q-33.825 0-57.913-24Q255-150 255-184v-313l137 368q3 8 6.5 14t9.5 13zm183-25q-23 8-45.932-2.203Q451.137-139.407 443-162L251-684q-8-23 2.441-45.875Q263.881-752.75 287-761l319-115q23-8 46.5 2t31.5 33l193 521q8 23-2.203 45.875Q864.593-251.25 842-243zm-20-57 318-116-191-519-318 115zm64-318" />
  </svg>
);
export default SvgPlayingCards;
