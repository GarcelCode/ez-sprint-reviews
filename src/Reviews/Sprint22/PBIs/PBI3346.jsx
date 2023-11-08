import PBIItem from "../../../SlidesComponents/PBIItem";

export default function PBI3346() {
  return (
    <PBIItem
      PBIType="pbi"
      PBINumber="3346"
      PBITitle="SSR Server Side Rendering"
    >
      <section>
        <h2>Descripción</h2>
        <ul style={{ textAlign: "left" }}>
          <li>Deuda técnica</li>
          <li>
            SSR Server side rendering - Reducir cantidad de llamadas al API
            después del login al abrir por primera vez cada sección
          </li>
          <li>
            Compartido [tareas]
            <ul>
              <li>3375 - Investigación SSR con React y Vite</li>
            </ul>
          </li>
        </ul>
      </section>
      <section>
        <h2>Conclusiones</h2>
        <ul>
          <li>
            Principales beneficios de aplicarlo no cumple directamente con el
            objetivo esperado
          </li>
          <li>
            Tiempos para aplicarlo son muy largos y con cierta incertidumbre
          </li>
          <li>
            Ya hay cambios que no se han cubierto al 100% en el código para
            atacar este {`"problema"`}
          </li>
          <li>
            Se necesita definir un conjunto de requerimientos necesarios para
            validar la PoC
          </li>
        </ul>
      </section>
    </PBIItem>
  );
}
