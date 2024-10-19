import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listinCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, listinCapturing);
      return () => document.removeEventListener("click", handleClick);
    },
    [handler, listinCapturing]
  );
  return ref;
}
