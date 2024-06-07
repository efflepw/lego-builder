import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import ColorSelect from "@/components/ColorSelect";
import WidthSelect from "@/components/WidthSelect";
import LengthSelect from "@/components/LengthSelect";
import HeightSelect from "@/components/HeightSelect";
import SlicknessSwitch from "@/components/SlicknessSwitch";
import { useDispatch, useSelector } from "react-redux";
import { updateNewPieceColor, updateNewPieceConfig } from "./interfaceSlice";
import { Piece } from "@/models/piece";
import { RootState } from "@/store";

type Props = {
  children: React.ReactNode;
};

const Interface = ({ children }: Props) => {
  const newPiece = useSelector((state: RootState) => state.interface.newPiece);

  const dispatch = useDispatch();

  const onColorUpdate = (newColor: string): void => {
    dispatch(updateNewPieceColor(newColor));
  };

  const onConfigUpdate =
    (key: keyof Piece["config"]) =>
    (value: string | number | boolean): void => {
      dispatch(updateNewPieceConfig({ [key]: value }));
    };

  return (
    <div className="min-h-dvh">
      <ResizablePanelGroup direction="horizontal" className="min-h-dvh">
        <ResizablePanel className="h-auto" defaultSize={80}>
          {children}
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <div className="px-4 py-8 text-white flex flex-col gap-6">
            <ColorSelect color={newPiece.color} onUpdate={onColorUpdate} />
            <WidthSelect
              value={newPiece.config.width}
              onUpdate={onConfigUpdate("width")}
            />
            <LengthSelect
              value={newPiece.config.length}
              onUpdate={onConfigUpdate("length")}
            />
            <HeightSelect
              value={newPiece.config.height}
              onUpdate={onConfigUpdate("height")}
            />
            <SlicknessSwitch
              value={newPiece.config.isSlick}
              onUpdate={onConfigUpdate("isSlick")}
            />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Interface;
