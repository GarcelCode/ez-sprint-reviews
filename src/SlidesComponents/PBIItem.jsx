import PropTypes from "prop-types";

export default function PBIItem({
  PBIType,
  PBINumber,
  PBITitle,
  children,
  stack,
}) {
  return (
    <section>
      <section>
        <h3 style={{ lineHeight: 0 }}>
          <p style={{ display: "inline-block", fontSize: 45, lineHeight: 0 }}>
            {PBIType === "pbi" ? `📄` : `🐞`}
          </p>{" "}
          {PBINumber}
        </h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 25,
            fontSize: 22,
          }}
        >
          {stack === "front" || stack === "full" ? (
            <div
              style={{
                backgroundColor: "#005577",
                padding: "2px 15px 0 15px",
                borderRadius: 5,
              }}
            >
              Front-End
            </div>
          ) : null}
          {stack === "back" || stack === "full" ? (
            <div
              style={{
                backgroundColor: "#aa0022",
                padding: "2px 15px 0 15px",
                borderRadius: 5,
              }}
            >
              Back-End
            </div>
          ) : null}
        </div>
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
  stack: PropTypes.string.isRequired,
};
