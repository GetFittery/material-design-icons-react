import * as React from "react";
import type { SVGProps } from "react";
const SvgBarcodeReader = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M232.761-109.956q-62.087 0-99.022-48.294-36.935-48.293-21.457-107.685l72.479-273.674q-33.479-21.833-54.74-58.459-21.26-36.626-21.26-81.841 0-67.684 47.997-115.801 47.996-48.116 115.829-48.116h349.848q38.562 0 58.563 32.326 20.002 32.326 3.089 66.631L588.63-553.957q-8.956 17.153-25.489 27.468-16.532 10.315-36.163 10.315h-89.777l-13.114 50.239h11.848q14.435.239 23.771 9.95 9.337 9.711 9.337 24.116v78.326q0 14.674-9.695 24.369-9.696 9.696-24.37 9.696h-50.787l-30.582 117.217q-11.479 40.913-44.735 66.609-33.257 25.696-76.113 25.696m.065-68.37q18.72 0 33.806-11.283 15.085-11.282 19.846-30.087l81.239-296.478H249.891l-71.717 267.392q-7.283 27.393 9.574 48.924 16.856 21.532 45.078 21.532m39.761-406.218h254.63l95.457-190.912H272.587q-40.012 0-67.854 27.68-27.842 27.681-27.842 67.829 0 40.148 27.842 67.775 27.842 27.628 67.854 27.628m605.196-238.173-90 41q-8.479 3.239-16.362.482-7.884-2.757-11.791-11.439-4.239-8.478-1.506-16.362 2.733-7.884 11.224-12.029l91-41q8.717-4 16.988-.743 8.271 3.257 11.403 11.819 3.239 8.598.482 16.362-2.757 7.764-11.438 11.91M769.348-538.174q-8.478-3.239-11.337-11.292-2.859-8.054.619-16.818 3.24-8.52 11.957-11.879t17.196.88l90 41q8.478 3.24 11.337 11.457 2.858 8.217-.381 16.815t-11.414 11.457q-8.175 2.858-16.977-.62zM895.5-658.326h-100q-9.036 0-15.475-6.473-6.438-6.472-6.438-15.195 0-8.723 6.438-15.321 6.439-6.598 15.475-6.598h100q8.726 0 15.2 6.52 6.474 6.52 6.474 15.315t-6.474 15.274q-6.474 6.478-15.2 6.478M309.304-516.174" />
  </svg>
);
export default SvgBarcodeReader;
