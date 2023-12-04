import * as React from "react";
import type { SVGProps } from "react";
const SvgEditAttributes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M279-280q-83 0-141.5-58.5T79-480q0-83 58.5-141.5T279-680h400q83 0 141.5 58.5T879-480q0 83-58.5 141.5T679-280zm0-60h400q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q819-538 778.167-579 737.333-620 679-620H279q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q139-422 179.833-381q40.834 41 99.167 41m43.366-48L465-530l-37-37-106 105-45-45-37 37zM480-480" />
  </svg>
);
export default SvgEditAttributes;
