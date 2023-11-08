import PBIItem from "../../../SlidesComponents/PBIItem";
import image1 from "../../../assets/ScreenShots/3387-1.png";

export default function PBI3387() {
  return (
    <PBIItem
      PBIType="bug"
      PBINumber="3387"
      PBITitle={`EXPORTAR - Sección CFDIs - La pestaña de "Egresos" no se está exportando`}
    >
      <section>
        <h3>Descripción</h3>
        <p>
          No es posible realizar una exportación de CFDIs en la pestaña de{" "}
          <b>Egresos</b>
        </p>
        <img src={image1} />
      </section>
      <section>
        <h3>Resultados</h3>
        <p>
          Este caso no debería ocurrir en DEV dado que el error encontrado se
          debe a que en DEV se están haciendo pruebas con el campo{" "}
          <b>CfdiRelacionado</b> y no se ha actualizado el manejo de ese campo
          como JSON para procesarlo en la descarga de <b>Excel</b>
        </p>
        <img src="https://dev.azure.com/ezkorp/090f3ab7-b1c9-4fb2-9f2d-c25f5b23a1cb/_apis/wit/attachments/fc3f5e61-7ff9-4bb4-8f6f-2c38132c88d1?fileName=image.png" />
        <img src="https://dev.azure.com/ezkorp/090f3ab7-b1c9-4fb2-9f2d-c25f5b23a1cb/_apis/wit/attachments/3ca75d49-fe47-464e-a1fb-c55b4aeb8a1e?fileName=image.png" />
      </section>
      <section>
        <h3>Accionables</h3>
        <p>
          Se sacó el PBI del sprint y se espera considerar este comportamiento
          encontrado una vez se defina el tipo de dato definitivo de dicho campo
        </p>
      </section>
    </PBIItem>
  );
}
