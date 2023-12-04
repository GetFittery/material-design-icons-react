import * as React from "react";
import type { SVGProps } from "react";
const SvgEditSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M182.152-114.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-595.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h404.761l-68.131 68.37h-336.63v595.696h595.696v-339.152l68.37-68.37v407.522q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zM357.13-357.13v-174.066l379.37-379.13q10.196-10.196 22.638-14.794 12.443-4.597 25.125-4.597 12.411 0 25.282 5.097 12.872 5.098 23.433 15.294l75.348 76.108q10.044 10.393 15.337 22.722 5.294 12.33 5.294 25.084 0 12.836-5.181 25.977-5.182 13.142-15.45 23.413L531.196-357.13zm508.479-428.109L784-866.609zM421.913-421.913h82.37l251.326-251.326-41.477-40.804-41.654-40.566-250.565 249.326zm292.219-292.13-41.654-40.566zl41.477 40.804z" />
  </svg>
);
export default SvgEditSquare;