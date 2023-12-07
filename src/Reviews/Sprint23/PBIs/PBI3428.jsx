import PBIItem from "../../../SlidesComponents/PBIItem";

export default function PBI3428() {
  return (
    <PBIItem
      PBIType="pbi"
      PBINumber="3428"
      PBITitle={`DESCUENTO - Buen fin del 25% (Inicia 13 de noviembre)`}
    >
      <section>
        <h3>Historia</h3>
        <p>
          Como stakeholder quiero ofrecer un descuento del 25% del buen fin
          general para primeras compras y upgrades para aprovechar la temporada
          y incrementar nuestras ventas.
        </p>
      </section>
      <section>
        <h3>Requerimientos</h3>
        <ul>
          <li>
            Este descuento deberá iniciar y estar publicado el 13 de noviembre a
            primera hora.
          </li>
          <li>
            Estos cambios solo serán temporales y deberán de ser desactivados el
            día de finalización de la promoción, tentativamente los últimos días
            de Noviembre.
          </li>
        </ul>
      </section>
    </PBIItem>
  );
}
