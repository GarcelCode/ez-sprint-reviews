export default function getPBIActions(PBIActions) {
  return (
    <section>
      <h3>Accionables</h3>
      <ul>
        {PBIActions.map((action) => (
          <li>{action}</li>
        ))}
      </ul>
    </section>
  );
}
