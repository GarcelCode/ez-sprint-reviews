import EzAuditaSlide from "../../../SlidesComponents/EzAuditaSlide";
import PBIItem from "../../../SlidesComponents/PBIItem";

export default function PBI3436() {
  return (
    <PBIItem
      PBIType="bug"
      PBINumber="3436"
      PBITitle={`ADD - Al presionar sincronizar y luego cancelar, de todas formas manda aviso de sincronización enviada`}
    >
      <section>
        <h3>Descripción</h3>
        <p>
          Cuando estás en la sección del ADD en emitidos o recibidos y presionas
          el botón de <b>Sincronizar</b> aparece un modal para confirmar la
          acción, si en este modal se presiona en <b>Cancelar</b> el modal se
          cierra y la sincronización no se manda, sin embargo, aparece en
          pantalla una alerta que dice que la petición de sincronización ha sido
          enviada a pesar de no sea así.
        </p>
      </section>
      <EzAuditaSlide
        url="https://dev.ezaudita.com"
        demoPBI={`3436 - ADD - Al presionar sincronizar y luego cancelar, de todas formas manda aviso de sincronización enviada`}
      />
    </PBIItem>
  );
}
