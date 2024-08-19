import { useDispatch } from "react-redux";
import {
  restoreDefault,
  rotatePiece,
  updateNewPiecePosition,
} from "./interfaceSlice";
import { BASIC_SIZE, FLAT_BOX_HEIGHT } from "@/const/piece";
import { addNewPiece } from "../canvas/canvasSlice";
import { Piece, Position } from "@/models/piece";
import { useHandleKeyDown } from "@/hooks";
import { useCallback } from "react";
import { Side } from "@/models/camera";

const POSITION_KEYS = ["KeyA", "KeyD", "KeyW", "KeyS"];
const PositionKeysSet = new Set(POSITION_KEYS);

const changePosition = (
  keyCode: string,
  position: Position,
  side: Side,
  setNewPosition: (pos: Position) => void
) => {
  console.log(keyCode, position, side);

  const keyIndex: Record<string, number> = {
    KeyA: 0,
    KeyW: 1,
    KeyD: 2,
    KeyS: 3,
  };
  const newPos = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  newPos.unshift(...newPos.splice(-1 * side));

  const multipliers = newPos[keyIndex[keyCode]];

  setNewPosition([
    position[0] + BASIC_SIZE * multipliers[0],
    position[1],
    position[2] + BASIC_SIZE * multipliers[1],
  ]);
};

const useNewPiecePosition = (newPiece: Piece | null, cameraSide: Side) => {
  const dispatch = useDispatch();

  const setNewPosition = (pos: Position) => {
    dispatch(updateNewPiecePosition(pos));
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!newPiece) return;

    event.preventDefault();

    const position = newPiece.position;

    if (PositionKeysSet.has(event.code)) {
      changePosition(event.code, position, cameraSide, setNewPosition);

      return;
    }

    switch (event.code) {
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

  useHandleKeyDown(useCallback(handleKeyDown, [newPiece]));
};

export default useNewPiecePosition;
