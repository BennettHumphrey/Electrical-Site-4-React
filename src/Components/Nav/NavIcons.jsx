import React from "react";

const size = "1.3rem";

export function MaterialSymbolsHome(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path fill="white" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"></path>
    </svg>
  );
}

export function MaterialSymbolsConstruction(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="m18.9 21l-5.475-5.475l2.1-2.1L21 18.9zM5.1 21L3 18.9L9.9 12l-1.7-1.7l-.7.7l-1.275-1.275v2.05l-.7.7L2.5 9.45l.7-.7h2.05L4 7.5l3.55-3.55q.5-.5 1.075-.725T9.8 3t1.175.225t1.075.725l-2.3 2.3L11 7.5l-.7.7L12 9.9l2.25-2.25q-.1-.275-.162-.575t-.063-.6q0-1.475 1.013-2.488t2.487-1.012q.375 0 .713.075t.687.225L16.45 5.75l1.8 1.8l2.475-2.475q.175.35.238.687t.062.713q0 1.475-1.012 2.488t-2.488 1.012q-.3 0-.6-.05t-.575-.175z"
      ></path>
    </svg>
  );
}

export function MdiContact(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"
      ></path>
    </svg>
  );
}

export function House() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
    >
      <g fill="none">
        <g fill="white" clipPath="url(#fluentEmojiHighContrastHouse0)">
          <path d="M23.14 21.002h-4.28c-.48 0-.86-.38-.86-.86v-4.28c0-.47.38-.86.86-.86h4.28c.47 0 .86.38.86.86v4.28c0 .48-.38.86-.86.86"></path>
          <path d="m18.28.923l.004.005l12.755 12.565l.003.003a3.17 3.17 0 0 1-.003 4.546a3.2 3.2 0 0 1-2.039.916v6.151a3.91 3.91 0 0 1 3 3.803v2.09H0v-2.09a3.904 3.904 0 0 1 3-3.804v-6.11a3.23 3.23 0 0 1-2.04-.917a3.183 3.183 0 0 1-.002-4.555l.003-.002L4 10.532v-7.01C4 2.059 5.208 1 6.543 1h2.924c1.102 0 2.092.72 2.42 1.769L13.752.93c1.26-1.252 3.28-1.228 4.526-.008M10 7.432v-3.91A.53.53 0 0 0 9.467 3H6.543A.53.53 0 0 0 6 3.523v7.846zm-5 8.314v11.256h2c0-.55.45-1 1-1v-9.61c0-.75.61-1.36 1.36-1.36h5.29c.75 0 1.36.61 1.36 1.36v9.612c.527.026.95.465.95.998H27V15.706L16.02 4.893zm10 4.756a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0"></path>
        </g>
        <defs>
          <clipPath id="fluentEmojiHighContrastHouse0">
            <path fill="#fff" d="M0 0h32v32H0z"></path>
          </clipPath>
        </defs>
      </g>
    </svg>
  );
}

export function Apartment() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
    >
      <path
        fill="white"
        d="M14 15V4h-3V1H2v14H0v1h7v-3h2v3h7v-1zm-8-4H4V9h2zm0-3H4V6h2zm0-3H4V3h2zm3 6H7V9h2zm0-3H7V6h2zm0-3H7V3h2zm4 6h-2V9h2zm0-3h-2V6h2z"
      ></path>
    </svg>
  );
}
