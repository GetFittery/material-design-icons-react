import * as React from "react";
import type { SVGProps } from "react";
const SvgChildFriendly = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M361-80q-23 0-39.5-16.5T305-136q0-23 16.5-39.5T361-192q23 0 39.5 16.5T417-136q0 23-16.5 39.5T361-80m423 0q-23 0-39.5-16.5T728-136q0-23 16.5-39.5T784-192q23 0 39.5 16.5T840-136q0 23-16.5 39.5T784-80M536-647 382-832q37-19 79-28.5t79-9.5q51 0 99 13t90 41zM306-240v-494l-29-33q-28-32-43.5-42.5T203-820q-31 0-47 24t-16 52H80q0-56 36-96t87-40q29 0 54.5 12.5T320-810l477 570zm60-60h300L366-661zm150-181" />
  </svg>
);
export default SvgChildFriendly;
