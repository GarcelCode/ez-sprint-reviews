export default function generateParagraphs(text) {
  return (
    <div>
      {text.map((t) => (
        <div>{t}</div>
      ))}
    </div>
  );
}
