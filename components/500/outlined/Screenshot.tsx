import * as React from "react";
import type { SVGProps } from "react";
const SvgScreenshot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M510.37-222.63v-50h107v-101h50v151zM292.63-576.37v-161h160v50h-110v111zm-30 541.87q-27.599 0-47.864-20.266Q194.5-75.03 194.5-102.63v-754.74q0-27.599 20.266-47.864Q235.031-925.5 262.63-925.5h434.74q27.599 0 47.864 20.266Q765.5-884.969 765.5-857.37v754.74q0 27.599-20.266 47.864Q724.969-34.5 697.37-34.5zm0-98.13v30h434.74v-30zm0-60h434.74v-574.74H262.63zm0-634.74h434.74v-30H262.63zm0 0v-30zm0 694.74v30z" />
  </svg>
);
export default SvgScreenshot;
