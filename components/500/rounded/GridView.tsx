import * as React from "react";
import type { SVGProps } from "react";
const SvgGridView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M182.152-510q-28.104 0-48.117-20.019-20.013-20.02-20.013-48.351v-199.478q0-28.202 20.013-48.286t48.117-20.084h199.717q28.104 0 48.118 20.084Q450-806.05 450-777.848v199.478q0 28.331-20.013 48.351Q409.973-510 381.869-510zm0 395.978q-28.104 0-48.117-20.013-20.013-20.013-20.013-48.117v-199.717q0-28.104 20.013-48.118Q154.048-450 182.152-450h199.717q28.104 0 48.118 20.013Q450-409.973 450-381.869v199.717q0 28.104-20.013 48.117-20.014 20.013-48.118 20.013zM578.37-510q-28.331 0-48.351-20.019Q510-550.039 510-578.37v-199.478q0-28.202 20.019-48.286 20.02-20.084 48.351-20.084h199.478q28.202 0 48.286 20.084t20.084 48.286v199.478q0 28.331-20.084 48.351Q806.05-510 777.848-510zm0 395.978q-28.331 0-48.351-20.013Q510-154.048 510-182.152v-199.717q0-28.104 20.019-48.118Q550.039-450 578.37-450h199.478q28.202 0 48.286 20.013 20.084 20.014 20.084 48.118v199.717q0 28.104-20.084 48.117-20.084 20.013-48.286 20.013zM182.152-578.37h199.717v-199.478H182.152zm396.218 0h199.478v-199.478H578.37zm0 396.218h199.478v-199.717H578.37zm-396.218 0h199.717v-199.717H182.152zM381.869-578.37" />
  </svg>
);
export default SvgGridView;
