import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SUPPORTED_PIECE_HEIGHT } from "@/const/dimensions";

type Props = {
  onUpdate: (height: string) => void;
};

const HeightSelect = ({ onUpdate }: Props) => {
  return (
    <Select onValueChange={onUpdate}>
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
