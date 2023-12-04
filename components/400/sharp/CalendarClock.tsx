import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-630h600v-130H180zm0 0v-130zM120-80v-740h125v-60h65v60h340v-60h65v60h125v367q-14.169-7.286-29.085-12.143Q796-470 780-473v-97H180v430h319q6 17 14 31.5T532-80zm611 40q-78.435 0-133.718-55.282Q542-150.565 542-229q0-78.435 55.282-133.717Q652.565-418 731-418q78.435 0 133.718 55.283Q920-307.435 920-229q0 78.435-55.282 133.718Q809.435-40 731-40m58.243-88L817-156l-75-75v-112h-39v126z" />
  </svg>
);
export default SvgCalendarClock;
