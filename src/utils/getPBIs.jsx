import PBIItem from "../SlidesComponents/PBIItem";
import getPBIActions from "./getPBIActions";
import getPBICause from "./getPBICause";
import getPBIDescription from "./getPBIDescription";
import getPBIRequirements from "./getPBIRequirements";
import getPBIURL from "./getPBIURL";

export default function getPBIs(PBI) {
  const PBIDescription = PBI.Description.resume;
  const PBIRequirements = PBI.Requirements;
  const PBIActions = PBI.Actions;
  const PBICause = PBI.Cause;

  return (
    <PBIItem
      PBIType={PBI.Type}
      PBINumber={PBI.Number}
      PBITitle={PBI.Title}
      stack={PBI.Stack}
      env={PBI.Env}
    >
      {getPBIDescription(PBIDescription)}
      {PBIRequirements && getPBIRequirements(PBIRequirements)}
      {PBIActions && getPBIActions(PBIActions)}
      {PBICause && getPBICause(PBICause)}
      {PBI.Url && getPBIURL(PBI.Url, PBI.Number, PBI.Title)}
    </PBIItem>
  );
}
