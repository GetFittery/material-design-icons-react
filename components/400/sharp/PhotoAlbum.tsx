import * as React from "react";
import type { SVGProps } from "react";
const SvgPhotoAlbum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M160-80v-800h640v800zm60-60h520v-680h-60v266l-97-56-97 56v-266H220zm64-97h397L553-408 448-272l-70-88zm-64 97v-680zm266-414 97-56 97 56-97-56z" />
  </svg>
);
export default SvgPhotoAlbum;
