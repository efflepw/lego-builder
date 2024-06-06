import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SUPPORTED_PIECE_COLORS } from "@/const/colors";

type Props = {
  onUpdate: (color: string) => void;
};

const ColorSelect = ({ onUpdate }: Props) => {
  return (
    <Select onValueChange={onUpdate}>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Color" />
      </SelectTrigger>
      <SelectContent>
        {SUPPORTED_PIECE_COLORS.map((color) => (
          <SelectItem key={color} value={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ColorSelect;
