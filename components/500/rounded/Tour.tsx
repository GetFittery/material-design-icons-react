import * as React from "react";
import type { SVGProps } from "react";
const SvgTour = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M265.022-402.348v294.261q0 14.424-9.871 24.245-9.871 9.82-24.37 9.82-14.498 0-24.194-9.82-9.696-9.821-9.696-24.245v-743.826q0-14.394 9.871-24.349 9.871-9.956 24.37-9.956 14.498 0 24.194 9.956 9.696 9.955 9.696 24.349v48.261h536.196q18.018 0 28.281 15.293 10.262 15.294 3.306 32.446L767.848-603l64.957 152.913q6.956 17.152-3.306 32.446-10.263 15.293-28.281 15.293zm0-333.174v265.044zM503.125-531q29.788 0 50.788-21.212 21-21.213 21-51 0-29.788-21.212-50.788-21.213-21-51-21-29.788 0-50.788 21.212-21 21.213-21 51 0 29.788 21.212 50.788 21.213 21 51 21m-238.103 60.522h485.739l-55-132.522 55-132.522H265.022z" />
  </svg>
);
export default SvgTour;