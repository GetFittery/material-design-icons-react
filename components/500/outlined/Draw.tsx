import * as React from "react";
import type { SVGProps } from "react";
const SvgDraw = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M154.022-114.022v-128.717l581.043-581.044q11.239-11.478 23.178-16.956 11.938-5.479 25.257-5.479 12.393 0 24.534 5.479 12.14 5.478 23.618 16.956l32.609 32.131q11.239 10.239 16.598 22.337 5.359 12.097 5.359 25.337 0 12.373-5.2 24.867-5.2 12.493-16.84 24.127l-581.2 580.962zm62.869-62.63h41.131L707.37-626.239l-20.557-20.574-20.335-20.557-449.587 449.588zm607.218-566.326-41.131-41.131zm-137.296 96.165-20.335-20.557 40.892 41.131zm-130.4 532.791q78.717 0 140.076-36.827 61.359-36.828 61.359-104.515 0-40.332-29.62-74.071-29.619-33.739-92.619-52.978l-49.153 49.152q50.24 12 79.5 33.761 29.261 21.761 29.261 44.044 0 31.76-40.167 55.282-40.167 23.522-98.637 23.522-12.514 0-21.855 8.841-9.341 8.84-9.341 22.355 0 12.717 9.341 22.076 9.341 9.358 21.855 9.358M240.239-415.196l50.87-50.869q-57.826-13.239-86.142-27.806-28.315-14.566-28.315-30.987 0-15.207 21.022-29.707t88.261-38.783q83.239-30.043 111.978-59.022 28.739-28.978 28.739-71.413 0-56.478-41.359-89.456-41.358-32.979-109.837-32.979-42.478 0-76.717 14.74-34.239 14.739-51.478 36.911-8.239 9.545-7.739 22.023.5 12.479 12.037 20.957 10.298 8.239 23.174 6.859 12.876-1.381 21.441-10.098 14.761-14.761 33.522-21.641 18.76-6.881 45.76-6.881 45.289 0 66.927 17.594 21.639 17.593 21.639 41.971 0 20-18.881 35-18.88 15-84.402 37.805-95.196 33.76-120.957 62.358-25.76 28.598-25.76 63.837 0 34.233 29.195 64.671 29.196 30.438 97.022 44.916" />
  </svg>
);
export default SvgDraw;