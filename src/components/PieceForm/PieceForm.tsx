import ColorSelect from "../ColorSelect";
import LengthSelect from "../LengthSelect";
import WidthSelect from "../WidthSelect";

const PieceForm = () => {
  return (
    <div className="p-2">
      <ColorSelect />
      <br className="h-4" />
      <WidthSelect />
      <br className="h-4" />
      <LengthSelect />
    </div>
  );
};

export default PieceForm;
