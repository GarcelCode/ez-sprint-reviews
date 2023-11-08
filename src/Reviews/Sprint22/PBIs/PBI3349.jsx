import EzAuditaSlide from "../../../SlidesComponents/EzAuditaSlide";
import PBIItem from "../../../SlidesComponents/PBIItem";

export default function PBI3349() {
  return (
    <PBIItem
      PBIType="pbi"
      PBINumber="3349"
      PBITitle={`NÓMINA - Agregar las columnas "Tipo de relación" y "UUID Relacionado"`}
    >
      <section>
        <h3>Historia</h3>
        <p>
          Incluir las columnas <b>Tipo de relación</b> y <b>UUID Relacionado</b>{" "}
          a la pestaña de <b>nómina</b> de la sección de CFDIs.
        </p>
      </section>
      <section>
        <h3>Requerimientos</h3>
        <ul>
          <li>
            Las columnas se deberán de incluir al final de la tabla, siendo
            primero la columna <b>UUID Relacionado</b> y después{" "}
            <b>Tipo de relación</b>
          </li>
          <li>Deberán de quedar ocultas por default</li>
        </ul>
      </section>
      <EzAuditaSlide
        url="https://dev.ezaudita.com/cfdi-issued?cid=5cf894a3-4ebe-4b62-9fa8-0ea3b21b401f&type=payroll&period=2023-octubre&state=active"
        demoPBI={`3349 - NÓMINA - Agregar las columnas "Tipo de relación" y "UUID Relacionado"`}
      />
    </PBIItem>
  );
}
