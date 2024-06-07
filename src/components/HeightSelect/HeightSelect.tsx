import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SUPPORTED_PIECE_HEIGHT } from "@/const/dimensions";

type Props = {
  value: string;
  onUpdate: (height: string) => void;
};

const HeightSelect = ({ value, onUpdate }: Props) => {
  return (
    <Select value={value} onValueChange={onUpdate}>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Height" />
      </SelectTrigger>
      <SelectContent>
        {SUPPORTED_PIECE_HEIGHT.map((width) => (
          <SelectItem key={width} value={width}>
            {width}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default HeightSelect;
