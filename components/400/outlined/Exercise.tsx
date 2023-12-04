import * as React from "react";
import type { SVGProps } from "react";
const SvgExercise = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="m826-585-42-42 45-45-157-157-45 45-43-43 30-31q23-23 57-22.5t57 23.5l129 129q23 23 23 56.5T857-615zM346-104q-23 23-56.5 23T233-104L90-247q-17-17.378-17-42.689T90-332l44-44 43 42-45 45 157 157 45-45 42 43zm397-308 85-85-331-331-85 85zM463-132l86-86-331-331-86 86zm9-248 109-109-92-92-109 109zm33 290q-16.934 17-41.967 17Q438-73 421-90L90-421q-17-16.934-17-41.967Q73-488 90-505l85-86q17.378-17 42.689-17T260-591l77 77 110-110-77-77q-17-16.934-17-41.967Q353-768 370-785l85-86q17.378-17 42.689-17T540-871l331 331q17 17.378 17 42.689T871-455l-86 85q-16.934 17-41.967 17Q718-353 701-370l-77-77-110 110 77 77q17 17.378 17 42.689T591-175z" />
  </svg>
);
export default SvgExercise;
