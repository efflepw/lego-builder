import { RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restoreDefault, updateNewPiecePosition } from "./interfaceSlice";
import { BASIC_SIZE, FLAT_BOX_HEIGHT } from "@/const/piece";
import { addNewPiece } from "../canvas/canvasSlice";

const useNewPiecePosition = () => {
  const dispatch = useDispatch();
  const newPiece = useSelector((state: RootState) => state.interface.newPiece);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!newPiece) return;

    const position = newPiece.position;

    event.preventDefault();
    switch (event.key) {
      case "a":
        dispatch(
          updateNewPiecePosition([
            position[0] - BASIC_SIZE,
            position[1],
            position[2],
          ])
        );
        break;
      case "d":
        dispatch(
          updateNewPiecePosition([
            position[0] + BASIC_SIZE,
            position[1],
            position[2],
          ])
        );
        break;
      case "s":
        dispatch(
          updateNewPiecePosition([
            position[0],
            position[1],
            position[2] + BASIC_SIZE,
          ])
        );
        break;
      case "w":
        dispatch(
          updateNewPiecePosition([
            position[0],
            position[1],
            position[2] - BASIC_SIZE,
          ])
        );
        break;
      case "f":
        dispatch(
          updateNewPiecePosition([
            position[0],
            position[1] - FLAT_BOX_HEIGHT,
            position[2],
          ])
        );
        break;
      case "x":
        dispatch(
          updateNewPiecePosition([
            position[0],
            position[1] + FLAT_BOX_HEIGHT,
            position[2],
          ])
        );
        break;
      case "Enter":
        dispatch(addNewPiece(newPiece));
        dispatch(restoreDefault());
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

export default useNewPiecePosition;
