import SprintTitle from "../../SlidesComponents/SprintTitle";
import PBI3144 from "./PBIs/PBI3144";
import PBI3337 from "./PBIs/PBI3337";
import PBI3339 from "./PBIs/PBI3339";
import PBI3340 from "./PBIs/PBI3340";
import PBI3341 from "./PBIs/PBI3341";
import PBI3437 from "./PBIs/PBI3437";
import PBI3505 from "./PBIs/PBI3505";

export default function Sprint24() {
  return (
    <div className="slides">
      <SprintTitle sprintNumber="24" sprintDate="24 noviembre - 7 diciembre" />
      <PBI3337 />
      <PBI3340 />
      <PBI3341 />
      <PBI3339 />
      <PBI3437 />
      <PBI3505 />
      <PBI3144 />
    </div>
  );
}
