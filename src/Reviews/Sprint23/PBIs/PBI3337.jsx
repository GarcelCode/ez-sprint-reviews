import PBIItem from "../../../SlidesComponents/PBIItem";

export default function PBI3337() {
  return (
    <PBIItem
      PBIType="pbi"
      PBINumber="3337"
      PBITitle={`PAGOS - Readaptar el parser de CFDIs que se descargan a los nuevos campos`}
    >
      <section>
        <h3>Descripción</h3>
        <p>
          Adaptar el parseador actual para comenzar a guardar correctamente la
          info en BD de los CFDIs que se descarguen de ahora en adelante y poder
          manejar los nuevos campos que especifica el excel
        </p>
      </section>
      <section>
        <h3>Requerimientos</h3>
        <ul>
          <li>
            Los campos que faltan son: <b>RetencionesISR</b>,{" "}
            <b>RetencionesIEPS</b> y <b>MontoTotalPago</b>
          </li>
        </ul>
      </section>
      <section>
        <h3>Retos</h3>
        <ul>
          <li>
            Campo que no podíamos reutilizar (no existía): Total pagos relacionados [DoctoRelacionado.ImpPagado]
          </li>
          <li>
            Pruebas en local (el llenado de CFDIs no funcionaba para crear empresas)
          </li>
          <li>Dudas en campo <b>MonedaP</b></li>
          <li>Dudas en campo totales <b>Total pagos relacionados</b></li>
        </ul>
      </section>
    </PBIItem>
  );
}
