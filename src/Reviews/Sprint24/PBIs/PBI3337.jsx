import PBIItem from "../../../SlidesComponents/PBIItem";

export default function PBI3337() {
  return (
    <PBIItem
      PBIType="pbi"
      PBINumber="3337"
      PBITitle={`PAGOS - Readaptar el parser de CFDIs que se descargan a los nuevos campos`}
      stack="back"
    >
      <section>
        <h3>Descripción</h3>
        <p>
          Adaptar el parseador actual para comenzar a guardar correctamente la
          info en BD de los CFDIs que se descarguen de ahora en adelante y poder
          manejar los nuevos campos que especifica el excel.
        </p>
      </section>
      <section>
        <h3>Accionables</h3>
        <ul>
          <li>Realizar pruebas en DEV</li>
          <li>
            Revertir el cambio en DEV para probar el script de reprocesamiento
          </li>
          <li>Aplicar el cambio en producción</li>
        </ul>
      </section>
    </PBIItem>
  );
}
