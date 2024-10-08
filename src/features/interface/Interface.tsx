import { useDispatch, useSelector } from "react-redux";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Piece } from "@/models/piece";
import { RootState } from "@/store";
import NewPieceForm from "@/components/NewPieceForm";

import { updateNewPieceColor, updateNewPieceConfig } from "./interfaceSlice";
import { useKeyControl, useNewPiecePosition } from ".";

type Props = {
  children: React.ReactNode;
};

const Interface = ({ children }: Props) => {
  const newPiece = useSelector((state: RootState) => state.interface.newPiece);
  const cameraSide = useSelector((state: RootState) => state.camera.side);

  const dispatch = useDispatch();

  const onColorUpdate = (newColor: string): void => {
    dispatch(updateNewPieceColor(newColor));
  };

  const onConfigUpdate =
    (key: keyof Piece["config"]) =>
    (value: string | number | boolean): void => {
      dispatch(updateNewPieceConfig({ [key]: value }));
    };

  useNewPiecePosition(newPiece, cameraSide);
  useKeyControl(newPiece);

  return (
    <div className="min-h-dvh">
      <ResizablePanelGroup direction="horizontal" className="min-h-dvh">
        <ResizablePanel className="h-auto" defaultSize={!!newPiece ? 80 : 100}>
          {children}
        </ResizablePanel>
        <ResizableHandle />
        {newPiece && (
          <ResizablePanel>
            <NewPieceForm
              newPiece={newPiece}
              onConfigUpdate={onConfigUpdate}
              onColorUpdate={onColorUpdate}
            />
          </ResizablePanel>
        )}
      </ResizablePanelGroup>
    </div>
  );
};

export default Interface;
