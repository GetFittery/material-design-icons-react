import * as React from "react";
import type { SVGProps } from "react";
const SvgSkeleton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M480.069-77.13q-45.41 0-79.218-9.62-33.808-9.62-75.329-35.62l-109.479-70q-28.521-18-42.76-46.739-14.24-28.739-14.24-60.126 0-67.895 47.403-103.971 47.402-36.077 105.565-36.077 30.902 0 58.59 9.979 27.688 9.978 50.269 30.413 4.043 4.282 9.615 6.724 5.571 2.442 18.558 4.884v-73.195q-55.956-2.761-102.076-12-46.119-9.239-79-24.479-32.88-15.239-51.141-36.097-18.261-20.859-18.261-47.78 0-19.942 13.761-37.511 13.761-17.568 38.761-32.807-5.761-9-9.141-19.457-3.381-10.456-3.381-22.304 0-22.239 16.881-40.859 16.88-18.619 45.88-33.858-1.761-4.522-2.261-8.93-.5-4.408-.5-9.353 0-26.478 28.098-47.294 28.098-20.815 73.337-31.815v65.826q-11.739 4.3-20.337 8.313-8.598 4.013-13.119 7.535 5 5 22.923 11.141 17.924 6.142 59.576 9.142v-124.109h61.914v124.109q41.652-3 59.576-9.142 17.923-6.141 22.923-11.141-4.521-3.761-13.065-7.782-8.543-4.022-20.63-7.976l1-65.916q45.239 11 72.956 32.196 27.718 21.196 27.718 46.913 0 4.239-2.761 18.174 29 15.348 45.88 34.087 16.881 18.739 16.881 40.823 0 11.677-3.381 22.677-3.38 11-9.141 20 25 14.239 38.761 31.807 13.761 17.569 13.761 37.511 0 26.921-18.261 47.78-18.261 20.858-51.141 36.097-32.881 15.24-79 24.479-46.12 9.239-102.076 12v73.195q12.804-2.521 18.347-4.923 5.544-2.403 9.587-6.685 22.239-20.435 50.696-30.413 28.456-9.979 58.483-9.979 58.082 0 105.604 36.577 47.522 36.576 47.522 104.38 0 31.675-14.479 60.375-14.478 28.7-43.239 46.676l-109 68.905q-41.668 26-75.215 35.62-33.546 9.62-79.194 9.62m-.015-62.87q35.053 0 61.735-7.551 26.683-7.55 59.254-28.21l109-69q13.522-8.522 20.903-22.663 7.38-14.141 7.38-30.976 0-37.522-28.163-57.767Q682-376.413 648-376.413q-17.761 0-34.954 5.88-17.194 5.881-30.85 16.642-22.239 19.239-47.718 29.358Q509-314.413 480-314.413t-54.478-10.12q-25.479-10.119-47.718-29.358-13.656-10.761-30.85-16.642-17.193-5.88-34.954-5.88-34 0-62.043 19.761-28.044 19.761-28.044 57.326 0 16.522 7.261 31.283 7.261 14.76 20.783 23.282l110.239 70Q392.478-154 418.739-147q26.261 7 61.315 7m-31.011-384.065v-56.413q-48-2-82.663-8.761-34.663-6.761-60.663-18.522-20.847 9.044-30.608 16.923-9.761 7.879-12.479 12.164 4.392 11.957 47.251 30.902 42.858 18.946 139.162 23.707M330-258.326q12 0 21-8.88 9-8.881 9-21.12 0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12.239 9 21.12 9 8.88 21 8.88m119.043-385.739v-55.362q-34.76-2.051-59.326-6.812-24.565-4.761-42.521-13.522-21.326 8.283-31.707 16.185-10.38 7.902-12.859 12.38 2.196 13.522 37.957 27.946 35.761 14.424 108.456 19.185m61.914 120q96.304-4.761 139.162-23.707 42.859-18.945 47.251-30.902-2.24-3-12.359-11.141-10.12-8.142-30.968-17.946-26 11.761-60.663 18.522-34.663 6.761-82.423 8.799zm0-120q72.695-4.522 108.336-19.065 35.642-14.544 38.316-28.066-2.718-4.478-13.337-12.5-10.62-8.021-31.707-16.065-17.898 8.522-42.386 13.402-24.487 4.881-59.222 6.881zM630-258.326q12 0 21-8.88 9-8.881 9-21.12 0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12.239 9 21.12 9 8.88 21 8.88m-150 0" />
  </svg>
);
export default SvgSkeleton;