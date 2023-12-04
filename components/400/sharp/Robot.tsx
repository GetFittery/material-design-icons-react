import * as React from "react";
import type { SVGProps } from "react";
const SvgRobot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24.75 0-42.375-17.625T120-180v-420q0-100 70-170t170-70h240q100 0 170 70t70 170v420q0 24.75-17.625 42.375T780-120zm0-60h600v-420q0-75-52.5-127.5T600-780H360q-75 0-127.5 52.5T180-600zm179.911-310Q331-490 310.5-510.589q-20.5-20.588-20.5-49.5Q290-589 310.589-609.5q20.588-20.5 49.5-20.5Q389-630 409.5-609.411q20.5 20.588 20.5 49.5Q430-531 409.411-510.5q-20.588 20.5-49.5 20.5m240 0Q571-490 550.5-510.589q-20.5-20.588-20.5-49.5Q530-589 550.589-609.5q20.588-20.5 49.5-20.5Q629-630 649.5-609.411q20.5 20.588 20.5 49.5Q670-531 649.411-510.5q-20.588 20.5-49.5 20.5M290-180v-110q0-24.75 17.625-42.375T350-350h260q24.75 0 42.375 17.625T670-290v110h-60v-110H510v110h-60v-110H350v110zm-110 0h600z" />
  </svg>
);
export default SvgRobot;
