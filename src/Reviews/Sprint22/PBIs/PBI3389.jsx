import EzAuditaSlide from "../../../SlidesComponents/EzAuditaSlide";
import PBIItem from "../../../SlidesComponents/PBIItem";

export default function PBI3389() {
  return (
    <PBIItem
      PBIType="bug"
      PBINumber="3389"
      PBITitle={`VER DETALLES - Los 3 puntitos de "ingreso" no muestran correctamente las retenciones cuando es más de 1`}
    >
      <section>
        <h3>Descripción</h3>
        <div>
          <p>
            Cuando existe un CFDI que tiene más de 1 retención, no se está
            mostrando la información correctamente
          </p>
          <img
            src="https://dev.azure.com/ezkorp/090f3ab7-b1c9-4fb2-9f2d-c25f5b23a1cb/_apis/wit/attachments/c088cf17-3b6f-4c27-a126-6640596f0011?fileName=image.png"
            width="60%"
          />
        </div>
      </section>

      <EzAuditaSlide
        url="https://dev.ezaudita.com"
        demoPBI={`3389 - Los 3 puntitos de "ingreso" no muestran correctamente las retenciones cuando es más de 1`}
      />
    </PBIItem>
  );
}
