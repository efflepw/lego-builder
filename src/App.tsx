import { useDispatch } from "react-redux";
import "./App.css";
import { BuilderCanvas } from "./features/canvas";
import { Interface } from "./features/interface";
import { useLocalStorage } from "./hooks";
import { useEffect } from "react";
import { Piece } from "./models/piece";
import { defaultCanvasPiece, setLoadedPieces } from "./features/canvas";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { getItem } = useLocalStorage<Piece[]>("pieces", [
      defaultCanvasPiece,
    ]);

    dispatch(setLoadedPieces(getItem()));
  }, [dispatch]);

  return (
    <main className="dark bg-background h-screen">
      <Interface>
        <BuilderCanvas />
      </Interface>
    </main>
  );
};

export default App;
