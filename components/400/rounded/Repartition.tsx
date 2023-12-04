import * as React from "react";
import type { SVGProps } from "react";
const SvgRepartition = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m195-664 52 52q9 8.8 9 20.9 0 12.1-9.053 21.1-9.052 9-21.5 9Q213-561 204-570L101-673q-9-9-9-21t9-21l104-104q9-9 21.158-9 12.158 0 21 8.609Q256-810 256-797.533q0 12.466-9 21.533l-52 52h483q66.825 0 114.412 47.624Q840-628.752 840-561.876T792.309-447.5Q744.618-400 677.647-400H150q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150-460h528q42.075 0 72.037-29.947 29.963-29.947 29.963-72T750.037-634Q720.075-664 678-664zm-75 524v-120q0-24.75 17.625-42.375T180-320h600q24.75 0 42.375 17.625T840-260v120q0 24.75-17.625 42.375T780-80H180q-24.75 0-42.375-17.625T120-140m60 0h163v-120H180zm223 0h153v-120H403zm214 0h163v-120H617z" />
  </svg>
);
export default SvgRepartition;
