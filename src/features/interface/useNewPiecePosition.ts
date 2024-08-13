import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  restoreDefault,
  rotatePiece,
  updateNewPiecePosition,
} from "./interfaceSlice";
import { BASIC_SIZE, FLAT_BOX_HEIGHT } from "@/const/piece";
import { addNewPiece } from "../canvas/canvasSlice";
import { Piece } from "@/models/piece";

const useNewPiecePosition = (newPiece: Piece | null) => {
  const dispatch = useDispatch();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!newPiece) return;

    const position = newPiece.position;

    event.preventDefault();

    switch (event.code) {
      case "KeyA":
        dispatch(
          updateNewPiecePosition([
            position[0] - BASIC_SIZE,
            position[1],
            position[2],
          ])
        );
        break;
      case "KeyD":
        dispatch(
          updateNewPiecePosition([
            position[0] + BASIC_SIZE,
            position[1],
            position[2],
          ])
        );
        break;
      case "KeyS":
        dispatch(
          updateNewPiecePosition([
            position[0],
            position[1],
            position[2] + BASIC_SIZE,
          ])
        );
        break;
      case "KeyW":
        dispatch(
          updateNewPiecePosition([
            position[0],
            position[1],
            position[2] - BASIC_SIZE,
          ])
        );
        break;
      case "KeyF":
        dispatch(
          updateNewPiecePosition([
            position[0],
            position[1] - FLAT_BOX_HEIGHT,
            position[2],
          ])
        );
        break;
      case "KeyX":
        dispatch(
          updateNewPiecePosition([
            position[0],
            position[1] + FLAT_BOX_HEIGHT,
            position[2],
          ])
        );
        break;
      case "KeyQ":
      case "KeyE":
        dispatch(rotatePiece());
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
