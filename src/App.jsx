import { useEffect } from "react";
import Reveal from "reveal.js";
import Kanban2 from "./Reviews/Kanban2";
// mport SprintTest from "./Reviews/SprintTest/SprintTest";

function App() {
  useEffect(() => {
    Reveal.initialize();
  }, []);

  return <Kanban2 />;
}

export default App;
