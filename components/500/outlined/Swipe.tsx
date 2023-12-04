import * as React from "react";
import type { SVGProps } from "react";
const SvgSwipe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M465.217-74.022q-22.36 0-42.897-8.239-20.538-8.239-36.685-24.552L173.956-319.761l12.131-19.609q12.674-18.63 33.282-26.087 20.609-7.456 42.718-1.021l92.652 25.521V-680q0-13.641 9.273-23.016 9.274-9.375 23.009-9.375 13.734 0 22.998 9.375 9.264 9.375 9.264 23.016v425.022L294.326-290.13l137.743 138.46q6.344 6.583 15.111 9.844 8.766 3.261 18.037 3.261H651q40.805 0 69.207-28.402 28.402-28.403 28.402-69.207v-185.739q0-13.539 9.439-22.846 9.439-9.306 23.174-9.306t22.952 9.306q9.218 9.307 9.218 22.846v185.739q0 67.196-47.627 114.674Q718.139-74.022 651-74.022zm21.066-293.587v-174.304q0-13.539 9.439-22.846 9.439-9.306 23.174-9.306 13.734 0 22.952 9.306 9.217 9.307 9.217 22.846v174.304zm130.782 0v-134.304q0-13.539 9.274-22.846 9.273-9.306 23.008-9.306t22.998 9.306q9.264 9.307 9.264 22.846v134.304zm269.153-332.152H703.587v-46.457h123.195q-74.043-62.608-162.021-98.554-87.978-35.945-184.794-35.945-96.815 0-184.76 35.945-87.946 35.946-161.989 98.554h125.108v46.457H74.022v-186.457h46.456v89.892q78-61.283 169-96.065 91-34.783 190.574-34.783 99.573 0 190.502 34.727 90.928 34.727 169.207 96.121v-89.892h46.457z" />
  </svg>
);
export default SvgSwipe;