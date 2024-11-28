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
import { toggleLockPolarRotation } from "../camera/cameraSlice";
import { useKeyControl, useNewPiecePosition } from ".";
import CanvasOverlay from "@/components/CanvasOverlay";

type Props = {
  children: React.ReactNode;
};

const Interface = ({ children }: Props) => {
  const newPiece = useSelector((state: RootState) => state.interface.newPiece);
  const camera = useSelector((state: RootState) => state.camera);

  const dispatch = useDispatch();

  const onColorUpdate = (newColor: string): void => {
    dispatch(updateNewPieceColor(newColor));
  };

  const onConfigUpdate =
    (key: keyof Piece["config"]) =>
    (value: string | number | boolean): void => {
      dispatch(updateNewPieceConfig({ [key]: value }));
    };

  const toggleRotation = () => {
    dispatch(toggleLockPolarRotation());
  };

  useNewPiecePosition(newPiece, camera.side);
  useKeyControl(newPiece);

  return (
    <div className="min-h-dvh">
      <ResizablePanelGroup direction="horizontal" className="min-h-dvh">
        <ResizablePanel className="h-auto" defaultSize={!!newPiece ? 80 : 100}>
          <CanvasOverlay
            lockPolarRotation={camera.lockPolarRotation}
            toggleLockPolarRotation={toggleRotation}
          />
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
