import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SUPPORTED_PIECE_WIDTH } from "@/const/dimensions";

const WidthSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Color" />
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
