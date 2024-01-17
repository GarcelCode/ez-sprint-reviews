import { useEffect } from "react";
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import Review from "./Reviews/Review";
// mport SprintTest from "./Reviews/SprintTest/SprintTest";

let deck = new Reveal({ plugins: [RevealMarkdown] });

function App() {
  useEffect(() => {
    deck.initialize();
  }, []);

  return <Review />;
}

export default App;
