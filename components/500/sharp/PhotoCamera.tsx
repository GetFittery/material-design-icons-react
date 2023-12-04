import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M479.444-265.565q73.273 0 122.632-49.303 49.359-49.302 49.359-122.576 0-73.034-49.303-122.013-49.302-48.978-122.576-48.978-73.034 0-122.013 48.922-48.978 48.922-48.978 121.957 0 73.273 48.922 122.632 48.922 49.359 121.957 49.359m.056-64.783q-46.065 0-76.109-30.543-30.043-30.544-30.043-76.609t30.043-76.228q30.044-30.163 76.109-30.163t76.728 30.163q30.663 30.163 30.663 76.228t-30.663 76.609q-30.663 30.543-76.728 30.543M74.022-114.022v-645.196H283.89l75.392-87h241.434l75.631 87h209.87v645.196zm68.13-68.13h675.696v-508.696h-172.37l-74.913-87H389.913l-75.87 87H142.152zM480-437" />
  </svg>
);
export default SvgPhotoCamera;