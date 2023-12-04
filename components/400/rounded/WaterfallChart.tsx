import * as React from "react";
import type { SVGProps } from "react";
const SvgWaterfallChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M169.882-160Q149-160 134.5-174.583 120-189.167 120-210v-180q0-20.833 14.618-35.417Q149.235-440 170.118-440 191-440 205.5-425.417 220-410.833 220-390v180q0 20.833-14.618 35.417Q190.765-160 169.882-160m155-240Q304-400 289.5-414.583 275-429.167 275-450v-60q0-20.833 14.618-35.417Q304.235-560 325.118-560 346-560 360.5-545.417 375-530.833 375-510v60q0 20.833-14.618 35.417Q345.765-400 324.882-400m155-200Q459-600 444.5-614.583 430-629.167 430-650v-60q0-20.833 14.618-35.417Q459.235-760 480.118-760 501-760 515.5-745.417 530-730.833 530-710v60q0 20.833-14.618 35.417Q500.765-600 479.882-600m155-80Q614-680 599.5-694.583 585-709.167 585-730v-20q0-20.833 14.618-35.417Q614.235-800 635.118-800 656-800 670.5-785.417 685-770.833 685-750v20q0 20.833-14.618 35.417Q655.765-680 634.882-680m155 520Q769-160 754.5-174.583 740-189.167 740-210v-540q0-20.833 14.618-35.417Q769.235-800 790.118-800 811-800 825.5-785.417 840-770.833 840-750v540q0 20.833-14.618 35.417Q810.765-160 789.882-160" />
  </svg>
);
export default SvgWaterfallChart;