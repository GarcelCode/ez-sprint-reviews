import generateList from "./generateList";
import generateParagraphs from "./generateParagraphs";
import s from "../styles/GenerateSlides.module.scss";

export default function generateSlide(slide) {
  const textContent = slide.content.text;
  const listContent = slide.content.list;

  const imageURL = new URL(
    `../assets/ScreenShots/${slide.content.image}`,
    import.meta.url
  ).href;

  return (
    <section>
      <h3>{slide.header}</h3>
      <div className={s.SlideContainer}>
        <div className={s.TextContainer}>
          {textContent ? generateParagraphs(textContent) : null}
          {listContent ? generateList(listContent) : null}
        </div>
        {slide.content.image && slide.type === "image" ? (
          <div className={s.ImageContainer}>
            <img src={imageURL} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
