import { useDispatch } from "react-redux";

import { Piece } from "@/models/piece";
import { useHandleKeyDown } from "@/hooks";

import { addEmptyPiece, restoreDefault } from "./interfaceSlice";
import { addNewPiece } from "../canvas/canvasSlice";
import { INTERFACE_KB } from "@/const/keyBindings";

const useKeyControl = (newPiece: Piece | null) => {
  const dispatch = useDispatch();

  const handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault();

    switch (event.code) {
      case INTERFACE_KB.apply:
        if (!newPiece) {
          dispatch(addEmptyPiece());
        } else {
          dispatch(addNewPiece(newPiece));
          dispatch(restoreDefault());
        }
        break;
      case INTERFACE_KB.back:
        if (!!newPiece) {
          dispatch(restoreDefault());
        }
        break;
      default:
        break;
    }
  };

  useHandleKeyDown(handleKeyDown);
};

export default useKeyControl;
