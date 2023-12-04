import * as React from "react";
import type { SVGProps } from "react";
const SvgAirplaneTicket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m348-325 368-101q17-5 25-16t3-28q-5-17-18-23.5t-28.796-2.367L594-469 428-631l-52 12 103 181-111 31-52-43-29 10zm472 165H140q-24.75 0-42.375-17.625T80-220v-153q37-8 61.5-37.5T166-480q0-40-24.5-70T80-587v-153q0-24.75 17.625-42.375T140-800h680q24.75 0 42.375 17.625T880-740v520q0 24.75-17.625 42.375T820-160m0-60v-520H140v109q39 26 62.5 65t23.5 86q0 47-23.5 86T140-329v109zM480-480" />
  </svg>
);
export default SvgAirplaneTicket;
