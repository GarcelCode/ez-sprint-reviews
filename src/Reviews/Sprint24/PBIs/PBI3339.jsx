import PBIItem from "../../../SlidesComponents/PBIItem";

export default function PBI3339() {
  return (
    <PBIItem
      PBIType="pbi"
      PBINumber="3339"
      PBITitle={`PAGOS - Exportación a Excel > Por periodo, ejercicio o selección mediante el checkbox`}
      stack="full"
    >
      <section>
        <h3>Descripción</h3>
        <p>
          Como usuario quiero poder exportar a excel la información de un
          periodo o ejercicio de los CFDIs de pago para apoyar en mi
          contabilidad
        </p>
      </section>
      <section>
        <h3>Requerimientos</h3>
        <ul>
          <li>
            Al igual que otras pestañas, la pestaña "Pago" deberá tener la
            posibilidad de exportar a excel el ejercicio o período seleccionado
          </li>
          <li>Considerar las columnas y el orden configurado por el usuario</li>
          <li>
            La funcionalidad deberá ser consistente y con el mismo flujo como ya
            funciona en otras pestañas
          </li>
        </ul>
      </section>
      <section>
        <h3>Accionables</h3>
        <ul>
          <li>
            Agregar código para la exportación de las nuevas columnas en backend
          </li>
          <li>Confirmar el correcto funcionamiento</li>
          <li>Aplicar ajustes para el correcto funcionamiento</li>
        </ul>
      </section>
    </PBIItem>
  );
}
