import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { restoreDefault, updateNewPiecePosition } from "./interfaceSlice";
import { BASIC_SIZE, FLAT_BOX_HEIGHT } from "@/const/piece";
import { addNewPiece } from "../canvas/canvasSlice";
import { Piece } from "@/models/piece";

const useNewPiecePosition = (newPiece: Piece | null) => {
  const dispatch = useDispatch();

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
    if (!!newPiece) {
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [newPiece]);
};

export default useNewPiecePosition;
