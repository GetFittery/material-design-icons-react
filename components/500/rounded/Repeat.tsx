import * as React from "react";
import type { SVGProps } from "react";
const SvgRepeat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m241.978-204.978 59.5 59.5q9.957 9.956 9.576 23.272-.38 13.315-9.689 23.4-9.786 10.087-23.51 10.457-13.725.37-23.681-9.586L137.891-214.217q-5.587-5.431-8.011-11.425-2.424-5.994-2.424-12.698 0-6.703 2.424-12.564t8.011-11.292l116.283-116.282q10.007-9.957 23.917-9.457 13.909.5 23.606 10.457 9.227 9.956 9.482 23.391.256 13.435-9.701 23.152l-59.5 59.5h457.783v-126.891q0-13.916 9.653-23.512 9.653-9.597 23.652-9.597t23.575 9.597q9.577 9.596 9.577 23.512v124.978q0 28.448-19.962 48.409-19.961 19.961-48.408 19.961zm476.283-481.913H260.478V-560q0 13.916-9.701 23.512-9.701 9.597-23.772 9.597-14.07 0-23.527-9.597-9.456-9.596-9.456-23.512v-124.978q0-28.448 19.89-48.409 19.891-19.961 48.24-19.961h456.109l-59.5-59.5q-10.196-9.717-9.815-23.152.38-13.435 9.836-23.511 9.946-10.077 23.637-10.457 13.69-.38 23.646 9.577l116.283 116.282q5.478 5.517 7.956 11.611 2.479 6.095 2.479 12.65 0 6.556-2.479 12.517-2.478 5.961-7.956 11.44L706.065-579.609q-10.262 9.957-24.029 9.466-13.767-.49-23.604-10.456-9.356-9.966-9.611-23.401-.256-13.435 9.94-23.391z" />
  </svg>
);
export default SvgRepeat;