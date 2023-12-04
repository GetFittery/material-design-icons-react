import * as React from "react";
import type { SVGProps } from "react";
const SvgHighlightMouseCursor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M518.152-71q-9.538 1-18.956 1.5-9.419.5-19.196.5-85.152 0-160.177-32.314-75.025-32.315-130.609-87.9-55.585-55.584-87.9-130.609Q69-394.848 69-480q0-85.152 32.314-160.177 32.315-75.025 87.9-130.609 55.584-55.585 130.609-87.9Q394.848-891 480-891q85.152 0 160.177 32.314 75.025 32.315 130.609 87.9 55.585 55.584 87.9 130.609Q891-565.152 891-480q0 9.797-.5 19.355t-1.5 19.036l-63.5-19.514V-480q0-144.069-100.733-244.784Q624.034-825.5 479.941-825.5T235.174-724.767Q134.5-624.034 134.5-479.941t100.716 244.767Q335.931-134.5 480-134.5h18.717zm265.044-24.935-131.761-131-33.087 100.022q-4.5 12.435-17.044 11.935-12.543-.5-16.021-12.935l-96.087-321.5q-2.479-9.196 4.858-16.533 7.337-7.337 16.533-5.097l321.739 96.326q12.196 3.478 12.696 16.021.5 12.544-11.696 17.044l-100.261 33.087 132 131.761q17.479 17.517 17.479 40.454t-17.512 40.415q-17.512 17.479-40.935 17.479-23.423 0-40.901-17.479" />
  </svg>
);
export default SvgHighlightMouseCursor;