import { Piece } from "@/models/piece";
import WidthSelect from "../WidthSelect";
import ColorSelect from "../ColorSelect";
import HeightSelect from "../HeightSelect";
import SlicknessSwitch from "../SlicknessSwitch";

type Props = {
  newPiece: Piece;
  onColorUpdate: (newColor: string) => void;
  onConfigUpdate: (
    key: keyof Piece["config"]
  ) => (value: string | number | boolean) => void;
};

const NewPieceForm = ({ newPiece, onColorUpdate, onConfigUpdate }: Props) => {
  return (
    <div>
      <div className="px-4 py-8 text-white flex flex-col gap-6">
        <ColorSelect color={newPiece.color} onUpdate={onColorUpdate} />
        <WidthSelect
          label="Width"
          value={newPiece.config.width}
          onUpdate={onConfigUpdate("width")}
        />
        <WidthSelect
          label="Length"
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
    </div>
  );
};

export default NewPieceForm;
