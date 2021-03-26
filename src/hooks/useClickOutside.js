import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
  const domNode = useRef();
  useEffect(() => {
    const outsideHandler = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", outsideHandler);
    //when done we want to remove the listener
    return () => {
      document.removeEventListener("mousedown", outsideHandler);
    };
  });
  return domNode;
};

export default useClickOutside;
