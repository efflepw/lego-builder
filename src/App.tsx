import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { BuilderCanvas } from "./features/canvas";
import { Interface } from "./features/interface";
import { useLocalStorage } from "./hooks";
import { useEffect } from "react";
import { Piece } from "./models/piece";
import { defaultCanvasPiece, setLoadedPieces } from "./features/canvas";
import Tips from "./components/Tips";
import { RootState } from "./store";

const App = () => {
  const newPiece = useSelector((state: RootState) => state.interface.newPiece);

  const dispatch = useDispatch();

  useEffect(() => {
    const { getItem } = useLocalStorage<Piece[]>("pieces", [
      defaultCanvasPiece,
    ]);

    dispatch(setLoadedPieces(getItem()));
  }, [dispatch]);

  return (
    <main className="dark bg-background h-screen relative">
      <Interface>
        <BuilderCanvas />
      </Interface>
      <Tips state={newPiece == null ? "HOME" : "NEW_PIECE"} />
    </main>
  );
};

export default App;
