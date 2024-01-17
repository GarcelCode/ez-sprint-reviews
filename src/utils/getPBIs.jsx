import PBIItem from "../SlidesComponents/PBIItem";
import generateSlide from "./generateSlide";

export default function getPBIs(PBI) {
  const slides = PBI.Slides;

  return (
    <PBIItem
      PBIType={PBI.Type}
      PBINumber={PBI.Number}
      PBITitle={PBI.Title}
      stack={PBI.Stack}
      env={PBI.Env}
    >
      {slides.map((slide) => generateSlide(slide))}
      {PBI.Url && getPBIURL(PBI.Url, PBI.Number, PBI.Title)}
    </PBIItem>
  );
}
