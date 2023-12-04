import * as React from "react";
import type { SVGProps } from "react";
const SvgBadge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M142.152-74.022q-27.599 0-47.865-20.265-20.265-20.266-20.265-47.865v-475.696q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h241.87v-135.695q0-26.391 18.809-45.348t46.026-18.957h62.645q26.802 0 45.759 18.957t18.957 45.348v135.695h241.63q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v475.696q0 27.599-20.337 47.865-20.336 20.265-48.033 20.265zm0-68.13h675.696v-475.696H575.739v30q-.956 28.478-20.272 44.239-19.315 15.761-43.965 15.761h-62.765q-24.889 0-44.324-15.88-19.435-15.881-20.152-44.12v-30H142.152zM232-244.848h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5t-48.5 13.5q-15 5-24 19t-9 32zm336-67h170v-50H568zm-214-50q22.5 0 38.25-15.75t15.75-38.25q0-22.5-15.75-38.25T354-469.848q-22.5 0-38.25 15.75T300-415.848q0 22.5 15.75 38.25t38.25 15.75m214-63h170v-50H568zM450.478-594.304h59.283v-225.457h-59.283zM480-380" />
  </svg>
);
export default SvgBadge;
