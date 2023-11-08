import { PropTypes } from "prop-types";
export default function EzAuditaSlide({ url, demoPBI }) {
  return (
    <section data-background-iframe={url} data-background-interactive>
      <div
        style={{
          position: "absolute",
          marginLeft: "10px",
          marginTop: "-355px",
          width: "fit-content",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "#fff",
          fontSize: "20px",
          paddingLeft: "10px",
          paddingRight: "10px",
          height: "40px",
          textAlign: "left",
          lineHeight: "0",
          borderRadius: "5px",
        }}
      >
        <p style={{ marginTop: "7px" }}>Review {demoPBI}</p>
      </div>
    </section>
  );
}

EzAuditaSlide.propTypes = {
  demoPBI: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
