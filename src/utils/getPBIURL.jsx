import EzAuditaSlide from "../SlidesComponents/EzAuditaSlide";

export default function getPBIURL(PBIURL, PBINumber, PBITitle) {
  return <EzAuditaSlide url={PBIURL} demoPBI={`${PBINumber} - ${PBITitle}`} />;
}
