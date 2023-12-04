import * as React from "react";
import type { SVGProps } from "react";
const SvgBarcodeScanner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M34.5-114.5V-302H100v122h122v65.5zm702.5 0V-180h122v-122h65.5v187.5zM153-231v-499h80v499zm121 0v-499h42v499zm122 0v-499h83v499zm125 0v-499h121v499zm163 0v-499h42v499zm83 0v-499h38v499zM34.5-658v-187.5H222v65.5H100v122zm824.5 0v-122H737v-65.5h187.5V-658z" />
  </svg>
);
export default SvgBarcodeScanner;
