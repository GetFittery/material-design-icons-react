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
    <path d="M754-206 646-415l105-105-91.212-91.212v-128.576H531.212L440-831l-91.212 91.212H220.212v128.576L129-520l91.212 91.212v128.576h128.576L440-209l104-104zm90 90q-7 7-16 8.5t-19-3.5L556-240l-95 95q-9 9-21 9t-21-9l-95.057-95H190q-12.75 0-21.375-8.625T160-270v-133.943L65-499q-9-9-9-21t9-21l95-95.057V-770q0-12.75 8.625-21.375T190-800h133.943L419-895q9-9 21-9t21 9l95.057 95H690q12.75 0 21.375 8.625T720-770v133.943L815-541q9 9 9 21t-9 21l-95 95 129 253q5 10 3.5 19t-8.5 16M441-518" />
  </svg>
);
export default SvgComicBubble;
