import { useEffect } from "react";

type HandleKeyControl = (e: KeyboardEvent) => void;

const useHandleKeyDown = (handleKeyDown: HandleKeyControl) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useHandleKeyDown;
