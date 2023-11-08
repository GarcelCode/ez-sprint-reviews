import SprintTitle from "../../SlidesComponents/SprintTitle";
import PBI3322 from "./PBIs/PBI3322";
import PBI3335 from "./PBIs/PBI3335";
import PBI3346 from "./PBIs/PBI3346";
import PBI3349 from "./PBIs/PBI3349";
import PBI3387 from "./PBIs/PBI3387";
import PBI3389 from "./PBIs/PBI3389";
import PBI3393 from "./PBIs/PBI3393";

export default function Sprint22() {
  return (
    <div className="slides">
      <SprintTitle sprintNumber="22" sprintDate="27 octubre - 09 noviembre" />
      <PBI3346 />
      <PBI3322 />
      <PBI3349 />
      <PBI3389 />
      <PBI3393 />
      <PBI3387 />
      <PBI3335 />
    </div>
  );
}
