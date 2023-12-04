import * as React from "react";
import type { SVGProps } from "react";
const SvgMapFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m612-113.782-263-93-176.848 70.521q-20.109 10.196-39.119-1.598-19.011-11.793-19.011-35.141v-558q0-14.913 8.576-26.587t22.489-17.152L349-846.218l263 92 175.848-70.521q20.109-9.196 39.239 2.098 19.131 11.293 19.131 34.641v565q0 13.152-8.696 22.707-8.696 9.554-21.609 14.032zm-34-83.848v-499.979l-196-66v499.979z" />
  </svg>
);
export default SvgMapFill;
