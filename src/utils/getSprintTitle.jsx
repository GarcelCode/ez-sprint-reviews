import SprintTitle from "../SlidesComponents/SprintTitle";

export default function getSprintTitle(sprintInfo) {
  return (
    <SprintTitle
      type={sprintInfo.Type}
      sprintNumber={sprintInfo.Number}
      sprintDate={sprintInfo.Date}
    />
  );
}
