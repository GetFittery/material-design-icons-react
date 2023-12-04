import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M352-240h175q14 0 24.5-10.5T562-275v-55l80 46v-152l-80 46v-55q0-14-10.5-24.5T527-480H352q-14 0-24.5 10.5T317-445v170q0 14 10.5 24.5T352-240M222.152-74.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-675.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337H583.63L806.218-663.63v521.478q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm326.696-557.826v-186H222.152v675.696h515.696v-489.696zm-326.696-186v186zv675.696z" />
  </svg>
);
export default SvgVideoFile;
