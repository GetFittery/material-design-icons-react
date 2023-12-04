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
    <path d="M114.022-114.022v-732.196h472.891l-68.131 68.37h-336.63v595.696h595.696v-339.152l68.37-68.37v475.652zM865.609-480H480zM357.13-357.13v-174.066L784-958.065l172.783 173.826L531.196-357.13zm508.479-428.109L784-866.609zM421.913-421.913h82.37l251.326-251.326-41.477-40.804-41.654-40.566-250.565 249.326zm292.219-292.13-41.654-40.566zl41.477 40.804z" />
  </svg>
);
export default SvgEditSquare;
