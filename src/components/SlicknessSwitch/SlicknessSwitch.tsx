import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

type Props = {
  onUpdate: (slickness: boolean) => void;
};

const SlicknessSwitch = ({ onUpdate }: Props) => {
  return (
    <div className="flex content-center items-center">
      <Switch id="slickness" onCheckedChange={onUpdate} />
      <Label htmlFor="slickness" className="px-4">
        Slick top
      </Label>
    </div>
  );
};

export default SlicknessSwitch;
