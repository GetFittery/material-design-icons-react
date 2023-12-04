import * as React from "react";
import type { SVGProps } from "react";
const SvgSanitizer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M682.687-651.674q-20.774 0-36.133-15.389-15.358-15.388-15.358-36.285 0-15.565 13.782-37.304 13.783-21.739 25.537-36.131 5.518-5.478 12.295-5.478t12.255 5.478q12.074 14.423 25.776 35.907 13.703 21.485 13.703 37.528 0 20.897-15.125 36.285-15.125 15.389-36.732 15.389m115.619 284.783q-38.132 0-65.469-27.182-27.337-27.181-27.337-65.449 0-31.521 25.402-74.521t47.316-71.109q7.771-8.957 20.059-8.957t20.006 8.957q21.913 28.109 47.315 71.109 25.402 43 25.402 74.521 0 38.268-26.881 65.449-26.882 27.182-65.813 27.182m-447.154 40v50q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625 12.825 0 21.325-8.625t8.5-21.375v-50h50q12.75 0 21.375-8.676 8.625-8.675 8.625-21.38 0-12.705-8.625-21.325-8.625-8.619-21.375-8.619h-50v-50q0-12.511-8.675-21.256-8.676-8.744-21.5-8.744-12.825 0-21.325 8.744-8.5 8.745-8.5 21.256v50h-50q-12.75 0-21.375 8.795t-8.625 21.5q0 12.705 8.625 21.205 8.625 8.5 21.375 8.5zM212.826-137.37h336.891V-490q0-70.283-49.141-119.304-49.141-49.022-118.924-49.022-69.783 0-119.304 49.022Q212.826-560.283 212.826-490zm0 0h336.891zm0 68.37q-27.599 0-47.865-20.336-20.266-20.336-20.266-48.034V-490q0-87.092 57-152.531 57-65.44 145.392-81.447v-98.652h-60.479q-14.424 0-24.244-9.872-9.821-9.871-9.821-24.489t9.821-24.314q9.82-9.695 24.244-9.695H504.5q25.633 0 48.671 5.709 23.039 5.71 44.363 17.762 8.423 4.159 14.02 12.712 5.598 8.552 5.598 18.572 0 14.424-10.191 23.997-10.192 9.574-24.63 9.574-3.005 0-18.157-4.478-14.306-7.335-28.742-11.407-14.435-4.071-30.932-4.071h-89.044v98.652q88.392 16.007 145.392 81.447 57 65.439 57 152.531v352.63q0 27.698-20.392 48.034Q577.065-69 549.717-69z" />
  </svg>
);
export default SvgSanitizer;
