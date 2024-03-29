import * as React from "react";
import type { SVGProps } from "react";
const SvgSpeakerFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M700-80H260q-24.75 0-42.375-17.625T200-140v-680q0-24.75 17.625-42.375T260-880h440q24.75 0 42.375 17.625T760-820v680q0 24.75-17.625 42.375T700-80M481-604q32 0 54-22t22-54q0-32-22-54t-54-22q-32 0-54 22t-22 54q0 32 22 54t54 22m-1 408q69 0 116.5-47.5T644-360q0-69-47.5-116.5T480-524q-69 0-116.5 47.5T316-360q0 69 47.5 116.5T480-196m-.071-60Q437-256 406.5-286.571t-30.5-73.5Q376-403 406.571-433.5t73.5-30.5Q523-464 553.5-433.429t30.5 73.5Q584-317 553.429-286.5t-73.5 30.5" />
  </svg>
);
export default SvgSpeakerFill;
