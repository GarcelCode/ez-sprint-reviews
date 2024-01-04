import data from "../ReviewData/TMPKanban2.json";
import getPBIURL from "../utils/getPBIURL";
import getPBIs from "../utils/getPBIs";
import getSprintTitle from "../utils/getSprintTitle";

export default function Kanban2() {
  const SprintData = data.SprintInfo;
  const SprintPBIs = data.PBIs;

  return (
    <div className="slides">
      {getSprintTitle(SprintData)}
      {SprintPBIs.map((PBI) => getPBIs(PBI))}
    </div>
  );
}
