import data from "../ReviewData/Sprint32.json";
import getPBIs from "../utils/getPBIs";
import getSprintTitle from "../utils/getSprintTitle";

export default function Review() {
  const SprintData = data.SprintInfo;
  const SprintPBIs = data.PBIs;

  return (
    <div className="slides">
      {getSprintTitle(SprintData)}
      {SprintPBIs.map((PBI) => getPBIs(PBI))}
    </div>
  );
}
