import * as React from "react";
import type { SVGProps } from "react";
const SvgScoreboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M573-365v-230h169v230zm50-50h69v-130h-69zm-405 50v-139h119v-41H218v-50h169v139H268v41h119v50zm237-158v-60h50v60zm0 146v-60h50v60zM80-160v-640h210v-80h60v80h260v-80h60v80h210v640zm70-70h305v-60h50v60h305v-500H505v60h-50v-60H150zm0 0v-500z" />
  </svg>
);
export default SvgScoreboard;
