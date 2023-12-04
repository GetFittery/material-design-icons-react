import * as React from "react";
import type { SVGProps } from "react";
const SvgEventBusy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m480-318-78 79q-9 9-21 9t-21-9q-9-9-9-21.5t9-21.5l78-78-79-78q-9-9-9-21t9-21q9-9 21.5-9t21.5 9l78 78 78-79q9-9 21-9t21 9q9 9 9 21.5t-9 21.5l-78 78 79 78q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9zM180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.025 0 23.513 9.2Q310-861.6 310-848v28h340v-28q0-13.6 9.2-22.8 9.2-9.2 22.8-9.2 14.025 0 23.513 9.2Q715-861.6 715-848v28h65q24 0 42 18t18 42v620q0 24-18 42t-42 18zm0-60h600v-430H180zm0-490h600v-130H180zm0 0v-130z" />
  </svg>
);
export default SvgEventBusy;
