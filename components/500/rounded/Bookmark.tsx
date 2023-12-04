import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m480-233.304-190.739 81.608q-34.065 14.674-64.652-5.516-30.587-20.191-30.587-57.136v-568.5q0-27.697 20.265-48.033 20.266-20.337 47.865-20.337h435.696q27.697 0 48.033 20.337 20.337 20.336 20.337 48.033v568.5q0 36.945-30.707 57.136-30.707 20.19-64.772 5.516zm0-72.887 217.848 91.843v-568.5H262.152v568.5zm0-476.657H262.152h435.696z" />
  </svg>
);
export default SvgBookmark;
