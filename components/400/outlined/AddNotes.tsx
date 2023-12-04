import * as React from "react";
import type { SVGProps } from "react";
const SvgAddNotes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v329q-14-8-29.5-13t-30.5-8v-308H180v600h309q4 16 9.023 31.172Q503.045-133.655 510-120zm0-107v47-600 308-4zm100-53h211q4-16 9-31t13-29H280zm0-170h344q14-7 27-11.5t29-8.5v-40H280zm0-170h400v-60H280zM732.5-41Q655-41 600-96.5T545-228q0-78.435 54.99-133.717Q654.98-417 733-417q77 0 132.5 55.283Q921-306.435 921-228q0 76-55.5 131.5T732.5-41M718-101h33v-110h110v-33H751v-110h-33v110H608v33h110z" />
  </svg>
);
export default SvgAddNotes;