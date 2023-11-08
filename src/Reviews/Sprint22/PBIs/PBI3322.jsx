import EzAuditaSlide from "../../../SlidesComponents/EzAuditaSlide";
import PBIItem from "../../../SlidesComponents/PBIItem";

export default function PBI3322() {
  return (
    <PBIItem
      PBIType="pbi"
      PBINumber="3322"
      PBITitle={`NUEVA COLUMNA "Año (year)" en "ingresos" con filtro avanzado`}
    >
      <section>
        <h3>Historia</h3>
        <p>
          Como usuario quiero poder ver el campo de <b>año</b> para los CFDIs de
          ingresos y poder filtrar mediante él para facilitar mi contabilidad
        </p>
      </section>
      <section>
        <h3>Requerimientos</h3>
        <ul>
          <li>
            Exclusivamente en la pestaña de <b>ingresos</b>
          </li>
          <li>
            Es necesario incluir esta nueva columna como un filtro avanzado
          </li>
          <li>
            Deberá aparecer después de la columna de <b>Meses</b>
          </li>
          <li>Deberá estar oculta por default</li>
          <li>Deberá ser ordenable asc/dsc</li>
          <li>
            Esta nueva columna la debe contener el excel cuando se realiza una
            exportación
          </li>
        </ul>
      </section>
      <EzAuditaSlide
        url={"https://dev.ezaudita.com/cfdi-issued"}
        demoPBI={`3322 - NUEVA COLUMNA "Año (year)" en "ingresos" con filtro avanzado`}
      />
    </PBIItem>
  );
}
