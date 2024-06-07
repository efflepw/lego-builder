import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

const ID = "slickness";

type Props = {
  value: boolean;
  onUpdate: (slickness: boolean) => void;
};

const SlicknessSwitch = ({ value, onUpdate }: Props) => {
  return (
    <div className="flex content-center items-center">
      <Switch id={ID} checked={value} onCheckedChange={onUpdate} />
      <Label htmlFor={ID} className="px-4">
        Slick top
      </Label>
    </div>
  );
};

export default SlicknessSwitch;
