import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SUPPORTED_PIECE_LENGTH } from "@/const/dimensions";

type Props = {
  onUpdate: (length: number) => void;
};

const LengthSelect = ({ onUpdate }: Props) => {
  const onValueChange = (value: string) => {
    onUpdate(parseInt(value, 10));
  };

  return (
    <Select onValueChange={onValueChange}>
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
