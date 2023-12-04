import * as React from "react";
import type { SVGProps } from "react";
const SvgNavigation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-241.717 205.087-116.761q-10.946 5.479-20.886 2.62t-16.897-9.463q-6.717-6.843-9.456-16.869t2.739-20.788l288.587-658.13q4.124-10.196 12.856-15.294 8.733-5.098 17.949-5.098 9.217 0 17.966 5.098t12.881 15.294l288.587 658.13q5.478 10.762 2.739 20.788t-9.456 16.869q-6.957 6.604-16.897 9.463-9.94 2.859-20.886-2.62zm-217.456 23.239L480-314.565l217.456 96.087L480-722.674zM480-314.565" />
  </svg>
);
export default SvgNavigation;
