import * as React from "react";
import type { SVGProps } from "react";
const SvgWaterBottle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M375-140h250l32-345q-12-8-20.5-19.5T623-530H377q-5 14-13.5 25.5T343-485zm-9-560-17 69q9 8 16 18.5t11 22.5h249q4-11 10.5-21.5T651-630l-17-70zM320-80l-40-440 19-10q8-5 14-12t6-17q0-9-4-17t-12-12l-23-12 40-160h150v-60h-60v-60h180v60h-60v60h150l39 158-23 12q-8 4-12 12t-4 17q0 10 6 17.5t14 12.5l19 9-39 442zm180-510" />
  </svg>
);
export default SvgWaterBottle;
