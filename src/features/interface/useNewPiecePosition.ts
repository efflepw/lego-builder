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
import {
  INTERFACE_KB,
  PLACEMENT_KB,
  POSITION_KB,
  ROTATION_KB,
} from "@/const/keyBindings";

const PositionKeysSet = new Set(Object.values(POSITION_KB));

const keyIndex: Record<string, Side> = {
  [POSITION_KB.left]: 0,
  [POSITION_KB.forward]: 1,
  [POSITION_KB.right]: 2,
  [POSITION_KB.backward]: 3,
};

const directions = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
];

const changePosition = (
  keyCode: string,
  [x, y, z]: Position,
  side: Side,
  setNewPosition: (pos: Position) => void
) => {
  const dMoves = [...directions.slice(side), ...directions.slice(0, side)];

  const [dx, dz] = dMoves[keyIndex[keyCode]];

  setNewPosition([x + BASIC_SIZE * dx, y, z + BASIC_SIZE * dz]);
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
      case PLACEMENT_KB.down:
        dispatch(
          updateNewPiecePosition([
            position[0],
            position[1] - FLAT_BOX_HEIGHT,
            position[2],
          ])
        );
        break;
      case PLACEMENT_KB.up:
        dispatch(
          updateNewPiecePosition([
            position[0],
            position[1] + FLAT_BOX_HEIGHT,
            position[2],
          ])
        );
        break;
      case ROTATION_KB.left:
      case ROTATION_KB.right:
        dispatch(rotatePiece());
        break;
      case INTERFACE_KB.apply:
        dispatch(addNewPiece(newPiece));
        dispatch(restoreDefault());
        break;
      default:
        break;
    }
  };

  useHandleKeyDown(useCallback(handleKeyDown, [newPiece, cameraSide]));
};

export default useNewPiecePosition;
