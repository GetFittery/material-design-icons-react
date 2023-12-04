import * as React from "react";
import type { SVGProps } from "react";
const SvgLabPanel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M103.587-116.413q-28.349 0-48.24-19.961-19.89-19.961-19.89-48.409v-230.673q0-26.353 17.983-45.807 17.984-19.454 43.69-21.367h20v-155.175q-18.195-6.173-30.532-22.635-12.337-16.462-12.337-37.647v-84.065q0-25.653 18.397-44.142 18.398-18.489 44.233-18.489h244.305q25.736 0 44.064 18.468 18.327 18.468 18.327 44.402v84.065q0 21.185-12.337 37.527-12.337 16.343-30.533 22.531v154.203h158.566v-154.152q-18.196-6.239-30.533-22.701t-12.337-37.647v-84.065q0-25.653 18.398-44.142 18.397-18.489 44.232-18.489h244.305q25.736 0 44.064 18.489 18.327 18.489 18.327 44.142v84.065q0 21.185-12.337 37.647t-30.532 22.635v155.175h20q25.706 1.913 43.809 21.367 18.104 19.454 18.104 45.807v230.673q0 28.448-19.961 48.409t-48.409 19.961zM581.196-700h240v-80h-240zm-442.153 0h240v-80h-240zm485.022 216.413h154.261v-151.869H624.065zm-442.152 0h154.261v-151.869H181.913zm-80 300.717h756.413v-234.26H101.913zM139.043-700v-80zm442.153 0v-80zM101.913-182.87v-234.26z" />
  </svg>
);
export default SvgLabPanel;
