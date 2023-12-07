import PBIItem from "../../../SlidesComponents/PBIItem";

export default function PBI3336() {
  return (
    <PBIItem
      PBIType="pbi"
      PBINumber="3336"
      PBITitle={`PAGOS - Script y reproceso para extraer en BD los nuevos campos requeridos`}
    >
      <section>
        <h3>Descripción</h3>
        <p>
          Generar un script para realizar el reprocesamiento requerido para
          manejar los nuevos campos que actualmente no guardamos en BD y que
          especifica el excel
        </p>
      </section>
      <section>
        <h3>Requerimientos</h3>
        <ul>
          <li>El script hacerlo con SQL</li>
          <li>Utilizar xpath para extraer la información del XML</li>
          <li>El reproceso sólo aplicarlo a CFDIs y campos que sean necesarios</li>
        </ul>
      </section>
    </PBIItem>
  );
}
