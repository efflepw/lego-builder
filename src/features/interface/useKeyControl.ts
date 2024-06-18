import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEmptyPiece, restoreDefault } from "./interfaceSlice";
import { addNewPiece } from "../canvas/canvasSlice";
import { Piece } from "@/models/piece";

const useKeyControl = (newPiece: Piece | null) => {
  const dispatch = useDispatch();

  const handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();

    console.log(event.key);
    switch (event.key) {
      case "Enter":
        if (!newPiece) {
          dispatch(addEmptyPiece());
        } else {
          dispatch(addNewPiece(newPiece));
          dispatch(restoreDefault());
        }
        break;
      case "Backspace":
        if (!!newPiece) {
          dispatch(restoreDefault());
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [newPiece]);
};

export default useKeyControl;
