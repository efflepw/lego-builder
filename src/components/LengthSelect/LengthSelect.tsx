import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SUPPORTED_PIECE_LENGTH } from "@/const/dimensions";

type Props = {
  value: number;
  onUpdate: (length: number) => void;
};

const LengthSelect = ({ value, onUpdate }: Props) => {
  const onValueChange = (value: string) => {
    onUpdate(parseInt(value, 10));
  };

  return (
    <Select value={value.toString()} onValueChange={onValueChange}>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Length" />
      </SelectTrigger>
      <SelectContent>
        {SUPPORTED_PIECE_LENGTH.map((length) => (
          <SelectItem key={length} value={length.toString()}>
            {length}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LengthSelect;
