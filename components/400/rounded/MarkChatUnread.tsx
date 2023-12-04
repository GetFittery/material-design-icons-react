import * as React from "react";
import type { SVGProps } from "react";
const SvgMarkChatUnread = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M240-240 131-131q-14 14-32.5 6.344T80-152v-668q0-24 18-42t42-18h437q-4 14-6 29.5t-1 30.5H140v600l74-80h606v-349q16.794-5 31.397-13.5Q866-671 880-682v382q0 24-18 42t-42 18zm519.882-479Q714-719 682-751.118q-32-32.117-32-78Q650-875 682.118-907q32.117-32 78-32Q806-939 838-906.882q32 32.117 32 78Q870-783 837.882-751q-32.117 32-78 32M140-820v520z" />
  </svg>
);
export default SvgMarkChatUnread;
