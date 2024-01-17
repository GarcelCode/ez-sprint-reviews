import PropTypes from "prop-types";
import s from "./SprintTitle.module.scss";

export default function SprintTitle({ type, sprintNumber, sprintDate }) {
  return (
    <section id={s.SectionSlide}>
      <h3>
        {type} review {sprintNumber}
      </h3>
      <div className={s.Card}>{sprintDate}</div>
    </section>
  );
}

SprintTitle.propTypes = {
  type: PropTypes.string.isRequired,
  sprintNumber: PropTypes.string.isRequired,
  sprintDate: PropTypes.string.isRequired,
};
