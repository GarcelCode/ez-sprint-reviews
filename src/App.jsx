import { useEffect } from "react";
import Reveal from "reveal.js";
import Sprint22 from "./Reviews/Sprint22";

function App() {
  useEffect(() => {
    Reveal.initialize();
  }, []);

  return <Sprint22 />;
}

export default App;
