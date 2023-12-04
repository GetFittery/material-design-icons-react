import * as React from "react";
import type { SVGProps } from "react";
const SvgFence = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M201.869-150.435v-172.869h-90v-68.131h90v-94.5h-90v-68.13h90v-138.326l115.501-115.5 81.197 81.673 82.431-81.673 81.437 81.434 81.195-81.434 115.74 115.5v138.326h89v68.13h-89v94.5h89v68.131h-89v172.869zM270-554.065h94.5v-109.978l-47.13-47.131L270-663.932zm162.63 0h94.74v-109.978L480-711.174l-47.37 47.242zm163.87 0H690v-109.978l-47.37-47.131-46.13 46.577zM270-391.435h94.5v-94.5H270zm162.63 0h94.74v-94.5h-94.74zm163.87 0H690v-94.5h-93.5zM270-218.565h94.5v-104.739H270zm162.63 0h94.74v-104.739h-94.74zm163.87 0H690v-104.739h-93.5z" />
  </svg>
);
export default SvgFence;
