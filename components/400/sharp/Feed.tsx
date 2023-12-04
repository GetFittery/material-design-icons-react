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
    <path d="M120-120v-720h522l198 198v522zm60-60h600v-429H609v-171H180zm99-111h402v-60H279zm0-318h201v-60H279zm0 159h402v-60H279zm-99-330v171.429zv600z" />
  </svg>
);
export default SvgFeed;
