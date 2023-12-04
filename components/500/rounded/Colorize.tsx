import * as React from "react";
import type { SVGProps } from "react";
const SvgColorize = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M114.022-148.087v-113.956q0-13.674 5.597-26.729 5.598-13.054 14.794-22.25L488.391-665l-72.239-72L466-786.609l92 92 137.456-137.935q5.957-5.956 13.153-9.315 7.195-3.359 14.391-3.359t14.391 3.598q7.196 3.598 14.153 9.555l80.521 80.521q5.957 6.957 9.555 14.153 3.598 7.195 3.598 14.391t-3.359 14.391q-3.359 7.196-9.315 13.153L694.37-557.761l92 92-49.37 49.37-72-72-353.978 353.978q-9.196 9.196-22.25 14.794-13.055 5.597-26.729 5.597H148.087q-14.674 0-24.37-9.695-9.695-9.696-9.695-24.37m68.13-34.065h83.891L618.891-535 535-618.891 182.152-266.043zM645.63-601.913 767.957-724 724-767.957 601.913-645.63zm0 0-43.717-43.717z" />
  </svg>
);
export default SvgColorize;
