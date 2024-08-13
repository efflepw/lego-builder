import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PIECES_COLORS } from "@/const/colors";

type Props = {
  color: string;
  onUpdate: (color: string) => void;
};

const ColorSelect = ({ color, onUpdate }: Props) => {
  return (
    <Select value={color} onValueChange={onUpdate}>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Color" />
      </SelectTrigger>
      <SelectContent>
        {PIECES_COLORS.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ColorSelect;
