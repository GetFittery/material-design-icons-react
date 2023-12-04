import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossword = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M386-326v186h187v-186zm-60-60v-187H140v187zm60 0h187v-187H386zm247 0h187v-187H633zm0-247h187v-187H633zM326-326H140q-24.75 0-42.375-17.625T80-386v-187q0-24.75 17.625-42.375T140-633h433v-187q0-24.75 17.625-42.375T633-880h187q24.75 0 42.375 17.625T880-820v434q0 24.75-17.625 42.375T820-326H633v186q0 24.75-17.625 42.375T573-80H386q-24.75 0-42.375-17.625T326-140z" />
  </svg>
);
export default SvgCrossword;
