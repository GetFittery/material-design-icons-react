import * as React from "react";
import type { SVGProps } from "react";
const SvgIndeterminateQuestionBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-172h60v172h172v60zm600 0H608v-60h172v-172h60v172q0 24-18 42t-42 18M120-780q0-24 18-42t42-18h172v60H180v172h-60zm720 0v172h-60v-172H608v-60h172q24 0 42 18t18 42M477.028-245Q493-245 504-256.028q11-11.028 11-27T503.972-310q-11.028-11-27-11T450-309.972q-11 11.028-11 27T450.028-256q11.028 11 27 11M444-393h57q0-29 9.5-49t35.5-46q32-32 45.5-57.5t13.5-54.071Q605-651 569.391-683 533.783-715 479-715q-50 0-87 23.5T338-623l53 22q14-26 37-41.5t51.022-15.5q31.256 0 50.117 17Q548-624 548-598q0 20-11 38.5T500-516q-33 32-44.5 56.5T444-393" />
  </svg>
);
export default SvgIndeterminateQuestionBox;
