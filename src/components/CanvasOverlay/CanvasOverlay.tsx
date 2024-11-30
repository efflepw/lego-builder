type Props = {
  showPlate: boolean;
  lockPolarRotation: boolean;
  toggleShowPlate: () => void;
  toggleLockPolarRotation: () => void;
  onClear: () => void;
};

const CanvasOverlay = ({
  showPlate,
  lockPolarRotation,
  toggleShowPlate,
  toggleLockPolarRotation,
  onClear,
}: Props) => {
  return (
    <div className="absolute left-6 top-4 z-10 flex gap-2">
      <div
        className="text-green-400 px-4 py-1 border-2 rounded border-green-400 cursor-pointer text-center w-[120px]"
        onClick={toggleLockPolarRotation}
      >
        {lockPolarRotation ? "180" : "360"}
      </div>
      <div
        className="text-white px-2 py-1 border-2 rounded border-white cursor-pointer text-center w-[120px]"
        onClick={toggleShowPlate}
      >
        {!showPlate ? "Show plate" : "Hide plate"}
      </div>
      <div
        className="text-red-400 px-4 py-1 border-2 rounded border-red-400 cursor-pointer text-center w-[120px]"
        onClick={onClear}
      >
        Clear
      </div>
    </div>
  );
};

export default CanvasOverlay;
