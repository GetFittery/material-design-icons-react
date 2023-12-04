import * as React from "react";
import type { SVGProps } from "react";
const SvgDynamicForm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M73.304-510v-298.37h465.261V-510H73.305Zm65.261-65.5h334.739v-167.13H138.565zm-65.26 423.631V-450h545.26v298.131zm65.26-65.501h414.739V-384.5H138.565zm540 65.501V-510h-80v-298.37h287.653l-80 229.805h80.239zM192.37-270.935h60v-60h-60zm0-358.13h60v-60h-60zM138.565-575.5v-167.13zm0 358.13V-384.5z" />
  </svg>
);
export default SvgDynamicForm;
