import * as React from "react";
import type { SVGProps } from "react";
const SvgPatientList = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M640-403q-51 0-84.5-33.5T522-521q0-51 33.5-84.5T640-639q51 0 84.5 33.5T758-521q0 51-33.5 84.5T640-403M400-160v-66q0-18.864 9-35.932T433-286q45-32 98.5-47.5T640-349q55 0 108 17t99 46q14 10 23.5 25.5T880-226v66zm55-71v11h370v-11q-39-26-90-42t-95-16q-44 0-95.5 16T455-231m185-232q26 0 42-16t16-42q0-26-16-42t-42-16q-26 0-42 16t-16 42q0 26 16 42t42 16m-520 53v-60h306v60zm0-330v-60h473v60zm349 165H120v-60h380q-11 13-18.727 27.921Q473.545-592.159 469-575" />
  </svg>
);
export default SvgPatientList;
