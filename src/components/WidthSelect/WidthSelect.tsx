import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SUPPORTED_PIECE_WIDTH } from "@/const/dimensions";

type Props = {
  onUpdate: (width: number) => void;
};

const WidthSelect = ({ onUpdate }: Props) => {
  const onValueChange = (value: string) => {
    onUpdate(parseInt(value, 10));
  };

  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Width" />
      </SelectTrigger>
      <SelectContent>
        {SUPPORTED_PIECE_WIDTH.map((width) => (
          <SelectItem key={width} value={width.toString()}>
            {width}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default WidthSelect;
