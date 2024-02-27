import "./projectExample.scss";

export default function ProjectExample({ image, heading, body, isReversed }) {
  return (
    <div className={`example ${isReversed ? "reversed" : ""}`}>
      <img
        src={image}
        alt={`Example project: ${heading}`}
        className="example__image"
      />
      <div className="example__content">
        <h2 className="example__heading">{heading}</h2>
        <p className="example__body">{body}</p>
        <a className="example__link button button-secondary" href="/">
          VIEW PROJECT
        </a>
      </div>
    </div>
  );
}
