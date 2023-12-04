import * as React from "react";
import type { SVGProps } from "react";
const SvgIron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-240v-120q0-66 47-113t113-47h380v-49.825Q620-591 605.625-605.5 591.25-620 570-620H391q-21.25 0-35.625 14.375T341-570h-61q0-46 32.083-78 32.084-32 77.917-32h180q45.833 0 77.917 32.083Q680-615.833 680-570v180q23 0 41.5-13.5T740-440v-170q0-45.833 32.083-77.917Q804.167-720 850-720h30v60h-30q-21.25 0-35.625 14.375T800-610v170q0 48-35.5 79T680-330v90zm60-60h480v-160H240q-42 0-71 29t-29 71zm480 0v-160z" />
  </svg>
);
export default SvgIron;
