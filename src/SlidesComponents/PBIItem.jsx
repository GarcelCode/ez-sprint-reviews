import PropTypes from "prop-types";

export default function PBIItem({ PBIType, PBINumber, PBITitle, children }) {
  return (
    <section>
      <section>
        <h3 style={{ lineHeight: 0 }}>
          <p style={{ display: "inline-block", fontSize: 45, lineHeight: 0 }}>
            {PBIType === "pbi" ? `📄` : `🐞`}
          </p>{" "}
          {PBINumber}
        </h3>
        <h4
          style={{
            display: "inline",
            fontSize: 33,
            lineHeight: 0,
          }}
        >
          {PBITitle}
        </h4>
      </section>
      {children}
    </section>
  );
}

PBIItem.propTypes = {
  PBIType: PropTypes.string.isRequired,
  PBINumber: PropTypes.string.isRequired,
  PBITitle: PropTypes.string.isRequired,
  children: PropTypes.node,
};
