import { RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNewPiecePosition } from "./interfaceSlice";
import { BASIC_SIZE, FLAT_BOX_HEIGHT } from "@/const/piece";

const useNewPiecePosition = () => {
  const dispatch = useDispatch();
  const position = useSelector(
    (state: RootState) => state.interface.newPiece.position
  );

  const handleKeyDown = (event: KeyboardEvent) => {
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
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [position]);
};

export default useNewPiecePosition;
