import * as React from "react";
import type { SVGProps } from "react";
const SvgLooks = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M34.5-280q0-92.294 34.962-173.164 34.961-80.869 95.733-141.641 60.772-60.772 141.641-95.733Q387.706-725.5 480-725.5q92.294 0 173.164 34.962 80.869 34.961 141.641 95.733 60.772 60.772 95.733 141.641Q925.5-372.294 925.5-280H860q0-158-111-269T480-660q-158 0-269 111T100-280zm122.87 0q0-135.196 93.681-228.913 93.681-93.717 228.913-93.717 135.232 0 228.949 93.691Q802.63-415.247 802.63-280h-65.26q0-107.804-74.783-182.587Q587.804-537.37 480-537.37q-107.804 0-182.587 74.81Q222.63-387.751 222.63-280z" />
  </svg>
);
export default SvgLooks;
