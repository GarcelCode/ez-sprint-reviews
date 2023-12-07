import { useEffect } from "react";
import Reveal from "reveal.js";
import SprintTest from "./Reviews/SprintTest/SprintTest";

function App() {
  useEffect(() => {
    Reveal.initialize();
  }, []);

  return <SprintTest />;
}

export default App;
