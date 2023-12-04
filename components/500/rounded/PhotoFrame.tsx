import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoFrame = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M190.957-111.152q-14.424 0-24.245-9.821-9.821-9.82-9.821-24.483v-48.566h-54.739q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-475.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h755.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v475.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265h-54.5v48.566q0 14.663-9.955 24.483-9.955 9.821-24.35 9.821zm-88.805-151h755.696v-475.696H102.152zM255.304-370h450.392q10.054 0 14.722-9.196 4.669-9.195-1.048-18.152l-128.327-171.13q-5.717-6.718-13.793-6.837-8.076-.12-13.554 6.598L440.957-411.174l-83.696-100.739q-5.717-5.717-13.294-5.837-7.576-.12-13.054 6.598L241.63-397.348q-6.717 8.957-1.669 18.152Q245.009-370 255.304-370M102.152-262.152v-475.696z" />
  </svg>
);
export default SvgPhotoFrame;
