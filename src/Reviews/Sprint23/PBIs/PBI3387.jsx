import PBIItem from "../../../SlidesComponents/PBIItem";

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
          De acuerdo al análisis que realizó Sam se detectó que este problema
          solo sucede en DEV debido al cambio que se hizo en BD donde un campo
          que estaba almacenado como string se cambió y ahora se guarda como
          JSON. Es necesario aplicar el tratamiento necesario para que este
          problema se resuelva ahora que será aplicado lo mismo en la BD de PROD
        </p>
      </section>
    </PBIItem>
  );
}
