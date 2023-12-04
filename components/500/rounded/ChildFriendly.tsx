import * as React from "react";
import type { SVGProps } from "react";
const SvgChildFriendly = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M361.044-70.435q-24.001 0-41.338-17.337-17.336-17.337-17.336-41.413 0-24.076 17.292-41.413 17.292-17.337 41.294-17.337 24.001 0 41.338 17.305 17.336 17.305 17.336 41.326 0 24.195-17.292 41.532-17.292 17.337-41.294 17.337m428.412 0q-24.001 0-41.413-17.337-17.413-17.337-17.413-41.413 0-24.076 17.413-41.413 17.412-17.337 41.413-17.337 24.001 0 41.457 17.305 17.457 17.305 17.457 41.326 0 24.195-17.457 41.532-17.456 17.337-41.457 17.337M543.652-647 383.674-839.174q40.109-20.435 83.544-30.533 43.434-10.098 80.434-10.098 41.861 0 82.105 8.979 40.243 8.978 77.156 27.174 13.718 8.478 15.218 23.554 1.5 15.076-10.218 25.554zM498-301.196h163.456l-293.304-352.63v222.804q0 56.261 36.872 93.044 36.873 36.782 92.976 36.782M108.087-710.891q-14.674 0-24.37-9.696-9.695-9.696-9.695-24.463 0-58.537 36.837-100.45 36.837-41.913 90.528-41.913 29.964 0 56.745 12.858 26.781 12.859 63.542 57.62L747.783-306.63q17.63 20.869 5.393 47.337-12.238 26.467-41.176 26.467H498q-83.63 0-140.804-57.332-57.174-57.332-57.174-140.885v-306.066l-27.087-30.848q-27.044-30.565-42.185-40.826-15.141-10.26-29.649-10.26-29.34 0-44.144 22.804-14.805 22.804-14.805 51.201 0 14.755-9.695 24.451-9.696 9.696-24.37 9.696" />
  </svg>
);
export default SvgChildFriendly;
