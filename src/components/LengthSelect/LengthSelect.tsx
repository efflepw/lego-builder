import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SUPPORTED_PIECE_LENGTH } from "@/const/dimensions";

const LengthSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Color" />
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
