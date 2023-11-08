import EzAuditaSlide from "../../../SlidesComponents/EzAuditaSlide";
import PBIItem from "../../../SlidesComponents/PBIItem";
import image1 from "../../../assets/ScreenShots/3335-1.png";

export default function PBI3335() {
  return (
    <PBIItem
      PBIType="bug"
      PBINumber="3335"
      PBITitle="EXPORTAR - Sección CFDIs - Las exportaciones no respetan el filtro PPD"
    >
      <section>
        <h3>Descripción</h3>
        <p>
          En la sección de CFDIs al estar filtrando las facturas PPD y presionar
          exportar por periodo, el excel descargado no respeta el filtro
          aplicado.
        </p>
      </section>
      <section>
        <h3>Resultados</h3>
        <p>
          Se encontró que el filtro utilizado para solicitar los CFDIs en la
          vista de la aplicación, no se estaban enviando al momento de hacer la
          descarga.
        </p>
        <img src={image1} />
      </section>
      <EzAuditaSlide
        url="https://dev.ezaudita.com"
        demoPBI={`3335 - EXPORTAR - Sección CFDIs - Las exportaciones no respetan el filtro PPD`}
      />
    </PBIItem>
  );
}
