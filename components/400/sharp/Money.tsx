import * as React from "react";
import type { SVGProps } from "react";
const SvgMoney = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M572-319h191v-322H572zm60-60v-202h71v202zm-308 60h186v-322H324zm60-60v-202h66v202zm-187 60h60v-322h-60zM80-160v-640h800v640zm60-580v520zm0 520h680v-520H140z" />
  </svg>
);
export default SvgMoney;
