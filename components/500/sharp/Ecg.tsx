import * as React from "react";
import type { SVGProps } from "react";
const SvgEcg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M74.022-573.348v-232.87h812.196V-480h-68.37v-257.848H142.152v164.5zm0 419.326v-232.869h68.13v164.739H439v68.13zM720-56.892l-81-68.999q-72-61.761-95.5-93.315Q520-250.76 520-286.819q0-45.072 32-77.572t78-32.5q26 0 49.5 12.119 23.5 12.12 40.5 34.881 16-22.761 39.5-34.881 23.5-12.119 50.5-12.119 45 0 77.5 32.5t32.5 77.5q0 36.239-24.5 68.619Q871-185.891 793-119.891zm0-83.543 31.043-27.282q64.087-54.566 84.729-77.348 20.641-22.783 20.641-41.881 0-18.543-13.905-32.451-13.905-13.907-32.445-13.907-11.6 0-20.899 4.721-9.299 4.721-19.534 15.561L720-266.869l-50.391-46.153q-10.5-10.84-20.024-15.561-9.524-4.721-19.537-4.721-19.653 0-33.057 13.907-13.404 13.908-13.404 32.451 0 19.098 27.049 49.426 27.05 30.328 76.315 69.57zM74.022-446.891v-66.457h144.891l60.848 119.174 155.695-310.435h9.327l95.369 191.261h133.196v66.457h-174.5L439-564.826 283.783-254.391h-9.805l-95.13-192.5zM720-237.37" />
  </svg>
);
export default SvgEcg;