import PBIItem from "../../../SlidesComponents/PBIItem";

export default function PBI3341() {
  return (
    <PBIItem
      PBIType="pbi"
      PBINumber="3341"
      PBITitle={`PAGOS - Sorting sobre columnas de la tabla de CFDIs`}
      stack="full"
    >
      <section>
        <h3>Descripción</h3>
        <p>
          Algunas de las columnas que aparecen en la tabla CFDIs de la pestaña
          de Pago se requiere que puedan ser ordenadas en ascendente o
          descendente.
        </p>
      </section>
      <section>
        <h3>Requerimientos</h3>
        <p>
          Las columnas que deberán tener esta cualidad están especificadas en el
          excel.
        </p>
      </section>
      <section>
        <h3>Accionables</h3>
        <ul>
          <li>Aplicar la posibilidad de ordenamiento desde frontend</li>
          <li>Confirmar el correcto funcionamiento</li>
          <li>Aplicar ajustes para el correcto funcionamiento</li>
        </ul>
      </section>
    </PBIItem>
  );
}
