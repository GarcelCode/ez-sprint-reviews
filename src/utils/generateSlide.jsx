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
      <div
        className={
          slide.content.image && slide.type === "image"
            ? s.SlideContainer
            : s.SlideContainerImageRow
        }
      >
        <div className={s.TextContainer}>
          {textContent ? generateParagraphs(textContent) : null}
          {listContent ? generateList(listContent) : null}
        </div>
        {slide.content.image &&
        (slide.type === "image" || slide.type === "image-row") ? (
          <div
            className={
              slide.content.image && slide.type === "image"
                ? s.ImageContainer
                : s.ImageContainerImageRow
            }
          >
            <img style={{ maxWidth: slide.imageSize }} src={imageURL} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
