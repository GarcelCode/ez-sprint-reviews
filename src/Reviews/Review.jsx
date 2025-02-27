import data from "../ReviewData/Review270225.json";
import getPBIs from "../utils/getPBIs";
import getSprintTitle from "../utils/getSprintTitle";

export default function Review() {
  const SprintData = data.SprintInfo;
  const SprintPBIs = data.PBIs;

  return (
    <div key="review" className="slides">
      {getSprintTitle(SprintData)}
      {SprintPBIs.map((PBI) => getPBIs(PBI))}
    </div>
  );
}
