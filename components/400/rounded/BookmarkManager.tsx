import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkManager = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M140-220v-520zm0 60q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h256q12.444 0 23.722 5t19.366 13.088L481-740h339q24 0 42 18t18 42v194q-14-8-29-11t-31-3v-180H456l-60-60H140v520h360v60zm420 50v-81q0-5.565 2-10.783Q564-207 569-212l211.612-210.773q9.113-9.12 20.25-13.174Q812-440 823-440q12 0 23 4.5t20 13.5l37 37q9 9 13 20t4 22q0 11-4.5 22.5t-13.583 20.624L692-89q-5 5-10.217 7-5.218 2-10.783 2h-81q-12.75 0-21.375-8.625T560-110m300-233-37-37zM620-140h38l121-122-18-19-19-18-122 121zm141-141-19-18 37 37z" />
  </svg>
);
export default SvgBookmarkManager;
