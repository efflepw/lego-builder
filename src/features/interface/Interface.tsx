import { useDispatch, useSelector } from "react-redux";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Piece } from "@/models/piece";
import { RootState } from "@/store";
import NewPieceForm from "@/components/NewPieceForm";

import {
  toggleShowBasePlate,
  updateNewPieceColor,
  updateNewPieceConfig,
} from "./interfaceSlice";
import { toggleLockPolarRotation } from "../camera/cameraSlice";
import { clearCanvas } from "../canvas/canvasSlice";
import { useKeyControl, useNewPiecePosition } from ".";
import CanvasOverlay from "@/components/CanvasOverlay";

type Props = {
  children: React.ReactNode;
};

const Interface = ({ children }: Props) => {
  const interfaceState = useSelector((state: RootState) => state.interface);
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

  const togglePlate = () => {
    dispatch(toggleShowBasePlate());
  };

  const onClear = () => {
    dispatch(clearCanvas());
  };

  useNewPiecePosition(interfaceState.newPiece, camera.side);
  useKeyControl(interfaceState.newPiece);

  return (
    <div className="min-h-dvh">
      <ResizablePanelGroup direction="horizontal" className="min-h-dvh">
        <ResizablePanel
          className="h-auto"
          defaultSize={!!interfaceState.newPiece ? 80 : 100}
        >
          <CanvasOverlay
            lockPolarRotation={camera.lockPolarRotation}
            showPlate={interfaceState.showBasePlate}
            toggleShowPlate={togglePlate}
            toggleLockPolarRotation={toggleRotation}
            onClear={onClear}
          />
          {children}
        </ResizablePanel>
        <ResizableHandle />
        {interfaceState.newPiece && (
          <ResizablePanel>
            <NewPieceForm
              newPiece={interfaceState.newPiece}
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
