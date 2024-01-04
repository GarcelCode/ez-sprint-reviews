import PropTypes from "prop-types";
import s from "./SprintTitle.module.scss"

export default function SprintTitle({ type, sprintNumber, sprintDate }) {
  return (
    <section className={s.Section}>
      <h3>{type} review {sprintNumber}</h3>
      <h4 className={s.Card} style={{backdropFilter: blur("14px")}}>{sprintDate}</h4>
    </section>
  );
}

SprintTitle.propTypes = {
  type: PropTypes.string.isRequired,
  sprintNumber: PropTypes.string.isRequired,
  sprintDate: PropTypes.string.isRequired,
};
