import * as React from "react";
import type { SVGProps } from "react";
const SvgEgg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M479.942-114.5q-119.572 0-202.507-83.604T194.5-402.391q0-77.554 25.978-156.114t67.191-142.511q41.213-63.952 92.247-104.218Q430.95-845.5 479.943-845.5q50.014 0 100.62 40.266t91.793 104.218q41.188 63.951 67.166 142.511 25.978 78.56 25.978 156.114 0 120.683-82.993 204.287Q599.515-114.5 479.942-114.5m.115-48.13q99.065 0 168.189-69.842 69.124-69.841 69.124-169.68 0-65.044-22.308-134.693-22.308-69.649-57.692-127.263-35.383-57.614-77.22-95.438-41.836-37.824-80.389-37.824-38.491 0-80.409 37.142-41.917 37.141-76.913 94.947-34.996 57.805-57.402 127.826-22.407 70.02-22.407 135.064 0 100.177 69.182 169.969 69.181 69.792 168.245 69.792m19.921-78.848q10.563 0 17.553-6.522 6.991-6.522 6.991-16.163t-6.507-15.989q-6.506-6.348-16.124-6.348-54.746 0-93.068-38.323-38.323-38.322-38.323-93.068 0-9.618-6.356-16.124-6.356-6.507-15.997-6.507-9.642 0-16.155 6.991-6.514 6.99-6.514 17.553 0 72.417 51.041 123.459 51.042 51.041 123.459 51.041M480-480" />
  </svg>
);
export default SvgEgg;