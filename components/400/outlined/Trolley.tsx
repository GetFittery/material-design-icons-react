import * as React from "react";
import type { SVGProps } from "react";
const SvgTrolley = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-260v-520H80v-60h140v520h620v60zm59.115 180Q194-80 177-97.677q-17-17.677-17-42.5t17-42.323q17-17.5 42.115-17.5 25.115 0 43 17.677t17.885 42.5Q280-115 262.115-97.5t-43 17.5M290-390v-220h220v220zm60-60h100v-100H350zm220 60v-220h220v220zm60-60h100v-100H630zM779.823-80Q755-80 737.5-97.677t-17.5-42.5Q720-165 737.677-182.5t42.5-17.5Q805-200 822.5-182.323t17.5 42.5Q840-115 822.323-97.5t-42.5 17.5M350-450h100zm280 0h100z" />
  </svg>
);
export default SvgTrolley;
