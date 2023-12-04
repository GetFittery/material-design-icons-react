import * as React from "react";
import type { SVGProps } from "react";
const SvgFlightClass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M549.761-443.348q-30.651 0-52.478-21.616t-21.827-51.971v-215.456q0-30.454 21.827-52.14 21.827-21.687 52.478-21.687h100.717q30.525 0 52.415 21.687 21.89 21.686 21.89 52.14v215.456q0 30.355-21.89 51.971-21.89 21.616-52.415 21.616zm-6.174-68.131h112.826v-226.369H543.587zM370.804-242.152q-24.403 0-44.495-14.218-20.092-14.217-26.57-38.413L194.022-645.391v-160.827h68.13v148.24L365.98-310.522h358.803v68.37zm-56.065 128.13v-68.13h410.044v68.13zm228.848-623.826h112.826z" />
  </svg>
);
export default SvgFlightClass;
