import PropTypes from "prop-types";

export default function SprintTitle({ sprintNumber, sprintDate }) {
  return (
    <section>
      <h3>Sprint review {sprintNumber}</h3>
      <h4 style={{ fontSize: 33, lineHeight: 0 }}>{sprintDate}</h4>
    </section>
  );
}

SprintTitle.propTypes = {
  sprintNumber: PropTypes.string.isRequired,
  sprintDate: PropTypes.string.isRequired,
};
