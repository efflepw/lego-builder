import "./App.css";
import { BuilderCanvas } from "./features/canvas";
import { Interface } from "./features/interface";

const App = () => {
  return (
    <main className="dark bg-background h-screen">
      <Interface>
        <BuilderCanvas />
      </Interface>
    </main>
  );
};

export default App;
