const HOME_KEYS = [
  {
    k: "Enter",
    text: "open add new piece drawer",
  },
];

const NEW_PIECE_DRAWER_KEYS = [
  {
    k: "Enter",
    text: "save new piece",
  },
  {
    k: "Backspace",
    text: "close add new piece drawer",
  },
  {
    k: "W, A, S, D",
    text: "move forward, left, backward, right",
  },
  {
    k: "Q, E",
    text: "rotate piece",
  },
];

type Props = {
  state: "NEW_PIECE" | "HOME";
};

const Tips = ({ state }: Props) => {
  const KEYS = state == "HOME" ? HOME_KEYS : NEW_PIECE_DRAWER_KEYS;

  return (
    <div className="bg-[#ffffff] absolute bottom-6 right-10 p-3 rounded-md opacity-70">
      {KEYS.map((tip) => (
        <div key={tip.k}>
          <span className="font-bold">{tip.k}</span>
          <span>{` - ${tip.text}`}</span>
        </div>
      ))}
    </div>
  );
};

export default Tips;
