import * as React from "react";
import type { SVGProps } from "react";
const SvgControlCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480-369.978q-45.913 0-77.967-32.055-32.055-32.054-32.055-77.967 0-46.152 32.055-77.967 32.054-31.816 77.967-31.816 46.152 0 78.087 31.816 31.935 31.815 31.935 77.967 0 45.913-31.935 77.967-31.935 32.055-78.087 32.055m-1 296.956L297.174-255.609l47.978-47.978L478-169.5l135.087-135.087 48.978 48.739zM255.848-296.174 73.022-478l182.587-182.587 47.978 47.978-133.848 133.848 134.848 133.848zm88.304-357.239-47.978-48.739 182.065-182.066 182.826 181.827-47.978 47.978L479-788.261zM702.63-296.174l-47.739-48.739 132.848-132.848-134.087-135.087 48.978-48.978L885.218-479z" />
  </svg>
);
export default SvgControlCamera;
