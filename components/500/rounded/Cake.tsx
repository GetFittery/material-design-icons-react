import * as React from "react";
import type { SVGProps } from "react";
const SvgCake = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M156.891-74.5q-20.348 0-34.359-14.023-14.011-14.023-14.011-34.107V-333.5q0-25.691 17.386-44.878t42.614-21.579h27V-575.5q0-28.098 19.962-48.114 19.961-20.016 48.408-20.016h182.044v-59.935q-20-14.376-30.5-31.443t-10.5-41.359q0-15.307 5.619-29.524 5.62-14.218 16.337-24.935l40.696-42.457q1.247-1.217 12.737-5.456 1.915 0 12.111 5.478l40.674 42.435q10.717 10.717 16.837 24.935 6.119 14.217 6.119 29.524 0 24.185-11 41.315-11 17.132-31 31.487v59.935h182.283q28.098 0 48.114 20.016 20.017 20.016 20.017 48.114v175.543h27q25.228 2.392 42.614 21.579 17.386 19.187 17.386 44.878v210.87q0 20.084-14.023 34.107T803.348-74.5zm107-327.13h432.457V-575.5H263.891zm-87 259h606.457V-333.5H176.891zm87-259h432.457zm-87 259h606.457zm614.588-259H168.521z" />
  </svg>
);
export default SvgCake;