import * as React from "react";
import type { SVGProps } from "react";
const SvgBrowseActivity = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M80-590v-190q0-24 18-42t42-18h680q24 0 42 18t18 42v190h-60v-190H140v190zm60 350q-24 0-42-18t-18-42v-230h60v230h680v-230h60v230q0 24-18 42t-42 18zM40-120v-60h880v60zm40-410v-60h240q8.161 0 15.581 4Q343-582 347-574l55 112 131-231q4-8 11.5-11.5t15.619-3.5q8.119 0 15.5 3.5T587-693l50.553 103H880v60H619q-8.25 0-15.75-4T592-546l-34-69-131 229q-3.723 8-11.17 12t-15.639 4q-8.191 0-15.691-4T373-386l-72-144z" />
  </svg>
);
export default SvgBrowseActivity;
