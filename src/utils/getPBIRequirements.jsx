export default function getPBIRequirements(PBIRequirements) {
  return (
    <section>
      <h3>Requerimientos</h3>
      <ul>
        {PBIRequirements.map((requirement) => (
          <li>{requirement}</li>
        ))}
      </ul>
    </section>
  );
}
