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
    <path d="M180-120q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v329q-14-8-29.5-13t-30.5-8v-308H180v600h309q4 16 9.023 31.172Q503.045-133.655 510-120zm0-107v47-600 308-4zm100-82.825q0 12.825 8.625 21.325T310-280h180.595Q495-296 500-311q5-15 13-29H310q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5m0-170q0 12.825 8.625 21.325T310-450h314q14-7 27-11.5t29-8.5v-10q0-12-9-21t-21-9H310q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5m0-170q0 12.825 8.625 21.325T310-620h340q12.75 0 21.375-8.675 8.625-8.676 8.625-21.5 0-12.825-8.625-21.325T650-680H310q-12.75 0-21.375 8.675-8.625 8.676-8.625 21.5M732.5-41Q655-41 600-96.5T545-228q0-78.435 54.99-133.717Q654.98-417 733-417q77 0 132.5 55.283Q921-306.435 921-228q0 76-55.5 131.5T732.5-41M718-211v94q0 7 5.143 11.5t12 4.5q6.857 0 11.357-5.1 4.5-5.1 4.5-11.9v-93h94q7 0 11.5-5.143t4.5-12q0-6.857-4.5-11.357Q852-244 845-244h-94v-94q0-7-4.5-11.5t-11.357-4.5q-6.857 0-12 4.5T718-338v94h-94q-7 0-11.5 4.5t-4.5 11.357q0 6.857 5.1 12T625-211z" />
  </svg>
);
export default SvgAddNotes;