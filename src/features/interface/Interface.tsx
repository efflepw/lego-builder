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
import { useDispatch } from "react-redux";
import { updateNewPieceColor, updateNewPieceConfig } from "./interfaceSlice";
import { Piece } from "@/models/piece";

type Props = {
  children: React.ReactNode;
};

const Interface = ({ children }: Props) => {
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
            <ColorSelect onUpdate={onColorUpdate} />
            <WidthSelect onUpdate={onConfigUpdate("width")} />
            <LengthSelect onUpdate={onConfigUpdate("length")} />
            <HeightSelect onUpdate={onConfigUpdate("height")} />
            <SlicknessSwitch onUpdate={onConfigUpdate("isSlick")} />
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Interface;
