import * as React from "react";
import type { SVGProps } from "react";
const SvgFeed = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h462l198 198v462q0 24-18 42t-42 18zm0-60h600v-428.571H609V-780H180zm99-111h402v-60H279zm0-318h201v-60H279zm0 159h402v-60H279zm-99-330v171.429zv600z" />
  </svg>
);
export default SvgFeed;
