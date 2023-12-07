import SprintTitle from "../../SlidesComponents/SprintTitle";
import PBI3336 from "./PBIs/PBI3336";
import PBI3337 from "./PBIs/PBI3337";
import PBI3387 from "./PBIs/PBI3387";
import PBI3428 from "./PBIs/PBI3428";

export default function Sprint23() {
    return <div className="slides">
        <SprintTitle sprintNumber="23" sprintDate="10 noviembre - 23 noviembre"/>
        <PBI3428 />
        <PBI3387 />
        <PBI3336 />
        <PBI3337 />
    </div>
}