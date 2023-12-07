import { useEffect } from "react";
import Reveal from "reveal.js";
// mport SprintTest from "./Reviews/SprintTest/SprintTest";
import Sprint24 from "./Reviews/Sprint24/Sprint24";

function App() {
  useEffect(() => {
    Reveal.initialize();
  }, []);

  return <Sprint24 />;
}

export default App;
