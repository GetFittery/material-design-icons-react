import * as React from "react";
import type { SVGProps } from "react";
const SvgLeaderboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-180h187v-360H140zm247 0h186v-600H387zm246 0h187v-280H633zm-553 0v-360q0-24.75 17.625-42.375T140-600h187v-180q0-24.75 17.625-42.375T387-840h186q24.75 0 42.375 17.625T633-780v260h187q24.75 0 42.375 17.625T880-460v280q0 24.75-17.625 42.375T820-120H140q-24.75 0-42.375-17.625T80-180" />
  </svg>
);
export default SvgLeaderboard;
