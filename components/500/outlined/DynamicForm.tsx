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
    <path d="M141.435-510q-28.104 0-48.117-20.019-20.014-20.02-20.014-48.351V-740q0-28.203 20.014-48.286 20.013-20.084 48.117-20.084h397.13V-510zm-2.87-65.5h334.739v-167.13H138.565zm2.87 423.631q-28.104 0-48.117-20.014Q73.304-191.896 73.304-220v-161.869q0-28.104 20.014-48.118Q113.33-450 141.435-450h477.13v298.131zm-2.87-65.501h414.739V-384.5H138.565zm540 65.501V-510h-80v-298.37h287.653l-80 229.805h80.239zM192.37-270.935h60v-60h-60zm0-358.13h60v-60h-60zM138.565-575.5v-167.13zm0 358.13V-384.5z" />
  </svg>
);
export default SvgDynamicForm;
