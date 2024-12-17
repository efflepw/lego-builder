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

    if (event.code == INTERFACE_KB.apply) {
      if (!newPiece) {
        dispatch(addEmptyPiece());
      } else {
        dispatch(addNewPiece(newPiece));
        dispatch(restoreDefault());
      }
    } else if (INTERFACE_KB.back.includes(event.code)) {
      if (!!newPiece) {
        dispatch(restoreDefault());
      }
    }
  };

  useHandleKeyDown(handleKeyDown);
};

export default useKeyControl;
