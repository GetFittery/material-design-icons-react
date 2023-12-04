import * as React from "react";
import type { SVGProps } from "react";
const SvgCompassCalibration = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-79q-79 0-135.5-56.5T288-271q0-79 56.5-135.5T480-463q79 0 135.5 56.5T672-271q0 79-56.5 135.5T480-79m0-60q55 0 93.5-38.5T612-271q0-55-38.5-93.5T480-403q-55 0-93.5 38.5T348-271q0 55 38.5 93.5T480-139M263-491 80-674q81-74 184.177-120Q367.353-840 480-840t215.823 46Q799-748 880-674L697-491q-45-41-99.5-65T480-580q-63 0-117.5 24T263-491m3-82q51-32 104.122-49.5t110-17.5Q537-640 591-624t103 51l97-97q-66-51-146.5-80.5T480-780q-84 0-164 29.5T169-670zm214 302" />
  </svg>
);
export default SvgCompassCalibration;
