type Props = {
  lockPolarRotation: boolean;
  toggleLockPolarRotation: () => void;
};

const CanvasOverlay = ({
  lockPolarRotation,
  toggleLockPolarRotation,
}: Props) => {
  return (
    <div
      className="absolute left-12 bottom-10 z-10 text-white px-4 py-2 border-2 rounded border-white cursor-pointer"
      onClick={toggleLockPolarRotation}
    >
      {lockPolarRotation ? "180" : "360"}
    </div>
  );
};

export default CanvasOverlay;
