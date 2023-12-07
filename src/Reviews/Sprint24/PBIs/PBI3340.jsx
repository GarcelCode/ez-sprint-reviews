import PBIItem from "../../../SlidesComponents/PBIItem";

export default function PBI3340() {
  return (
    <PBIItem
      PBIType="pbi"
      PBINumber="3340"
      PBITitle={`PAGOS - Fuzzy search`}
      stack="back"
    >
      <section>
        <h3>Descripción</h3>
        <p>
          Como usuario quiero tener la posibilidad de buscar con textos en
          campos de interés sobre la lista de CFDIs de pagos para apoyar en mi
          contabilidad
        </p>
      </section>
      <section>
        <h3>Requerimientos</h3>
        <ul>
          <li>
            En la pestaña de pagos se deberaá tener la posibilidad de buscar
            texto libremente sobre algunos campos de CFDIs de pagos
          </li>
          <li>
            El comportamiento de este filtro de fuzzy search deberá ser igual
            que el de otras pestañas
          </li>
          <li>Sólo debe aplicar para los campos definidos en el excel</li>
        </ul>
      </section>
      <section>
        <h3>Accionables</h3>
        <ul>
          <li>Confirmar el correcto funcionamiento del fuzzy search</li>
          <li>Aplicar ajustes para el correcto funcionamiento</li>
        </ul>
      </section>
    </PBIItem>
  );
}
