export default function generateList(list) {
  return (
    <div>
      <ul>
        {list.map((l) => (
          <li>{l}</li>
        ))}
      </ul>
    </div>
  );
}
